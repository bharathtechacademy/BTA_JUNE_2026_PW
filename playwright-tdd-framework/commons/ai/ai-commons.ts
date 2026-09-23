import * as fs from 'fs';
import * as path from 'path';

export interface JiraConfig {
    jiraUrl: string;
    jiraUsername: string;
    jiraApiToken: string;
}

export interface JiraComment {
    id: string;
    author: string;
    body: string;
    created: string;
}

export interface JiraAttachment {
    id: string;
    filename: string;
    size: number;
    mimeType: string;
    author: string;
    created: string;
    contentUrl: string;
}

export interface JiraStoryDetails {
    key: string;
    summary: string;
    issueType: string;
    status: string;
    priority: string;
    reporter: string;
    assignee: string;
    created: string;
    updated: string;
    labels: string[];
    components: string[];
    descriptionRaw: any;
    descriptionRendered: string;
    acceptanceCriteria: string;
    comments: JiraComment[];
    attachments: JiraAttachment[];
    subtasks: Array<{ key: string; summary: string; status: string }>;
    linkedIssues: Array<{ relation: string; key: string; summary: string; status: string }>;
}

export class AICommons {

    private static envConfig: JiraConfig | null = null;

    /**
     * Loads Jira configuration securely from .env file in the project root.
     * Throws an error if required configuration keys are missing, without leaking credentials.
     */
    public static loadJiraConfig(envPath: string = path.resolve(process.cwd(), '.env')): JiraConfig {
        if (this.envConfig) {
            return this.envConfig;
        }

        if (!fs.existsSync(envPath)) {
            throw new Error(`Environment file not found at: ${envPath}. Please create .env with JIRA_URL, JIRA_USERNAME, and JIRA_API_TOKEN.`);
        }

        const envContent = fs.readFileSync(envPath, 'utf-8');
        let jiraUrl = '';
        let jiraUsername = '';
        let jiraApiToken = '';

        for (const line of envContent.split(/\r?\n/)) {
            const trimmed = line.trim();
            if (!trimmed || trimmed.startsWith('#')) continue;

            const firstEq = trimmed.indexOf('=');
            if (firstEq === -1) continue;

            const key = trimmed.substring(0, firstEq).trim();
            const val = trimmed.substring(firstEq + 1).trim();

            if (key === 'JIRA_URL') jiraUrl = val;
            else if (key === 'JIRA_USERNAME') jiraUsername = val;
            else if (key === 'JIRA_API_TOKEN') jiraApiToken = val;
        }

        if (!jiraUrl || !jiraUsername || !jiraApiToken) {
            const missing: string[] = [];
            if (!jiraUrl) missing.push('JIRA_URL');
            if (!jiraUsername) missing.push('JIRA_USERNAME');
            if (!jiraApiToken) missing.push('JIRA_API_TOKEN');
            throw new Error(`Missing required Jira configuration in .env: ${missing.join(', ')}`);
        }

        // Normalize URL by removing trailing slash
        if (jiraUrl.endsWith('/')) {
            jiraUrl = jiraUrl.slice(0, -1);
        }

        this.envConfig = { jiraUrl, jiraUsername, jiraApiToken };
        return this.envConfig;
    }

