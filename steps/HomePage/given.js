import { Given } from "cucumber";
import goToURL from "../../support/actions/go-to-url";

Given("A web browser is at the Google home page", () => {
  // browser.url("/");
  goToURL("/");
});
