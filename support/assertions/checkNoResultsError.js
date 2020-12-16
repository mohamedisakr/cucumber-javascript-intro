import catalog from "../../page-objects/catalog.page";
import assert from "assert";

export default () => {
  const noResultErrorMessage = catalog.noResultsErrorMessage;
  const errorMessage = "No results error message was not found";
  assert(
    noResultErrorMessage
      .getText()
      .includes("No results were found for your search"),
    errorMessage
  );
};
