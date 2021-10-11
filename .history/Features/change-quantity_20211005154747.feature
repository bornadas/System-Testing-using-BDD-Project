Feature: Changing the quantity in the cart to increase and decrease
  As a user, I want to be able to change the number of an item in the shopping cart so that I can buy more or less of it than I originally thought.

  Background:
    Given that I am on "https://www.willys.se"
    When that I accepted the standard cookie policy
    And I click on + button to add the first product from veckans varor
    And that we have been through the initial where to deliver popup
    And I click on + button to add the another product from veckans varor
    Then both the first and the last product should be in the cart

  Scenario: Increase product quantity
    When I click on cart button
    And I click on + button to increase the quantity
    Then the product quantity should increase

  Scenario: Decrease product quantity

    When I click on - button to decrease the quantity
    Then the product quantity should decrease