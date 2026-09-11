import { test, expect, request } from '@playwright/test';
import config from '../../config/config.json' with {type: 'json'};

export class APICommons {

    private requestContext: any; // Pre-requisites of API requests like headers, authorization-related information, etc. 
    private response: any; //Output received from the API request 

    //Method to Create Request Context  (Meaningful adding base URL headers, authorizations, etc )
    async InitializeRequestContext() {
        this.requestContext = await request.newContext({
            baseURL: config.api.base_url,            
            extraHTTPHeaders: {
                'accept': 'application/vnd.github+json',
                'Authorization': config.api.token
            }
        });
    }

    //Common method to send the request and get the response 
    async getResponse(requestType: string, endpoint: string, payload?: any) {
        switch (requestType.toLowerCase()) {

            case 'get':
                this.response = await this.requestContext.get(endpoint);
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
            case 'delete':
                this.response = await this.requestContext.delete(endpoint);
                break;
            default:
                throw new Error(`Unsupported request type :${requestType}`);
        }
        //Wait for two seconds before sending the next request. 
        await new Promise(resolve => setTimeout(resolve,2000));
        return this.response;
    }

    //Common method to validate the status code 
    async validateStatusCode(expCode:number){
        const actualCode =await this.response.status();
        await expect(actualCode).toBe(expCode);
    }

    //Common method to validate the status message 
    async validateStatusMessage(expMessage:string){
        const actualMessage = await this.response.statusText();
        await expect(actualMessage).toBe(expMessage);
    }

    //Common method to validate the response body
    async validateResponseBody(key:string, expValue:any){
        const responseBody = await this.response.json();
        const actualValue = responseBody[key];
        await expect(actualValue).toBe(expValue);
    }

    //Common method to validate the response header 
    async validateResponseHeader(headerName:string, expValue:any){
        const headers = await this.response.headers();
        const actualValue = headers[headerName];
        await expect(actualValue).toBe(expValue);
    }

    //Common method to validate the schema response body 
    async validateResponseSchema(key :string, expDataType:string){
        const responseBody = await this.response.json();
        const actualValue = responseBody[key];
        const actualDataType = typeof actualValue;
        await expect(actualDataType).toBe(expDataType);
    }

    //Common method to validate cookie in the response 
    async validateResponseCookie(cookieName:string, expValue:any){
        const cookies = await this.response.cookies();
        const cookie = cookies.find((c:any) => c.name === cookieName);
        const actualValue = cookie ? cookie.value : undefined;
        await expect(actualValue).toBe(expValue);
    }
}