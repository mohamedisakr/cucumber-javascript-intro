import { Then } from "cucumber";
import assert from "assert";

Then(/^The user enters "(.*)" into the search bar$/, (keyword) => {
  const $$links = $$('div[class="yuRUbf"]');
  $$links.forEach(($link) => {
    let linkText = $link.getText().toLowerCase();
    assert(linkText.includes(keyword), `Link does not contain ${keyword}`);
  });
});
