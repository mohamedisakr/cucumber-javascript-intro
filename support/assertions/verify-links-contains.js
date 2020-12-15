import assert from "assert";
import searchResultPage from "../../page-objects/search.result.page";

export default (keyword) => {
  searchResultPage.$$searchResultlinks.forEach((link) => {
    let linkText = link.getText().trim().toLowerCase();
    if (linkText) {
      assert(linkText.includes(keyword), `Link does not contain ${linkText}`);
    }
  });
  // links.forEach((link) => {
  //   let linkText = link.getText().trim().toLowerCase();
  //   if (linkText) {
  //     assert(linkText.includes(keyword), `Link does not contain ${linkText}`);
  //   }
  // });
};
