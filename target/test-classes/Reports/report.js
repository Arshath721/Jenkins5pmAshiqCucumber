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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#id_submit\"}\n  (Session info: chrome\u003d101.0.4951.54)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-0R60E7M\u0027, ip: \u0027192.168.0.112\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_301\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.54, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\PARVEZ\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:59005}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 05737e853f2c45bb8cb77cf8267ae4e0\n*** Element info: {Using\u003did, value\u003did_submit}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.stepdefinition.StepDefinition2.user_click_search_button(StepDefinition2.java:49)\r\n\tat ✽.User click search button(file:src/test/resources/Feature/loginValid.feature:15)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User must be in rest your password page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition2.user_must_be_in_rest_your_password_page()"
});
formatter.result({
  "status": "skipped"
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
formatter.embedding("image/png", "embedded0.png", null);
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