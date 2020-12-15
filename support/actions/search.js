import homePage from "../../page-objects/home.page";

export default (keyword) => {
  homePage.search(keyword);
};
