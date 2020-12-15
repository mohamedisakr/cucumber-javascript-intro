import assert from "assert";

export default (links, keyword) => {
  links.forEach((link) => {
    let linkText = link.getText().trim().toLowerCase();
    if (linkText) {
      assert(linkText.includes(keyword), `Link does not contain ${linkText}`);
    }
  });
};
