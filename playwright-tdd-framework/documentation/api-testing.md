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

    