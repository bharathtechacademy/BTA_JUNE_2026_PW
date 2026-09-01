import {test} from '@playwright/test';
import {APICommons} from '../../commons/api/api-commons.ts';
import testdata from '../../testdata/api/data.json' with {type : 'json'};

test.describe('GIT API Tests', () => {

    let api : APICommons;

    //Initialize the API common methods and request a context before each test case. 
    test.beforeEach( async ()=>{
        api = new APICommons();
        await api.InitializeRequestContext();
    });

    //Test Case 1: Request to create a duplicate repository within GitHub. 
    test('Create a duplicate repository', async () => {
        const data = testdata.duplicateRepo;
        await api.getResponse(data.requestType, data.endpoint , data.payload);
        await api.validateStatusCode(data.expCode);
        await api.validateStatusMessage(data.expMessage);
        await api.validateResponseBody("message", data.expError);
        await api.validateResponseSchema("message", data.expDataType);
    });

    //Test Case 2: Request to create a valid repository within GitHub. 
    test('Create a valid repository', async () => {
        const data = testdata.validRepo;
        await api.getResponse(data.requestType, data.endpoint , data.payload);
        await api.validateStatusCode(data.expCode);
        await api.validateStatusMessage(data.expMessage);
        await api.validateResponseBody("name", data.name);
        await api.validateResponseSchema("name", data.expDataType);
    });




});