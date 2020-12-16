import { Given } from "cucumber";
import homePage from "../../page-objects/home.page";
import goToURL from "../../support/actions/go-to-page";

Given("A web browser is at the Google home page", () => {
  // browser.url("/");
  goToURL(homePage.url);
});
