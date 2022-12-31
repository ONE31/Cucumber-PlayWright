@foo
Feature: test_UI

  Scenario: Dice navigation
    #Given Go to the BASE_URL website
    Given Go to the new website
    Then I locate an element using selector ".banner-headline" and ensure the text is "Need Technology Professionals?"
    When I locate an element using selector "Post a Job" and click on it
    Then Text "Connect with your next great tech hire today" is presented on the screen
    When I locate an element using selector "Post Your Job" and click on it
    Then Text "ddfdfdf" is presented on the screen
