Feature: Add and increase product quantity in the shopping cart
  User should be able to add 1 product as well as increase product quantity in the shopping cart so he can buy it.

  Scenario: Add 1st product to the shopping cart
    Given that I am on the "https://www.willys.se/produkt/Tulpan-7-pack-100377744_ST"
    When the product is shown on the screen
    And  I click on + button to add the product
    Then the product should be added to the shopping cart

  Scenario: Add several copies of a product
    Given that I am on the "https://www.willys.se/produkt/Tulpan-7-pack-100377744_ST"
    When I click on + button to increase quantity
    Then the product quantity should increase