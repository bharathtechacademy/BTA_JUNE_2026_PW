## API Performance Testing - Step By Step

# What is performance testing? 
Performance testing is all about validating the application in such a way that, when multiple users are going to use our application, we can see how our application is responding. 

# Different types of performance testing ?

1. Load Testing  => Load testing is all about testing our application under expected user load by gradually increasing the load. 

For example, the capacity of our application is 100 users. We are going to start with 10 users, and gradually we are going to increase the user count from 10 to 100 within some time, like 10 seconds. We are going to verify the performance of our application. 

2. Stress Testing => Trying to push our application beyond the limits or beyond the maximum capacity .

For example, the capacity of our application is 100 users. Now we are going to add more than the maximum capacity. We will keep on increasing by 10%, 20%, 30%, 40%, and 50%. 

3. Spike Testing => Spike testing evaluates the application behavior when there is a sudden increase or decrease in the load

For example, the capacity of our application is 100 users. Now, suddenly, we are going to add 500 users at a time and see what is going to happen in our application. In the same way, from 500, suddenly I am going to send 10 users and see how the application is responding back when there is a sudden drop in the load.  

4. Soak Testing / Endurance Testing => Soak testing is all about testing the application with a stable load for a longer duration. 

For example, if the capacity of our application is 100 users, now I am going to deploy some 80 users. I am not going to increase or decrease, but I am going to run this application with 80 users for so long without reducing the count. I will see the behavior of our application and the performance with this load for a longer duration. 

# Why is performance testing so important? 
Performance testing is very important because if your application functionality is working well but your application is not responding when multiple users are trying to access your application, then people are going to slowly lose interest. They are going to find an alternative immediately. 

# What are all the different tools available in the market to do the performance testing? 
1. Apache JMETER 
2. Load Runner 
3. Blazemeter 

# What is JMeter ?
JMETER is an open-source performance testing tool, and this tool is going to create virtual users to validate the performance of our API. 

# Prerequisites to install the Apache JMETER tool 

1. Install JDK (https://download.oracle.com/java/26/latest/jdk-26_windows-x64_bin.exe)
2. Download Apache JMETER tool (https://dlcdn.apache.org//jmeter/binaries/apache-jmeter-5.6.3.zip)
3. Extract the Apache JMETER zip  and Navigate to bin folder. 
4. Double click on the 'ApacheJmeter.jar' file. 

# Different components available in the Apache JMeter tool 

1. Test Plan 

Test plan is the root container or root folder of the JMETER test.  

Within the test plan, we can add 
- Thread Group (Total amount of virtual users we want to deploy on our application to perform load testing )
- Samplers ( The API request that we want to validate by using JMeter )
- Listeners ( Listener is a component that is going to help us in capturing the test results. )
- Config Elements  ( Config elements are all about different templates available in the JMeter tool to maintain the data. )

# What is Thread Group ?
Thread Group is a template where we are going to add:
- the total number of virtual users that you want to deploy and ramp up
- the total time you want to take to deploy those particular users
- the total number of iterations to be done, meaning how many times you want to repeat this process

1. Name => Name of our project or purpose of running this API Suite with the number of users 
Ex: Git_API_Performance_Testing

2. Comments => Short description about our project and the scenarios that we are trying to validate 
Ex: Git API Performance Testing with 100 Concurrent Users 

3. Action to be taken after a sample error  => 
What should happen when your API request is failing in the middle of the execution? 
continue(default) => Ignore the error and continue the execution with the next API request or with the next user. 
start next thread loop => Stop current iteration and start the next loop. 
stop thread => Stop the entire thread for the current user. 
stop test => Stop the entire test and close it. 

4. Thread Properties :

=> Number of Threads or Users : Totally, how many virtual users do you want to create and deploy to test your application? 

Example : 100 ( 100 virtual users I want to create to test my application performance )


==> Ramp-up Period (in seconds) : Total duration that we are going to use to deploy all the users 

Example : 10 Sec ( All the 100 users, now I want to deploy within the span of 10 seconds. )

=> Loop Count : Total number of iterations to be executed to repeat the process 
Example : 2 Loops ( 100 users in 10 seconds. We want to deploy for 2 times. )

=> Same user on each iteration : The same session our user will be reused to run all the API requests. 

==> Delay Thread Creation Until Needed : During the execution process, don't create virtual users until we want to trigger and send the API request. 
=> Specify Thread Lifetime (Duration) : Duration is all about the total amount of time that you want to run this API request by using JMETER. 

=> Statup delay => Delay before each and every API request begins. For example, if Im going to add 2 seconds, then automatically, after 2 seconds only, it is going to deploy the user and send the API request. 

# Configuration elements available in JMETER ?
Configuration elements are all about a set of templates, which we are going to use to maintain the test data, configuration data, or environment data while sending the API request through JMETER. 

Example : User-defined variables, HTTP header manager, etc. 

User-defined variables => We are going to use these user-defined variables as a template to maintain the environment variables, which we can reuse across each and every API request that we are sending. 

 HTTP header manager => To maintain the authorization token and other header values for each and every API request that we are sending 

 # Samplers in JMETER ?

Samplers are all about the request that we are going to send through JMETER to validate the performance. 

=> HTTP Request Sampler will be used for API performance testing. 

# Assertions in JMETER ?
Assertions are all about default JMETER methods helping us to validate the API response with respect to the expected result. 

Assertions are very helpful to ensure the correctness of each and every API request. It is going to catch the failure and report that particular information to the user. 


# Listeners in JMETER ?
Listeners are a set of components in JMETER that can record the test results related to each and every performance metric. 

View Results Tree => This listener is going to help us to capture each and every API request and response details. 
Summary Report => This listener is going to capture the response time and error details for each and every API request. Finally, it is going to provide you the average response time. That means what is the minimum, what is the maximum, and what is the average time it is taking to send all the requests. 
Assertion results => Assertion results are all about validating each and every assertion that we have added within the HTTP request. 
