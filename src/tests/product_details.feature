Feature: Product details

    @positive @regression
    Scenario: User views the details of the first product
        Given I am on the main page looking for products
        When I click the first product
        Then I should be redirected to the product details page
        And the page title should be the product name followed by " - Practice Software Testing - Toolshop - v5.0"