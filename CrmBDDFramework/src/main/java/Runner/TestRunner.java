package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "/Users/sulta/git/crmbddcucumberframework/CrmBDDFramework/src/main/java/Features/login.feature", // The
																																// path
																																// of
																																// the
																																// feature
																																// file
		glue = { "stepDefinition" }, // The path of the step definition file
		format = { "pretty", "html:test-output", "json:json_output/cucumber.json", "junit:junit_xml/cucumber.xml" }, // to
																														// generate
																														// different
																														// type
																														// of
																														// reporting
		monochrome = true, // display the console in readable format
		strict = true, // check if any steps is not defined in step definition file
		dryRun = true // to check if mapping is proper between feature file and step definition file
)

public class TestRunner {

}
