import { Given } from "cucumber";
import goToPage from "../../support/actions/go-to-page";

Given(/^the browser is at the "(Home)" page$/, (page) => {
  goToPage(page);
});
