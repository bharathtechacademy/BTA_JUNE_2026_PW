Feature: Git repository API validations
    As a user, I want to validate all the Git repository-related API validations in this feature file.

    Background: Initialize API request context
        Given API request context is initialized

    Scenario: Validate API request to create a duplicate Git repository
        When I send a "POST" request with the endpoint "/user/repos"to create a duplicate repository with the name "JmeterRepo" and description "This is a duplicate repository"
        Then I should receive a response with status code 422
        And I should receive a response with a status message "Unprocessable Entity"
        And I should receive a response with a body having "message" as "Repository creation failed."

    Scenario: Validate API request to create a valid Git repository
        When I send a "POST" request with the endpoint "/user/repos"to create a valid repository with the name "JmeterRepo10" and description "This is a valid repository"
        Then I should receive a response with status code 201
        And I should receive a response with a status message "Created"
        And I should receive a response with a body having "description" as "This is a valid repository"

    Scenario: Validate API request to update a Git repository
        When I send a "PATCH" request with endpoint "/repos/bharathtechacademy05/JmeterRepo10" to update the repository description as "This is an updated repository"
        Then I should receive a response with status code 200
        And I should receive a response with a status message "OK"
        And I should receive a response with a body having "description" as "This is an updated repository"

    Scenario: Validate API request to get a Git repository
        When I send a "GET" request with endpoint "/repos/bharathtechacademy05/JmeterRepo10"
        Then I should receive a response with status code 200
        And I should receive a response with a status message "OK"
        And I should receive a response with a body having "description" as "This is an updated repository"

    Scenario: Validate API request to delete a Git repository
        When I send a "DELETE" request with endpoint "/repos/bharathtechacademy05/JmeterRepo10"
        Then I should receive a response with status code 204
        And I should receive a response with a status message "No Content"