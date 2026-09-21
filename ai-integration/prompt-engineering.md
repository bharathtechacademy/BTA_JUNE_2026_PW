# Prompt engineering frameworks

## What is a prompt? 
A prompt is all about a simple instruction or a question given to the AI model. 

## What is the importance of providing the right prompt? 
Only if we are going to provide the right prompt, then only we are going to get a better response. 

Example :

Bad Prompt :
I want to learn Playwright, so can you please explain Playwright? 

Good Prompt :
Currently, I am working as a senior automation engineer in my current organization. I already have very good knowledge of Java and Selenium. Now, we want to migrate the existing Selenium project into Playwright. I want to understand Playwright framework architecture and the folder structure to build a nice hybrid framework to automate my current application that includes UI, API, database, and other utilities. Can you please help me to learn Playwright, build the framework, and suggest a nice architecture? 

## How can we write a better prompt and the best prompt? 
There are a couple of prompt engineering frameworks and standard techniques available to write a better prompt, and that is what we are going to call a prompt engineering framework. 

Some of the prompt engineering frameworks are 

1. RACE Framework 
2. CLEAR Framework

## RACE Framework 

- R Refers to role 
- A Refer to the action. 
- C Refers to context 
- E Refer to examples. 

Example :

Without a RACE framework :

Read a user story and write all the possible positive, negative, and edge cases for the given user story displayed on the current page. 

With RACE Framework :

Role : As a senior quality analyst 

Action : Read the user story and write all the possible positive, negative, and edge test cases for the given user story displayed on the current page. 

Context : The application I am currently working on is Para Bank, which is related to an internet banking application. This application is mainly used by the end users who are using the internet banking application to check the details about their savings and current account, the transaction details, and other options related to regular day-to-day banking services. Currently, as part of the new requirement, we got a user story to build a brand-new login page, and I need to validate the same. 

Example : I want all the test cases in CSV format to be directly uploaded to my Jira. Please generate all the test cases with detailed test steps in the below format. 

Sample-tests.csv
================
Key,Name,Status,Precondition,Objective,Folder,Priority,Component,Labels,Owner,Estimated Time,Coverage (Issues),Coverage (Pages),Test Script (Step-by-Step) - Step,Test Script (Step-by-Step) - Test Data,Test Script (Step-by-Step) - Expected Result,Test Script (Plain Text),Test Script (BDD)
,Verify the cookies consent pop-up content,Draft,,,,Normal,,,712020:05d2cd23-8934-4ec4-9aea-be80da7b90af,,,,Launch the chrome browser,, Chrome browser should be launched successfully. ,,
,,,,,,,,,,,,,"Enter URL - <https://accounts.creatio.com/login/alm>  and Launch the 
application",,User should be able to launch the application,,
,,,,,,,,,,,,,Verify cookies pop-up is displayed,,Cookies consent pop-up should be displayed successfully,,
,,,,,,,,,,,,,Verify the cookies consent pop-up content,,"Cookies consent pop-up content should be displayed as below.

We may use cookies and similar technologies to collect information about the ways you interact with and use the website, to support and enhance features and functionality, to monitor performance, to personalize content and experiences, for marketing and analytics, and for other lawful purposes. We also may share information about your use of our site with our social media, advertising and analytics partners who may combine it with other information that you ve provided to them or that they ve collected from your use of their services. Please, see more details on the ""About"" tab
",,
,Verify switch buttons displayed in cookies consent pop-up,Draft,,,,Normal,,,712020:05d2cd23-8934-4ec4-9aea-be80da7b90af,,,,Launch the chrome browser,, Chrome browser should be launched successfully. ,,
,,,,,,,,,,,,,"Enter URL -<https://accounts.creatio.com/login/alm> and Launch the 
application",,User should be able to launch the application,,
,,,,,,,,,,,,,Verify cookies pop-up is displayed,,Cookies consent pop-up should be displayed successfully,,
,,,,,,,,,,,,,Verify switch buttons displayed in cookies consent pop-up,,"cookies consent pop-up should display below 4 switch buttons

Necessary (disabled)
Preferences
Statistics
Marketing",,



## CLEAR Framework ?

- C Refers to context 
- L Refers to limitations 
- E Refer to the example. 
- A Refer to the action. 
- R Refers to role 

Role : As a senior quality analyst 

Action : Read the user story and write all the possible positive, negative, and edge test cases for the given user story displayed on the current page. 

Context : The application I am currently working on is Para Bank, which is related to an internet banking application. This application is mainly used by the end users who are using the internet banking application to check the details about their savings and current account, the transaction details, and other options related to regular day-to-day banking services. Currently, as part of the new requirement, we got a user story to build a brand-new login page, and I need to validate the same. 

Limitations : Do not include API-related test cases. I want to validate the complete UI. Don't include so many test cases. Try to limit yourself to the top 30 test cases that need to be executed compulsorily, and that is more important. For each and every test case, mention clear test data that needs to be used to validate a particular scenario. 

Example : I want all the test cases in CSV format to be directly uploaded to my Jira. Please generate all the test cases with detailed test steps in the below format. 

Sample-tests.csv
================
Key,Name,Status,Precondition,Objective,Folder,Priority,Component,Labels,Owner,Estimated Time,Coverage (Issues),Coverage (Pages),Test Script (Step-by-Step) - Step,Test Script (Step-by-Step) - Test Data,Test Script (Step-by-Step) - Expected Result,Test Script (Plain Text),Test Script (BDD)
,Verify the cookies consent pop-up content,Draft,,,,Normal,,,712020:05d2cd23-8934-4ec4-9aea-be80da7b90af,,,,Launch the chrome browser,, Chrome browser should be launched successfully. ,,
,,,,,,,,,,,,,"Enter URL - <https://accounts.creatio.com/login/alm>  and Launch the 
application",,User should be able to launch the application,,
,,,,,,,,,,,,,Verify cookies pop-up is displayed,,Cookies consent pop-up should be displayed successfully,,
,,,,,,,,,,,,,Verify the cookies consent pop-up content,,"Cookies consent pop-up content should be displayed as below.

We may use cookies and similar technologies to collect information about the ways you interact with and use the website, to support and enhance features and functionality, to monitor performance, to personalize content and experiences, for marketing and analytics, and for other lawful purposes. We also may share information about your use of our site with our social media, advertising and analytics partners who may combine it with other information that you ve provided to them or that they ve collected from your use of their services. Please, see more details on the ""About"" tab
",,
,Verify switch buttons displayed in cookies consent pop-up,Draft,,,,Normal,,,712020:05d2cd23-8934-4ec4-9aea-be80da7b90af,,,,Launch the chrome browser,, Chrome browser should be launched successfully. ,,
,,,,,,,,,,,,,"Enter URL -<https://accounts.creatio.com/login/alm> and Launch the 
application",,User should be able to launch the application,,
,,,,,,,,,,,,,Verify cookies pop-up is displayed,,Cookies consent pop-up should be displayed successfully,,
,,,,,,,,,,,,,Verify switch buttons displayed in cookies consent pop-up,,"cookies consent pop-up should display below 4 switch buttons

Necessary (disabled)
Preferences
Statistics
Marketing",,
