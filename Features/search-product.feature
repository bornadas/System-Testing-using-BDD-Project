Feature: Willys search for product of interest
  As a user, I want to be able to click on an product
  to get more information about it so that I
  can determine if it is of interest to me.

Background:
    Given that I am on "https://www.willys.se"
    When that I accepted the standard cookie policy

  Scenario Outline: Searching product in search bar for getting more information about the product of interest
    When I search for <product> in the search box
     And I press ENTER
    Then I should get some search result
    And I click on first search result
    And I should get more information about that product
    Examples:
      | product        | 
      | "Apelsinjuice" |
      | "godis"        |
      | "banan"        |
      | "smör"         |