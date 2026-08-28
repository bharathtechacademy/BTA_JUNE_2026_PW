# API Testing - Step By Step

## What is API? 
API (Application Programming interface) => API Is a combination of  of routines (task/logic), protocols (format like XML/JSON), and supporting tools used to exchange the information between your application UI and backend server .

Sometimes we are going to use API to simply access the information. Sometimes to create new data, sometimes to update the existing data, sometimes to delete the data which is available in the database server. 

** All web services are APIs, but all APIs are not web services. 

## What is the difference between API web service and micro service? 

## Web Service 
The API runs over the internet or web, called a web service. 

## Micro Services
Micro Services also APIs. 
Micro Service is a tiny API that is useful for exchanging the information between the different components inside the application. 


## API Testing ?
API testing is a type of testing technique that involves testing the APIs directly without using application UI. 

## Benefits of API Testing 
1. Early issue detection 
2. Faster test execution compared to UI 
3. Broader test coverage compared to UI 
4. Completely independent from UI changes. 
5. API testing is automation-friendly. 

## Popular API architectures 

## REST
## SOAP
## GRAPHQL

## REST (Representational State Transfer)
RESTful services mainly use JSON format to exchange the information between client and server. RESTful services will use different types of HTTP methods to perform different types of operations. 

GET => Get method will be used to get the existing information from the server. (READ)
POST => POST method will be used to create the new information within the server. (CREATE)
PUT => PUT method will be used to update the existing information within the server. (UPDATE)
PATCH => PATCH method will be used to modify specific data within the record. (UPDATE)
DELETE => Delete method will be used to delete the existing information from the server. (DELETE)


Request: POST api.example.com/users/12345 HTTP/1.1
{
    "empId" : 1234
}

Response:
{
   "id": 12345,
   "name": "John Doe",
   "email": "johndoe@example.com"
}


## SOAP (Simple Object Access Protocol )
SOAP services mainly rely on XML format to exchange the information between client and server. Each SOAP service is mainly used post-request to complete different types of operations between client and server. 

POST /webservice HTTP/1.1
Host: example.com
Content-Type: text/xml; charset=utf-8
Content-Length: length

<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope">
   <soap:Header/>
   <soap:Body>
      <GetUserDetails xmlns="http://example.com/">
         <UserId>12345</UserId>
      </GetUserDetails>
   </soap:Body>
</soap:Envelope>


<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope">
   <soap:Header/>
   <soap:Body>
      <GetUserDetails xmlns="http://example.com/">
         <Username>Bharath Reddy</Username>
         <Userrole>Senior SDET</Userrole>
      </GetUserDetails>
   </soap:Body>
</soap:Envelope>

## GRAPHQL 
GraphQL is going to allow us to send a request from the client to retrieve specific data. GraphQL is always going to reduce the over-fetching and under-fetching of the data from the server, and GraphQL is also going to use POST requests to send a request to our server. 


POST /graphql HTTP/1.1
Host: api.example.com
Content-Type: application/json

{
   "query": "{ user(id: \12345\) { name, email } }"
}

Response:
{
   "data": {
      "user": {
         "name": "John Doe",
         "email": "johndoe@example.com"
      }
   }
}

## API testing over RESTful services 

### What are all the details I can expect in the requirement document from my developer to begin the API testing? 

### What are all the validations I need to perform just to make sure my API is working properly? 

## Request : Request is all about the input data that we are going to share with the server to complete specific task

## Response : Response is all about the output information received from the server every time when we are going to share some request. 

## Requirements to be collected from the developer to send the API request 

1. Purpose of the API request or functionality of the API 

In our application, in which screen are we using this API request? Under that particular screen, under which field is this API linked? After clicking on which button or which hyperlink, this API will be triggered. 

2. What type of request is it? 
- Get, Post, Put, Patch, Delete 

3. Request URL : Request URL is going to have two important parts. 

    1. Base URL => https://api.amazon.in
    2. End Point => /mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles

    https://www.amazon.in/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles
    https://www.amazon.in/computers-and-accessories/b/?ie=UTF8&node=976392031&ref_=nav_cs_pc
    https://www.amazon.in/electronics/b/?ie=UTF8&node=976419031&ref_=nav_cs_electronics

    https://www.amazon.in/{{category}}/b/?ie=UTF8&node=976419031&ref_=nav_cs_electronics

Within the endpoint, we are going to have two important additional parameters. 1. Path Parameters. {category} 2. Query Parameters {?ie=UTF8&node=976419031&ref_=nav_cs_electronics}

4. Request Body or Payload => POST , PUT , PATCh
The data that you want to store or the data that you want to update within the server 

   https://api.amazon.in/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles

   {
    "product" : "Iphone 18 Pro max",
    "Price" : 1,29,999
   }

5. Authorization and Authentication 

Authentication: Whether, you are a valid user. 
Authorization : What are all the different areas you can access from the Server? 

