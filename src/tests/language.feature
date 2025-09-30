Feature: Language selection

    @positive @regression
    Scenario: User changes the site language
        Given I am on the main page to change the language
        When I click the language button
        Then a list of languages should appear
        And the list should contain 6 languages
        When I select the first language from the list
        Then the site language should change accordingly