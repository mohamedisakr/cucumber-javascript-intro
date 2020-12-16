import login from "../../page-objects/login";
import credentials from "../../data/credentials";

export default (email) => {
  const password = credentials.find((auth) => auth.email === email).password;
  login.signIn(email, password);
};
