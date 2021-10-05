Feature: Remove item from shopping cart
  As a user, I want to be able to remove an item
  from the shopping cart so that I can regret
  what I have put in there.

  Background:
    Given that I am on "https://www.willys.se"
    When that I accepted the standard cookie policy
    And I click on + button to add the first product from veckans varor
    And that we have been through the initial where to deliver popup
    And I click on + button to add the another product from veckans varor
    Then both the first and the last product should be in the cart

  Scenario: Remove item from shopping cart

    When I click on cart
    And I click on - button of a product to remove it
    Then the product should be removed from the cart
