package stepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import junit.framework.Assert;

public class LoginStepDefinition {

	WebDriver driver;

	@Given("^User is already in CRM login page$")
	public void user_already_on_login_page() {

		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
		driver.get("https://ui.cogmento.com/");
	}

	@When("^User Title of CRM title page shows Cogmento CRM$")
	public void user_Title_of_CRM_title_page_shows_Cogmento_CRM() {

		String title = driver.getTitle();
		System.out.println("Title is : " + title);
		Assert.assertEquals("Cogmento CRM", title);

	}

	// Regular exxpression:
	// 1. You can use \"([^\"])"
	// 2. Or You can use \"()"

	@Then("^user enters \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_and_password(String username, String password) {
		driver.findElement(By.name("email")).sendKeys(username);
		driver.findElement(By.name("password")).sendKeys(password);
		// Write code here that turns the phrase above into concrete actions

	}

	@Then("^user clicks on login button$")
	public void user_clicks_on_login_button() {

		driver.findElement(By.xpath("//div[@id='ui']//*[text()='Login']")).click();
		driver.manage().window().maximize();
	}

	@Then("^user lands on home page$")
	public void user_lands_on_home_page() {
		boolean nameLabel = driver.findElement(By.xpath("//div[@class='right menu']//*[text()='Sultan Ahmed']"))
				.isDisplayed();
		Assert.assertTrue(nameLabel);
	}

	@Then("^user click on gearicon to logout$")
	public void user_click_on_gearicon_to_logout() {
		driver.findElement(By.xpath("//div[@role='listbox']")).click();
		driver.findElement(By.xpath("//div[@role='listbox']//a[@class='item']//*[text()='Log Out']")).click();
		driver.quit();
	}

}
