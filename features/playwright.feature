@foo
Feature: Playwright docs

  Background: Navigation

  Scenario: Change theme
    Given A cat fact is recieved
    When Change theme to "light" mode
    Then We see "light" mode
    When Change theme to "dark" mode
