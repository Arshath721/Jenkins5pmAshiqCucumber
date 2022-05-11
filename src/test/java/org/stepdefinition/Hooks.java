package org.stepdefinition;

import java.io.IOException;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.userlab.UtilityBaseClass;

import io.cucumber.core.api.Scenario;
import io.cucumber.java.After;
import io.cucumber.java.Before;

public class Hooks extends UtilityBaseClass {

	@Before("@smoke")
	public void beforeSmoke() {
		System.out.println("before smoke scenario====\n");
	}

	@Before("@sanity")
	public void beforeSanity() {
		System.out.println("before sanity scenario====\n");
	}

	@Before("@regression")
	public void beforeRegression() {
		System.out.println("before regression scenario====\n");
	}

	@Before(order = 4)
	public void browserWait() {
		System.out.println("hooks wait \n");
		implictWait();
	}

	@Before(order = 3)
	public void maxBrowser() {
		System.out.println("hooks browser maximize");
		browserMaximize();
	}

	@Before(order = 1)
	public void beforeScenario() {
		System.out.println("beforeScenario====================");
	}

	@Before(order = 2)
	public void browserLaunch() {
		System.out.println("hooks launch browser");
		launchBrowser();
	}

	@After(order = 4)
	public void afterScenario() {
		System.out.println("\n=============afterScenario");

	}

	@After(order = 3)
	public void screenShotAuto(Scenario s) {
		System.out.println("Auto screen shot");
		if (s.isFailed()) {
			TakesScreenshot ts=(TakesScreenshot)driver;
			byte[] screenshotAs = ts.getScreenshotAs(OutputType.BYTES);
			s.embed(screenshotAs, "image/png");
		}

	}
	
	@After(order = 2)
	public void screenShotManually(Scenario s) throws IOException {
		System.out.println("Manual screen shot");
		if (s.isFailed()) {
			String name = s.getName();
			String filename = name.replace(" ", "_");
			takeSnap(filename);
		}
		

	}

	@After(order = 1)
	public void quitBrowser() {
		closeBrowser();
		System.out.println("hooks quit browser\n");
	}
	@After("@smoke")
	public void afterSmoke() {
		System.out.println("\n====after smoke scenario");

	}
	@After("@sanity")
	public void afterSanity() {
		System.out.println("\n====after sanity scenario");

	}
	@After("@regression")
	public void afterRegression() {
		System.out.println("\n====after regression scenario");

	}


}
