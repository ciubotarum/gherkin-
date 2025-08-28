Feature: Checkout process

    Scenario: User completes a successful order
        Given I am on the main page to find a product
        When I add a product to the cart
        And I go to the checkout page
        And I click the proceed button
        And I log in with valid credentials
        And I click the proceed button on the address form
        And I fill in the billing address
        And I click the proceed button on the payment form
        And I select the third payment method
        And I confirm the order
        Then a payment success message should appear
        And I click the finish button
        Then an order success message should appear