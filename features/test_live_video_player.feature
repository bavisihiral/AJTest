@live_video
Feature: Al Jazeera Live Video Player Tests
In order to verify that Video Player section is working fine
I need to run all the tests

@live_video
 Scenario: Validate Player is visible in Livestream Player
   Given I am on Aljazeera Live Page
   Then I should see live video player

Scenario: Validate Switch Player button is visible in Livestream Player
    Given I am on Aljazeera Live Page
    Then I should see links
    |Switch Player|
