Feature: Willys navigate to SORTIMENT
  As a user, I want to be able to go to different categories of goods so that I can see which goods are included in a category

  Scenario: Willys searching for one sortiment
    Given that I am on the "https://www.willys.se"
    When I click on MENY button
    Then I can see sortiment
    And the result should contain at least one sortiment

  Scenario: Willys searching for multiple sortiments
    When I click on MENY button
    Then I can see sortiment
    And I click on Skafferi
    And I should see different categories
