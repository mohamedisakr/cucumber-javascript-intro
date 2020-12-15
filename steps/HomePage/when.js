import { When } from "cucumber";
// import homePage from "../../page-objects/home.page";
import googleSearch from "../../support/actions/search";
//
When(/^The user enters "(.*)" into the search bar$/, (keyword) => {
  // const $searchBox = $("input[name='q']");
  // search(keyword, $searchBox);
  googleSearch(keyword);

  // const $searchBox = $("input[name='q']");
  // $searchBox.waitForDisplayed(5000);
  // $searchBox.click();
  // $searchBox.setValue(keyword);
  // console.log("Search box is existing: ", $searchBox.isExisting());
  // $searchBox.keys("\uE007"); //"Enter"

  // const $searchButton = $(".FPdoLc.tfB0Bf input[name='btnK'][type='submit']");
  // $searchButton.waitForDisplayed(5000);
  // $searchButton.click();
});
