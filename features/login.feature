Feature: Login functionality

  Scenario: User logs in without an account
    Given I am on the login page
    When I enter invalid credentials
    And I click the login button
    Then I should see an error message
