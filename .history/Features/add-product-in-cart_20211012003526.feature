Feature: Add and increase product quantity in the shopping cart
  User should be able to add 1 product as well as increase product quantity in the shopping cart so he can buy it.

  Background:
    Given that I am on "https://www.willys.se"
    When that I accepted the standard cookie policy
    And that we have been through the initial where to deliver popup

  Scenario: Add 1st product to the shopping cart
    Then I click on + button to add the first product from veckans varor
    And I click on + button to add more products from veckans varor