Feature: Creatio CRM Login Feature
    As a user, I want to use this feature file to validate all the scenarios related to login functionality in the Create Your CRM application.

    Scenario: Verify the login page is displayed successfully.
        Given Launch the creatio CRM application
        Then Verify the cookies pop-up is displayed successfully
        And Verify the cookies pop-up contains the selection buttons
        When User clicks on the "Allow all" button
        Then Verify the cookies pop-up should be disappeared
        And Verify the login page is displayed successfully

    Scenario Outline: Verify the login feature with "<scenario>" credentials
        Given Launch the creatio CRM application
        Then Verify the cookies pop-up is displayed successfully
        And Verify the cookies pop-up contains the selection buttons
        When User clicks on the "Allow all" button
        Then Verify the cookies pop-up should be disappeared
        And Verify the login page is displayed successfully
        When User enters the "<username>" and "<password>" credentials
        And User clicks on the login button
        Then Login should be "<result>"

        Examples:
            | scenario | username                         | password                | result  |
            | valid    | bharathttechacademy5@outlook.com | BharathTechAcademy#1234 | success |
            | Invalid  | test@gmail.com                   | abcd1234                | failure |

    Scenario Outline: Verify the logout functionality
        Given Launch the creatio CRM application
        Then Verify the cookies pop-up is displayed successfully
        And Verify the cookies pop-up contains the selection buttons
        When User clicks on the "Allow all" button
        Then Verify the cookies pop-up should be disappeared
        And Verify the login page is displayed successfully
        When User enters the "<username>" and "<password>" credentials
        And User clicks on the login button
        Then Login should be "<result>"
        When User clicks on the logout button
        Then Verify the user is logged out successfully and navigated to the login page

        Examples:
            | username                         | password                | result  |
            | bharathttechacademy5@outlook.com | BharathTechAcademy#1234 | success |

    Scenario: Verify forgot password functionality within the login page.
        Given Launch the creatio CRM application
        Then Verify the cookies pop-up is displayed successfully
        And Verify the cookies pop-up contains the selection buttons
        When User clicks on the "Allow all" button
        Then Verify the cookies pop-up should be disappeared
        And Verify the login page is displayed successfully
        When User enters the "test@gmail.com" and " " credentials
        When User clicks on the Forgot password link
        Then Verify the user is navigated to the forgot password page successfully

    Scenario: Verify social media login options on the login page.
        Given Launch the creatio CRM application
        Then Verify the cookies pop-up is displayed successfully
        And Verify the cookies pop-up contains the selection buttons
        When User clicks on the "Allow all" button
        Then Verify the cookies pop-up should be disappeared
        And Verify the login page is displayed successfully
        And Verify the social media login options are displayed successfully on the login page