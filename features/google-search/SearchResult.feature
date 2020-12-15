@tagPlaceholder1 @tagPlaceholder2
Feature: Google Searching
  Scenario: Search from the search bar produces correct links
    Given a web browser is at the Google home page
    When the user enters "cucumber" into the search bar
    Then the links related to "cucumber" are shown on the results page

