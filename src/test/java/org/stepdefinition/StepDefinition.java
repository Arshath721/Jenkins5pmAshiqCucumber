package org.stepdefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.userlab.UtilityBaseClass;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class StepDefinition extends UtilityBaseClass {

	@Given("User must be in facebook login page")
	public void user_must_be_in_facebook_login_page() {

		launchUrl("https://www.facebook.com/");

	}

	@When("User enter username in {string} usernameFeild and  password in {string} passwordnameFeild")
	public void user_enter_username_in_usernameFeild_and_password_in_passwordnameFeild(String name, String pass) {
		WebElement username = driver.findElement(By.id("email"));
		fill(username, name);
		WebElement password = driver.findElement(By.id("pass"));
		fill(password, pass);

	}

	@When("User click login button")
	public void user_click_login_button() throws InterruptedException {
		WebElement loginBtn = driver.findElement(By.name("login"));
		BtnClick(loginBtn);
		Thread.sleep(5000);

	}

	@Then("user must be in facebook credential page")
	public void user_must_be_in_facebook_credential_page() {
		System.out.println("user is in facebook page");
	}

}
