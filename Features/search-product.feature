Feature: Willys search for product of interest
  As a user, I want to be able to click on an product
  to get more information about it so that I
  can determine if it is of interest to me.

  Scenario: Searching product in search bar for getting more information about the product of interest
    Given that I am on the "https://www.willys.se"
    When I enter "Rosor" in the search box
    And I press enter
    Then I should get some search result
    And I click on 1 search result
    And I should get more information about that product

  Scenario: Viewing product in sortiments for getting more information about the product of interest
    Given that I am on the "https://www.willys.se/sortiment/blommor-och-tradgard/blommor"
    When I click on the product
    Then I should get more information about that product