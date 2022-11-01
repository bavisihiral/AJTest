@most_read_section
Feature: Al Jazeera Most Read Tests
  In order to verify that most read section is working fine
  I need to run all the tests

# Background:
#   Given I am on Aljazeera website
  
  Scenario: On Desktop make sure the "Most Read" section is appearing
    Given I am on Aljazeera website
    Then Most Read Section should be displayed
    
  Scenario: On Desktop make sure the "Most Read" section has 10 posts
    Given I am on Aljazeera website
    Then Most Read Section should have '10' posts
  
  Scenario: on Mobile make sure that the "Most Read" section is not appearing
    Given I am on Aljazeera website from mobile
    Then Most Read Section should not be displayed

  Scenario: on Desktop make sure bypass block menu item for "Most Read" is working 
    Given I am on Aljazeera website
    When I hover over navigation menu
    And I press 'Tab' key
    And I click on Skip most Read
    Then I am on the URL '/#most-read-container'
  
  


    
