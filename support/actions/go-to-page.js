import home from "../../page-objects/home-auto.page";

export default (page) => {
  switch (page) {
    case "Home":
      browser.url(home.url);
      break;
    default:
      console.log(`Invalid Page ${page}`);
  }
};

// export default (url) => {
//   browser.url(url);
// };
