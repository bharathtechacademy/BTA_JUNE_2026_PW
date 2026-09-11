# Playwright BDD Framework Step by Step 

## 1. Creating a local working directory within the workspace (playwright-bdd-framework)
goto terminal  (cntrl+`)  => cd C:\Training\PlaywrightTrainings\May_2026\playwright-bdd-framework

## 2. Install necessary dependencies based on our project requirements. 
1. **TypeScript** — `npm install typescript ts-node @types/node` and `npx tsc --init` for language support.
2. **Playwright** - `npm init playwright@latest` (or add `@playwright/test`) for web / API automation with the Playwright Test runner.
3. **Excel** — `npm install excel xlsx` to read or work with spreadsheet data.
4. **PDF** — `npm install pdf-parse` and (in this project) `pdf-parse-new` for PDF utilities.
5. **PostgreSQL** — `npm install pg @types/pg` to connect to a database from tests or helpers.
6. **Cucumber** - `npm install @cucumber/cucumber` To set up Cucumber BDD framework and to integrate feature-while step definitions 

## 3. Set up the global configurations within the package.json and tsconfig.json. 
1. package.json => "type" : "module"
2. tsconfig.json => "noEmit": true
3. tsconfig.json => "allowImportingTsExtensions": true    
4. tsconfig.json => "types": ["node"]

## 4. Set up the folder structure to maintain different components of the framework. 
1. commons => To maintain the common methods related to UI, API, database, and load testing 
2. config => To maintain the configuration data like application URLs, API URLs, credentials, and other common configurations 
3. files => To maintain flat files like PDF, Excel, etc. 
4. features => To maintain Cucumber feature files for UI, API database, and load testing related validations 
5. step-definitions => To maintain step definition for each and every step written in the Cucumber Feature file 
6. utils =>  To maintain all the common utilities and helper methods to integrate different TypeScript libraries useful in day-to-day automation 
7. page-objects => To maintain page-wise locators and page-wise common methods separately to implement page object model design pattern 
8. testdata => To maintain the additional test data along with the data added in the feature file 
9. screenshots => To maintain all the screenshots related to failure test cases 
10. reports => To maintain all the test results report every time when test execution is complete 
11. support => To maintain the hooks and world file related to Cucumber configurations to link feature files and step definitions 

## 5. Set up the Cucumber runner file by adding all the configurations about feature files and step definitions. 
Creating cucumber.cjs file to maintain the cucumber configurations like feature file, path, step definition path, and test result report related details etc. 
module.exports = {
  default: {
    <!-- paths: ['features/**/*.feature'],  -->
    loader: ['ts-node/esm'],
    import: ['support/**/*.ts', 'step-definitions/**/*.ts'],
    format: ['progress-bar', 'html:reports/cucumber-report.html'],
    publishQuiet: true
  }
};