Feature: Empty entire shopping cart
  As a user, I want to be able to empty my
  entire shopping cart so that I can start over if
  I regret what I put in it completely.
  Background:
    Given that I am on "https://www.willys.se"
    When that I accepted the standard cookie policy
    And I click on + button to add the first product from veckans varor
    And that we have been through the initial where to deliver popup
    And I click on + button to add more products from veckans varor
  Scenario: Empty my shopping cart
    When I click on the shopping cart
    And I click on töm varukorg button
    Then The cart should be empty