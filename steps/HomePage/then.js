import { Then } from "cucumber";
import verifyLinkContain from "../../support/assertions/verify-links-contains";
// import assert from "assert";

Then(/^links related to "(.*)" are shown on the results page$/, (keyword) => {
  const $$links = $$("[class='hlcw0c'] [class='g']");
  verifyLinkContain($$links, keyword);

  // expect($$links).toBeExisting();
  // expect($$links).toExist();
  // assert($$links.length, 13);
});
