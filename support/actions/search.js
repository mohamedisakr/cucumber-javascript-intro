export default (keyword, inputField) => {
  inputField.waitForDisplayed(5000);
  inputField.click();
  inputField.setValue(keyword);
  inputField.keys("\uE007");
};
