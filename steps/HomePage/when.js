import { When } from "cucumber";

When(/^The user enters "(.*)" into the search bar$/, (keyword) => {
  const $searchBox = $("input[name='q']");
  $searchBox.waitForDisplayed(5000);
  $searchBox.click();
  $searchBox.setValue(keyword);
  console.log("Search box is existing: ", $searchBox.isExisting());
  //   $searchBox.keys("\uE007"); //"Enter"

  const $searchButton = $(
    "div[class='FPdoLc tfB0Bf'] input[name='btnK'][type='submit']"
  );
  $searchButton.waitForDisplayed(5000);
  $searchButton.click();
});
