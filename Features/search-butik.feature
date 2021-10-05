Feature: Search for butik
  As a user, I want to be able to search for butik so that I can find the nearest one to me.

  Background:
    Given that I am on "https://www.willys.se"
    And that I accepted the standard cookie policy

  Scenario Outline: Searching nearest butik with pincode
    When I click on hamburger sign
    And I click on hitta butik
    And I enter <pincode> in the search bar
    Then I should get the butik address

    Examples:
      | pincode |
      | "41717" |
      | "41831" |
      | "41525" |

  Scenario Outline: Searching nearest butik with address
    When I click on hamburger sign
    And I click on hitta butik
    And I enter <address> in the search bar
    Then I should get the butik address

    Examples:
      | address           |
      | "Västra Frölunda" |
      | "Gamlestaden"     |
      | "Majorna"         |
