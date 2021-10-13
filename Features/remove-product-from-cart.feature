Feature: Remove item from shopping cart
  As a user, I want to be able to remove an item
  from the shopping cart so that I can regret
  what I have put in there.
  Background:
    Given that I am on "https://www.willys.se"
    When that I accepted the standard cookie policy
    And that we have been through the initial where to deliver popup   
    And I added some product in cart
  Scenario: Remove item from shopping cart
    When I click on the shopping cart
    Then the product should be removed after clicking - button