Feature: Shopping cart

    Scenario: User adds a product to the cart and sees a success toast
        Given I am on the main page to test the shopping cart functionality
        When I click on a product
        And I click the add to cart button
        Then a success toast should appear with the correct message