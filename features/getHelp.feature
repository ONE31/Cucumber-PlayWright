@debug
Feature: Test GetHelp Portal API

  Scenario: Successful Get Request

    Given I requested an access_token for GetHelp Portal API
    When I send Get request to GetHelp Portal with the uri path "/odata/country"
    Then Response status code is "200"

  Scenario: Successfully Get Incident type
    Given I requested an access_token for GetHelp Portal API
    When  I send Get request to GetHelp Portal with the uri path "/odata/incidenttype"
    Then  Response status code is "200"

  Scenario: Successfully Get User Domain
    Given I requested an access_token for GetHelp Portal API
    And   I send Get request to GetHelp Portal with the uri path "/odata/userdomain"
    Then  Response status code is "200"