Feature: Cookies feature in CREATIO CRM application 
    I want to use this feature file to verify all the test scenarios related to cookies page

Scenario: Verify the cookies pop-up is displayed successfully. 
    Given Launch the creatio CRM application
    Then Verify the cookies pop-up is displayed successfully

Scenario: Verify the cookies pop-up content
    Given Launch the creatio CRM application
    Then Verify the cookies pop-up is displayed successfully
    And Verify the cookies popup contains the below text
    """
    We may use cookies and similar technologies to collect information about the ways you interact with and use the website, to support and enhance features and functionality
    """
Scenario: Verify the cookies pop-up logos
    Given Launch the creatio CRM application
    Then Verify the cookies pop-up is displayed successfully
    And Verify the cookies pop-up contains the logos

Scenario: Verify switch buttons displayed in the cookies popup 
    Given Launch the creatio CRM application
    Then Verify the cookies pop-up is displayed successfully
    And Verify the cookies pop-up contains the switch buttons

Scenario: Verify selection buttons displayed in the cookies popup 
    Given Launch the creatio CRM application
    Then Verify the cookies pop-up is displayed successfully
    And Verify the cookies pop-up contains the selection buttons

Scenario: Verify the show details link in the cookies popup 
    Given Launch the creatio CRM application
    Then Verify the cookies pop-up is displayed successfully
    And Verify the cookies pop-up contains the show details link
    When User clicks on the show details link
    Then Verify the cookies pop-up is expanded successfully

Scenario: Verify the cookies pop-up has disappeared after selecting the cookies
    Given Launch the creatio CRM application
    Then Verify the cookies pop-up is displayed successfully
    And Verify the cookies pop-up contains the selection buttons
    When User clicks on the "Allow all" button
    Then Verify the cookies pop-up should be disappeared 

