import { Then } from "cucumber";
import assert from "assert";

Then(/^links related to "(.*)" are shown on the results page$/, (keyword) => {
  const $$links = $$('div[class="yuRUbf"]');
  // expect($$links).toBeExisting();
  // expect($$links).toExist();
  assert($$links.length, 13);
});
