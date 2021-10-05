Feature: Count total price in shpping cart
  As a user, I want the shopping cart to count correctly so that I can see the total price before I choose to shop.

  Background:
    Given that I am on "https://www.willys.se"
    When that I accepted the standard cookie policy
    And I click on + button to add the first product from veckans varor
    And that we have been through the initial where to deliver popup
    And I click on + button to add the another product from veckans varor
    Then both the first and the last product should be in the cart


  Scenario: The total price at the cart wagon should be increased after increasing the quantity
    When I click on cart
    And I click on + button to increase the quantity
    Then the total cost should increase

  Scenario: The total price at the cart wagon is decreasing when I am reducing the product quantity
    Given that I am on "https://www.willys.se/varukorg"
    When I click on - button to decrease the quantity
    Then the total cost should decrease