Common API security mechanisms to authenticate the users 
=======================================================
No Auth => No authentication (The API endpoint doesn't need any credentials. It's an open API. )

Basic Auth => Basic authentication  (We can access the information from the server through the API by providing a user name and password. )

API Key => We can access the information through the API by providing a unique key and value. (Ex: X-API-Key : 562359826twerghtfkjdhf3748)

Bearer Token => We can access the information through a unique API token that includes specific roles and permissions and expiry date. (Bearer 3256929658t72398t52938576928375hjewrhgfkwejrhfgkwehg)

OAuth => Open authorization  

Open Authorization is a framework that is going to allow users to access the information from the server by providing limited access to the resources. 


6. Request headers => Request Traders are all about additional meta data to be shared along with the API request to access the information from the server. (One of the request headers is the authentication token.)

   https://api.amazon.in/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles

   {
    "product" : "Iphone 18 Pro max",
    "Price" : 1,29,999
   }

   Req. headers :
   {
      "Content-Type": "application/json",
      "Accept": "application/vnd.github.v3+json",
      "Authorization": "Bearer <YOUR-TOKEN>"
   }

## Requirements to be collected from the developer to validate the API response

1. Response code or status code  : Response code is all about the unique number generated by the server every time when you are going to send the request. Based on the response code, we can automatically understand the status of the request. 

2XX => Symbol of Success (200 -OK , 201 - Created , 204 - No Content)
4XX => Client-side error (401 - Unauthorized , 400 - Bad Request , 404 - Not Found , 422 - Unprocessable Entity )
5XX => Server Side Error (500 - Internal Server Error , 502 - Bad Gateway , 503 - Service Unavailable, 504 - Gateway timeout. )

1XX => Informational Codes (100 - Processing)
3XX => Redirectional Codes (Temporary Redirection and Permanent Redirection )

2. Response Body : Response body is all about the output response received from the server based on our request. 

Request:
GET https://api.amazon.com/mobiles/iphone16?price<=50000

Response : 
{
   "mobiles" :{
      "product":"Iphone 16",
      "price": 49999,
      "RAM" : "16Gb"
   }
}

3. Response Schema : Schema is all about the format or nature of the data we are expecting from the response. 

{
   "mobiles" : object
   "product":string
   "price":number
   "RAM":string
}

4. Response headers : Response headers are nothing but the additional metadata sent by the server along with the response. 

"session-id" : "dgjhwgfdrwq4352367512"

5. Max response time : Maximum: how much time it should take to get the response for each and every request 

Ex: Max response time is 2 seconds for each and every request up to 10,000 users. 

6. Error Handling : For each and every mistake made by the user while sending the request, what kind of error message or what kind of API response can we expect from the server? 


# How to use the Postman tool? (Step By Step)

Step 1 : Create a local workspace within the Postman tool. 
Workspace is all about the space where we are going to maintain multiple API collections. 

Step 2 : Create new environment. 
Environment is all about a template that is going to allow us to store all the common data. 

- Collection variables => Collection variables can be accessed only within the collection. 
- Global variables => Global variables can be accessed across the workspace in each and every API collection. 
- Environment variables => Environment variables can be accessed in any API collection by selecting a specific environment. 

Step 3 : Create new API collection. 
API collection is a combination of multiple API requests stored together in a folder. 

Step 4 : Add each and every API request within the API collection. 
Meaning, we are going to add the API request details within the API collection to test. 

## Git API collection 

URL : https://docs.github.com/en/rest/repos/repos?apiVersion=2026-03-10

Git API Token URL : https://github.com/settings/tokens

## Scenarios to be tested by using API 

1. Creating a duplicate repository with valid credentials. 
2. Create a valid repository with valid credentials. 
3. Update the existing repository with valid credentials. 
4. Search and get existing repository with valid details. 
5. Delete the existing repository with valid credentials. 

## Scripts

Pre-Request : The JavaScript code that we are going to write to run before sending the request 

Post-Response : The code that we are going to write to run after getting the response from the server 


# Sample Postman scripts

//Verify the status code of the duplicate repository request. 
pm.test("Verify Status Code", function (){
    pm.expect(pm.response.code).to.eql(422);
})

//Verify the status message of the duplicate repository request. 
pm.test("Verify Status message", function (){
    pm.expect(pm.response.status).to.include("Unprocessable Entity");
})

//Verify the response time of the duplicate repository request. 
pm.test("Verify Response Time", function (){
    pm.expect(pm.response.responseTime).to.be.below(2000);
})

//Verify the response body of the duplicate repository request. 
pm.test("Verify Response Body", function (){
    pm.expect(pm.response.json().message).to.eql("Repository creation failed.");
    pm.expect(pm.response.json().errors[0].message).to.eql("name already exists on this account");
})

## newman integration commands

### installation
1. npm install newman   
2. npm install -g newman-reporter-htmlextra         

### Execution
newman run collection.json -e env.json -r htmlextra    