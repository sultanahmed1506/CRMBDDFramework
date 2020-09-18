Feature: CRM Login Feature

#Without example keyword
#Scenario: CRM Login Test Scenario
#
#Given User is already in CRM login page
#
#When User Title of CRM title page shows Cogmento CRM
#Then user enters "sultan07@gmail.com" and "Tanima29"
#Then user clicks on login button
#Then user lands on home page
#Then user click on gearicon to logout

Scenario: CRM Login Test Scenario

#With example keyword
Scenario Outline: CRM Login Test Scenario
Given User is already in CRM login page

When User Title of CRM title page shows Cogmento CRM
Then user enters "<username>" and "<password>"
Then user clicks on login button
Then user lands on home page
Then user click on gearicon to logout

Examples:
	| username | password |
	| sultan07@gmail.com | Tanima29 |
	| ambreen30@gmail.com | Ambreen123 |
	


