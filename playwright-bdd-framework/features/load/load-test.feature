Feature: Git API load test feature
As a user, I want to validate all the scenarios related to GETAPA performance testing within this feature file.

Scenario: Validate Git repository API request performance. 
    Given Initialize the JMeter utility. 
    Then Execute the JMeter test plan "LoadTest.jmx" and publish the results. 