import { Then } from "cucumber";
import checkProducts from "../../support/assertions/checkProducts";

Then(/^(no )?products are listed$/, (notListed) => {
  if (notListed) {
    checkProducts(false);
  } else {
    checkProducts(true);
  }
});
