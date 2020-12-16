import home from "../../page-objects/home-auto.page";
import login from "../../page-objects/login";

export default (page) => {
  switch (page) {
    case "Home":
      browser.url(home.url);
      break;
    case "Login":
      browser.url(login.url);
      break;
    default:
      console.log(`Invalid Page ${page}`);
  }
};

// export default (url) => {
//   browser.url(url);
// };
