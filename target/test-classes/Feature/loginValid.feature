@loginInvalid
Feature: To check the facebook login function

  Background: 
    Given User sholud be in facebook login page
  @smoke
  Scenario: To validate login function using invalid credentials
    When User enter username and password
    And User clicked login button
    Then User quit browser
@sanity @regression
  Scenario: To validate forgot password functionality
    When User click forget password button
    And User enter mobile number
    And User click search button
    Then User must be in rest your password page
