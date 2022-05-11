package org.runner;

import org.junit.AfterClass;
import org.junit.runner.RunWith;
import org.userlab.JvmReport;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features = "@src\\test\\resources\\Rerun\\failedRerun.txt", 
glue = "org.stepdefinition",dryRun = false, strict = true, monochrome = true,
 plugin = {
		"pretty", "html:src\\test\\resources\\Reports", 
		"json:src\\test\\resources\\Reports\\out.json",
		"junit:src\\test\\resources\\Reports\\facebook.xml",
		"rerun:src\\test\\resources\\Rerun\\failedRerun.txt"})

public class TestRerunner {

	@AfterClass
	public static void jvmReportGeneration() {
		//
		JvmReport.generateJvmReport(System.getProperty("user.dir") 
				+ "\\src\\test\\resources\\Reports\\out.json");
	}
}
