import { request, expect } from '@playwright/test';
import config from '../../config/config.json' with {type: 'json'};

export class APICommons {

    private requestContext: any; // Request context is all about prerequisites that need to be added before sending the API request. 
    private response: any; // Response variable will be used to store the output response received from the server. 

    //Common method to create the request context (The method that we are going to use to add base URL, headers, authorization details, etc. )
    async InitializeRequestContext() {
        this.requestContext = await request.newContext({
            baseURL: config.api.base_url,
            extraHTTPHeaders: {
                'Accept': 'application/vnd.github+json',
                'X-GitHub-Api-Version': '2026-03-10',
                'Authorization': config.api.token
            }
        })
    };

    //Common method to send out an API request and get the response 
    async getResponse(requestType: string, endpoint: string, payload?: any) {

        //Convert request type into lowercase
        requestType = requestType.toLowerCase();

        //Based on the request type, now send the request and get the response. 
        switch (requestType) {

            case 'get':
                this.response = await this.requestContext.get(endpoint);
                break;

            case 'delete':
                this.response = await this.requestContext.delete(endpoint);
                break;

            case 'post':
                this.response = await this.requestContext.post(endpoint, { data: payload });
                break;

            case 'put':
                this.response = await this.requestContext.put(endpoint, { data: payload });
                break;

            case 'patch':
                this.response = await this.requestContext.patch(endpoint, { data: payload });
                break;

            default:
                throw new Error(`Unsupported request type entered by the user : ${requestType}`)

        }
    }

    //Common method to validate the status code 
    async validateStatusCode(expCode :number){
        const actualCode = await this.response.status();
        await expect(actualCode).toBe(expCode);
    }

    //Common method to validate the status message 
    async validateStatusMessage(expMessage :string){
        const actualMessage = await this.response.statusText();
        await expect(actualMessage).toBe(expMessage);
    }

    //Common method to validate the response body
    async validateResponseBody(key :string , expValue :any){
        const responseBody = await this.response.json();
        const actualValue = responseBody[key];
        await expect(actualValue).toBe(expValue);
    }
    //Common method to validate the response headers
    async validateResponseHeaders(key :string , expValue :any){
        const responseHeaders = await this.response.headers();
        const actualValue = responseHeaders[key];
        await expect(actualValue).toBe(expValue);
    }

    //Common method to validate the response schema 
    async validateResponseSchema(key :string, expDataType :string){
        const responseBody = await this.response.json();
        const actualValue = responseBody[key];
        const actualDatatype = typeof actualValue;
        await expect(actualDatatype).toBe(expDataType);
    }




}

