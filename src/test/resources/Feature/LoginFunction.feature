@login
Feature: To check login functionality of facebook application

@smoke @regression
  Scenario Outline: To validate the login function using valid and invalid credentials
    Given User must be in facebook login page
    When User enter username in "<usernameFeild>" usernameFeild and  password in "<passwordFeild>" passwordnameFeild
    And User click login button
    Then user must be in facebook credential page

    Examples: 
      | usernameFeild | passwordFeild |
      | greens        | greens@123    |
      | java          | java@123      |
      | python        | python@123    |
