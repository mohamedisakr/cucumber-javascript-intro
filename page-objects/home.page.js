class Home {
  get url() {
    return "/";
  }
  get $searchBox() {
    return $("input[name='q']");
  }

  get $searchButton() {
    return $(".FPdoLc.tfB0Bf [class='gNO89b'][name='btnK'][type='submit']");
  }

  search(keyword) {
    this.$searchBox.waitForDisplayed(5000);
    this.$searchBox.click();
    this.$searchBox.setValue(keyword);
    this.$searchBox.keys("\uE007");
  }
}
module.exports = new Home();
