Feature: Sauce Labs Demo login

  Scenario: User logs in with valid credentials
    Given I am on the Sauce Labs login page
    When I enter valid credentials
    And I click the login button
    Then I should see the menu button
    And I should be redirected to the inventory page