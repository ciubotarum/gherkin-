Feature: Product search

    Scenario: User searches for "bolt" and sees two products
        Given I am on the main page
        When I enter "bolt" in the search field
        And I click the search button
        Then I should see 2 products in the results
        And Each product should contain "bolt" in the title
