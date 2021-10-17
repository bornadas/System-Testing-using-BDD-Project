Feature: Search for butik
  As a user, I want to be able to search for butik so that I can find the nearest one to me.

  Background:
    Given that I am on "https://www.willys.se"
    And that I accepted the standard cookie policy

  Scenario Outline: Searching nearest butik with pincode and area
    When I click on hitta butik
    And  I search <input> in the search bar
    Then I should get the butik address

    Examples:
      | input         |
      | "41717"       |
      | "41831"       |
      | "Gamlestaden" |
      | "Majorna"     |