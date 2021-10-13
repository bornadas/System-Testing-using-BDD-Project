Feature: Changing the quantity in the cart to increase and decrease
  As a user, I want to be able to change the number of an item in the shopping cart so that I can buy more or less of it than I originally thought.
  Background:
    Given that I am on "https://www.willys.se"
    When that I accepted the standard cookie policy
    And that we have been through the initial where to deliver popup

  Scenario: Increase product quantity
    Given that I am on the Fruit category page
    When I put a random number of each fruit that has price per piece in the cart
    And I click on cart button
    Then the quantity should increase after clicking + button

  Scenario: Decrease product quantity
    Given that I am on the Fruit category page
    When I put a random number of each fruit that has price per piece in the cart
    And I click on cart button
    Then the quantity should decrease after clicking - button