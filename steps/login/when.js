import { When } from "cucumber";
import signIn from "../../support/actions/signin";

When(/^the user tries to use valid credentials, "(.*)" to login$/, (email) => {
  signIn(email);
});
