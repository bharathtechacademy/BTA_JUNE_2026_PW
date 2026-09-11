import { Given, When, Then } from '@cucumber/cucumber';
import { APICommons } from '../../commons/api/api-commons.ts';
import data from '../../testdata/api/data.json' with {type: 'json'};

let api: APICommons;

//Given API request context is initialized
Given('API request context is initialized', async function () {
    api = new APICommons();
    await api.InitializeRequestContext();
});

// When I send a "POST" request with the endpoint "/user/repos"to create a duplicate repository with the name "JmeterRepo" and description "This is a duplicate repository"
When('I send a {string} request with the endpoint {string} to create a duplicate repository with the name {string} and description {string}', async function (requestType, endpoint, repoName, repoDescription) {
    let requestBody = data.createRepo.body;
    requestBody.name = repoName;
    requestBody.description = repoDescription;    
    await api.getResponse(requestType, endpoint, requestBody);
});

// Then I should receive a response with status code 422
Then('I should receive a response with status code {int}', async function (statusCode) {
    await api.validateStatusCode(statusCode);
});

// And I should receive a response with a status message "Unprocessable Entity"
Then('I should receive a response with a status message {string}', async function (statusMessage) {
    await api.validateStatusMessage(statusMessage);
});

// And I should receive a response with a body having "message" as "Repository creation failed."
Then('I should receive a response with a body having {string} as {string}', async function (key, value) {
    await api.validateResponseBody(key, value);
});