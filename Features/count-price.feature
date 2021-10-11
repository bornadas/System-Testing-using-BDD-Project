Feature: Count total price in shopping cart
  As a user, I want the shopping cart to count correctly so that I can see the total price before I choose to shop.
  Background:
    Given that I am on "https://www.willys.se"
    When that I accepted the standard cookie policy
    And that we have been through the initial where to deliver popup
  Scenario: Count total price correctly in shopping cart
    Given that I am on the Fruit category page
    When I put a random number of each fruit that has price per piece in the cart
    Then the mini-cart should show the correct total quantity of products
    And the mini-cart should show correct total price