    /**
     * Fetches a Jira issue/story through the Jira REST API v3/v2.
     * Retrieves description, acceptance criteria, comments, attachments, and metadata.
     * Sanitizes errors to prevent exposing tokens.
     */
    public static async fetchJiraStory(issueKey: string, envPath?: string): Promise<JiraStoryDetails> {
        const config = this.loadJiraConfig(envPath);
        const cleanKey = issueKey.trim().toUpperCase();

        const authHeader = 'Basic ' + Buffer.from(`${config.jiraUsername}:${config.jiraApiToken}`).toString('base64');
        const endpoint = `${config.jiraUrl}/rest/api/3/issue/${cleanKey}?expand=renderedFields,names,schema`;

        let response: Response;
        try {
            response = await fetch(endpoint, {
                method: 'GET',
                headers: {
                    'Authorization': authHeader,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
        } catch (networkErr: any) {
            throw new Error(`Network failure connecting to Jira at ${config.jiraUrl}: ${networkErr?.message || networkErr}`);
        }

        if (!response.ok) {
            if (response.status === 401) {
                throw new Error(`Jira authentication failed (401 Unauthorized). Please check JIRA_USERNAME and JIRA_API_TOKEN in .env.`);
            } else if (response.status === 403) {
                throw new Error(`Access forbidden to Jira issue '${cleanKey}' (403 Forbidden). Ensure your Jira account has read permissions.`);
            } else if (response.status === 404) {
                throw new Error(`Jira story/issue '${cleanKey}' was not found (404 Not Found) on ${config.jiraUrl}.`);
            } else {
                throw new Error(`Jira API returned HTTP ${response.status} (${response.statusText}) for issue '${cleanKey}'.`);
            }
        }

        const data: any = await response.json();
        const fields = data.fields || {};
        const rendered = data.renderedFields || {};
        const names = data.names || {};

        // Extract comments
        const commentsList: JiraComment[] = [];
        if (fields.comment && Array.isArray(fields.comment.comments)) {
            for (const c of fields.comment.comments) {
                commentsList.push({
                    id: c.id,
                    author: c.author?.displayName || c.author?.name || 'Unknown',
                    body: rendered.comment?.comments?.find((rc: any) => rc.id === c.id)?.body || this.extractTextFromADF(c.body) || String(c.body || ''),
                    created: c.created || ''
                });
            }
        }

        // Extract attachments
        const attachmentsList: JiraAttachment[] = [];
        if (Array.isArray(fields.attachment)) {
            for (const att of fields.attachment) {
                attachmentsList.push({
                    id: att.id,
                    filename: att.filename,
                    size: att.size,
                    mimeType: att.mimeType,
                    author: att.author?.displayName || 'Unknown',
                    created: att.created,
                    contentUrl: att.content
                });
            }
        }

        // Extract Subtasks
        const subtasksList: Array<{ key: string; summary: string; status: string }> = [];
        if (Array.isArray(fields.subtasks)) {
            for (const st of fields.subtasks) {
                subtasksList.push({
                    key: st.key,
                    summary: st.fields?.summary || '',
                    status: st.fields?.status?.name || ''
                });
            }
        }

        // Extract Linked Issues
        const linkedList: Array<{ relation: string; key: string; summary: string; status: string }> = [];
        if (Array.isArray(fields.issuelinks)) {
            for (const link of fields.issuelinks) {
                const relation = link.type?.name || 'relates to';
                const target = link.inwardIssue || link.outwardIssue;
                if (target) {
                    linkedList.push({
                        relation,
                        key: target.key,
                        summary: target.fields?.summary || '',
                        status: target.fields?.status?.name || ''
                    });
                }
            }
        }

        // Search for Acceptance Criteria in custom fields
        let acceptanceCriteria = '';
        for (const [fieldKey, fieldName] of Object.entries(names)) {
            const nameStr = String(fieldName).toLowerCase();
            if (nameStr.includes('acceptance criteria') || nameStr === 'ac') {
                const val = rendered[fieldKey] || fields[fieldKey];
                if (val) {
                    acceptanceCriteria = typeof val === 'string' ? val : this.extractTextFromADF(val);
                    break;
                }
            }
        }

        // Rendered description or fallback plain text from ADF
        const descriptionRendered = rendered.description || this.extractTextFromADF(fields.description) || '';

        return {
            key: data.key,
            summary: fields.summary || 'No Summary',
            issueType: fields.issuetype?.name || 'Story',
            status: fields.status?.name || 'Unknown',
            priority: fields.priority?.name || 'Medium',
            reporter: fields.reporter?.displayName || 'Unassigned',
            assignee: fields.assignee?.displayName || 'Unassigned',
            created: fields.created || '',
            updated: fields.updated || '',
            labels: fields.labels || [],
            components: (fields.components || []).map((c: any) => c.name),
            descriptionRaw: fields.description,
            descriptionRendered,
            acceptanceCriteria,
            comments: commentsList,
            attachments: attachmentsList,
            subtasks: subtasksList,
            linkedIssues: linkedList
        };
    }

    /**
     * Recursively extracts plain text from Atlassian Document Format (ADF) nodes.
     */
    public static extractTextFromADF(node: any): string {
        if (!node) return '';
        if (typeof node === 'string') return node;
        if (node.text) return node.text;

        let result = '';
        if (Array.isArray(node.content)) {
            for (const child of node.content) {
                result += this.extractTextFromADF(child);
                if (child.type === 'paragraph' || child.type === 'heading') {
                    result += '\n';
                }
            }
        }
        return result.trim();
    }

    /**
     * Saves the generated Requirement Analysis HTML report into 'ai-integration/requirement-analysis-report/'.
     * Returns the absolute path of the generated HTML file.
     */
    public static saveHtmlReport(
        issueKey: string,
        htmlContent: string,
        targetDir: string = path.resolve(process.cwd(), 'ai-integration', 'requirement-analysis-report')
    ): string {
        if (!fs.existsSync(targetDir)) {
            fs.mkdirSync(targetDir, { recursive: true });
        }

        const sanitizedKey = issueKey.trim().toUpperCase().replace(/[^A-Z0-9_-]/g, '_');
        const filename = `${sanitizedKey}-requirement-analysis-report.html`;
        const filePath = path.join(targetDir, filename);

        fs.writeFileSync(filePath, htmlContent, 'utf-8');
        return filePath;
    }
}

// Allow direct execution from terminal: node --experimental-strip-types commons/ai/ai-commons.ts <ISSUE-KEY>
if (process.argv[1] && (process.argv[1].endsWith('ai-commons.ts') || process.argv[1].endsWith('ai-commons.js'))) {
    const key = process.argv[2] || 'CRM-1';
    AICommons.fetchJiraStory(key)
        .then(details => {
            console.log(JSON.stringify({
                key: details.key,
                summary: details.summary,
                issueType: details.issueType,
                status: details.status,
                priority: details.priority,
                reporter: details.reporter,
                assignee: details.assignee,
                description: details.descriptionRendered || details.extractTextFromADF ? details.descriptionRendered : '',
                acceptanceCriteria: details.acceptanceCriteria,
                commentsCount: details.comments.length,
                attachmentsCount: details.attachments.length
            }, null, 2));
        })
        .catch(err => {
            console.error('Error fetching Jira story:', err.message);
            process.exit(1);
        });
}
