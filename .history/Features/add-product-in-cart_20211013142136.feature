Feature: Add one to several product copies in the shopping cart
  As a user I want to be able to add 1 to several copies of an item in the shopping cart so I can buy it.
  Background:
    Given that I am on "https://www.willys.se"
    When that I accepted the standard cookie policy
    And that we have been through the initial where to deliver popup
  Scenario: Add 1st product to the shopping cart
    Then I click on + button to add the first product from veckans varor
    And I added several copy of this product