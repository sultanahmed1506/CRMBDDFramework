$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/sulta/git/crmbddcucumberframework/CrmBDDFramework/src/main/java/Features/login.feature");
formatter.feature({
  "line": 1,
  "name": "CRM Login Feature",
  "description": "",
  "id": "crm-login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "comments": [
    {
      "line": 3,
      "value": "#Without example keyword"
    },
    {
      "line": 4,
      "value": "#Scenario: CRM Login Test Scenario"
    },
    {
      "line": 5,
      "value": "#"
    },
    {
      "line": 6,
      "value": "#Given User is already in CRM login page"
    },
    {
      "line": 7,
      "value": "#"
    },
    {
      "line": 8,
      "value": "#When User Title of CRM title page shows Cogmento CRM"
    },
    {
      "line": 9,
      "value": "#Then user enters \"sultan07@gmail.com\" and \"Tanima29\""
    },
    {
      "line": 10,
      "value": "#Then user clicks on login button"
    },
    {
      "line": 11,
      "value": "#Then user lands on home page"
    },
    {
      "line": 12,
      "value": "#Then user click on gearicon to logout"
    }
  ],
  "line": 14,
  "name": "CRM Login Test Scenario",
  "description": "",
  "id": "crm-login-feature;crm-login-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 16,
      "value": "#With example keyword"
    }
  ],
  "line": 17,
  "name": "CRM Login Test Scenario",
  "description": "",
  "id": "crm-login-feature;crm-login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "User is already in CRM login page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "User Title of CRM title page shows Cogmento CRM",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "user lands on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "user click on gearicon to logout",
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "crm-login-feature;crm-login-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 27,
      "id": "crm-login-feature;crm-login-test-scenario;;1"
    },
    {
      "cells": [
        "sultan07@gmail.com",
        "Tanima29"
      ],
      "line": 28,
      "id": "crm-login-feature;crm-login-test-scenario;;2"
    },
    {
      "cells": [
        "ambreen30@gmail.com",
        "Ambreen123"
      ],
      "line": 29,
      "id": "crm-login-feature;crm-login-test-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 28,
  "name": "CRM Login Test Scenario",
  "description": "",
  "id": "crm-login-feature;crm-login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "User is already in CRM login page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "User Title of CRM title page shows Cogmento CRM",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "user enters \"sultan07@gmail.com\" and \"Tanima29\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "user lands on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "user click on gearicon to logout",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_already_on_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.user_Title_of_CRM_title_page_shows_Cogmento_CRM()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "sultan07@gmail.com",
      "offset": 13
    },
    {
      "val": "Tanima29",
      "offset": 38
    }
  ],
  "location": "LoginStepDefinition.user_enters_and_password(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.user_lands_on_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.user_click_on_gearicon_to_logout()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 29,
  "name": "CRM Login Test Scenario",
  "description": "",
  "id": "crm-login-feature;crm-login-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "User is already in CRM login page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "User Title of CRM title page shows Cogmento CRM",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "user enters \"ambreen30@gmail.com\" and \"Ambreen123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "user lands on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "user click on gearicon to logout",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_already_on_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.user_Title_of_CRM_title_page_shows_Cogmento_CRM()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ambreen30@gmail.com",
      "offset": 13
    },
    {
      "val": "Ambreen123",
      "offset": 39
    }
  ],
  "location": "LoginStepDefinition.user_enters_and_password(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.user_lands_on_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.user_click_on_gearicon_to_logout()"
});
formatter.result({
  "status": "skipped"
});
});