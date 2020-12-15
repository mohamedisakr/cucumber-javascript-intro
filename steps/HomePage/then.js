import { Then } from "cucumber";
import verifyLinkContain from "../../support/assertions/verify-links-contains";

Then(/^links related to "(.*)" are shown on the results page$/, (keyword) => {
  verifyLinkContain(keyword);
});
