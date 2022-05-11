$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Feature/LoginFunction.feature");
formatter.feature({
  "name": "To check login functionality of facebook application",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.scenarioOutline({
  "name": "To validate the login function using valid and invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "User must be in facebook login page",
  "keyword": "Given "
});
formatter.step({
  "name": "User enter username in \"\u003cusernameFeild\u003e\" usernameFeild and  password in \"\u003cpasswordFeild\u003e\" passwordnameFeild",
  "keyword": "When "
});
formatter.step({
  "name": "User click login button",
  "keyword": "And "
});
formatter.step({
  "name": "user must be in facebook credential page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "usernameFeild",
        "passwordFeild"
      ]
    },
    {
      "cells": [
        "greens",
        "greens@123"
      ]
    },
    {
      "cells": [
        "java",
        "java@123"
      ]
    },
    {
      "cells": [
        "python",
        "python@123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To validate the login function using valid and invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User must be in facebook login page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_must_be_in_facebook_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter username in \"greens\" usernameFeild and  password in \"greens@123\" passwordnameFeild",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_enter_username_in_usernameFeild_and_password_in_passwordnameFeild(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user must be in facebook credential page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_must_be_in_facebook_credential_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the login function using valid and invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User must be in facebook login page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_must_be_in_facebook_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter username in \"java\" usernameFeild and  password in \"java@123\" passwordnameFeild",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_enter_username_in_usernameFeild_and_password_in_passwordnameFeild(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user must be in facebook credential page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_must_be_in_facebook_credential_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the login function using valid and invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User must be in facebook login page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_must_be_in_facebook_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter username in \"python\" usernameFeild and  password in \"python@123\" passwordnameFeild",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_enter_username_in_usernameFeild_and_password_in_passwordnameFeild(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user must be in facebook credential page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_must_be_in_facebook_credential_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/Feature/loginValid.feature");
formatter.feature({
  "name": "To check the facebook login function",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@loginInvalid"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User sholud be in facebook login page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition2.user_sholud_be_in_facebook_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate login function using invalid credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@loginInvalid"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "User enter username and password",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition2.user_enter_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicked login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition2.user_clicked_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User quit browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition2.user_quit_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User sholud be in facebook login page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition2.user_sholud_be_in_facebook_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate forgot password functionality",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@loginInvalid"
    },
    {
      "name": "@sanity"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "User click forget password button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition2.user_click_forget_password_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter mobile number",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition2.user_enter_mobile_number()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click search button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition2.user_click_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User must be in rest your password page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition2.user_must_be_in_rest_your_password_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});