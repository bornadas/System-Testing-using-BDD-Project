Feature: Willys navigate to SORTIMENT
  As a user, I want to be able to go to different categories of goods so that I can see which goods are included in a category

Background:
    Given that I am on "https://www.willys.se"
    And that I accepted the standard cookie policy

  Scenario: Willys searching for sortiment
    When I click on MENY button
    Then I can see sortiment
    And I click on Barn 
    Then I should get all the categories 
    And I click on grot
    And the result should contain at least one sortiment