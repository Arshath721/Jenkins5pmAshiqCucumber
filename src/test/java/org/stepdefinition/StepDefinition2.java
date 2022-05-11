package org.stepdefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.userlab.UtilityBaseClass;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class StepDefinition2 extends UtilityBaseClass {
	@Given("User sholud be in facebook login page")
	public void user_sholud_be_in_facebook_login_page() {
		launchUrl("https://www.facebook.com/");
	}

	@When("User enter username and password")
	public void user_enter_username_and_password() {
		
		WebElement username = driver.findElement(By.id("email"));
		fill(username, "greens");
		WebElement password = driver.findElement(By.id("pass"));
		fill(password, "greens@123");

	}

	@When("User clicked login button")
	public void user_clicked_login_button() throws InterruptedException {
		WebElement loginBtn = driver.findElement(By.name("login"));
		BtnClick(loginBtn);
		Thread.sleep(5000);
	}

	@When("User click forget password button")
	public void user_click_forget_password_button() {
		WebElement forgotBtn = driver.findElement(By.xpath("//a[text()='Forgotten password?']"));
		forgotBtn.click();
	}

	@When("User enter mobile number")
	public void user_enter_mobile_number() {
		WebElement forgotTextBox = driver.findElement(By.id("identify_email"));
		fill(forgotTextBox, "9876543210");

	}

	@When("User click search button")
	public void user_click_search_button() {
		WebElement sumbitBtn = driver.findElement(By.id("did_submit"));
		sumbitBtn.click();

	}

	@Then("User must be in rest your password page")
	public void user_must_be_in_rest_your_password_page() {
		System.out.println("user must be in find account page");
	}

	@Then("User quit browser")
	public void user_quit_browser() {
		closeBrowser();
	}

}
