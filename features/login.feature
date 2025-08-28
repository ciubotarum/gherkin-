Feature: Login functionality

  Scenario: User logs in successfully
    Given I am on the login page
    When I enter valid credentials
    And I click the login button
    Then I should see my account page
