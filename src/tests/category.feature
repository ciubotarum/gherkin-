Feature: Category navigation

    @positive @critical
    Scenario: User navigates to Hand Tools category from main menu
        Given I am on the main page looking for Hand Tools
        When I click the main categories button in the header
        And I select the "Hand Tools" category from the dropdown
        Then I should be redirected to the Hand Tools category page
        And the page title should be "Category: Hand Tools"