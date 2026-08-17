# Playwright framework design step-by-step 

## 1. Creating a local working directory within the workspace. 
* Example : playwright-tdd-framework
* terminal-command : cd C:\Training\PlaywrightTrainings\June_2026\playwright-tdd-framework

## 2. Install necessary dependencies based on the project requirements. 
1. **TypeScript** — `npm install typescript ts-node @types/node` and `npx tsc --init` for programming language support.
2. **Playwright** — `npm init playwright@latest` (or add `@playwright/test`) for web / API automation with the Playwright.
3. **PostgreSQL** — `npm install pg @types/pg` to connect to a database and perform db validations
4. **Excel** — `npm install excel xlsx` to read or work with spreadsheet data.
5. **PDF** — `npm install pdf-parse` and (in this project) `pdf-parse-new` for PDF utilities.

## 3. Update the global configurations at project level within the package.json and tsconfig.json. 
 * package.json  => "type": "module"   //to import data/functions from other files
 * tsconfig.json =>  "verbatimModuleSyntax": false // TypeScript can remove type-only imports during compilation. 
 * tsconfig.json =>  "types": ["node"] //Include the Node.js type definitions in this project. 

 ## 4. Creating the folder structure to maintain different components of the framework 

  1. commons => To maintain all the common methods related to UI (commons\ui\web-commons.ts), API (commons\api\api-commons.ts), database (commons\db\db-commons.ts), and performance testing (commons\jmeter\jmeter-commons.ts), and of course AI-related (commons\ai\ai-commons.ts) common methods at one place 

  2. config => config.json file To maintain all the configurations related data or common data for different components like UI, application URLs, credentials, database connection related information, AI connections, etc. 

  3. testdata => To maintain test data related to each and every component like UI (testdata\ui\data.json), API (testdata\api\data.json), database(testdata\db\data.json), AI(testdata\ai\data.json), and performance testing 

  4. utilities => To maintain common methods related to different types of utilities we are going to use in our framework based on our application needs. 

- Excel Utility (utilities\excel-util.ts)
 - PDF Utility (utilities\pdf-util.ts)
 - DB Utility (utilities\db-util.ts)

 5. page-objects => We will maintain page-wise locators (page-objects\page-elements)  and page-wise common methods (page-objects\page-steps) separately to implement the page object model design pattern within the framework. 

 6. tests => To maintain all the test cases related to each and every component, like UI, API, performance testing, and AI, etc. 

 7. .env => Environment-specific data credentials and secrets we are going to maintain within the environment file locally, and later we are going to ignore them while pushing the code into git. 

 8. test-results => To maintain all the test results, reports, videos, traces, etc. related to our test execution 

 9. test-results/screenshots => To maintain a specific screen shot related to your application, whenever we want to collect and store it, we can use this particular folder. 

 10. files => To maintain flat files like Excel, PDF, CSV, images, etc 