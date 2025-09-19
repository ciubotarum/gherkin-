Feature: Product filtering

    Scenario: User filters products by category and brand
        Given I am on the main page looking to filter products
        When I select a "Hammer" category
        Then only seven products should be displayed in the filtered results
        Then filter by brand "MightyCraft Hardware"
        Then only 1 product should be displayed in the filtered results