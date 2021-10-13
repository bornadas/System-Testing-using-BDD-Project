Feature: Viewing the added products in shopping cart
  As a user, I want to be able to see my shopping cart and the goods I have put in it should then be there so that I can buy them.
  
  Background:
    Given that I am on "https://www.willys.se"
    When that I accepted the standard cookie policy
    And that we have been through the initial where to deliver popup
 
  Scenario: To check if product is added in the cart
    When I added some product in cart
    And I click on cart
    Then I should be able to see the products which i added in the cart