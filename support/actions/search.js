import homePage from "../../page-objects/home-auto.page";

export default (keyword) => {
  homePage.search(keyword);
};
