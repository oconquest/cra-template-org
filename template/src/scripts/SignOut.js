import { getAuth, signOut } from "firebase/auth";

const SignOut = (setState) => {
  const auth = getAuth();

  signOut(auth)
    .then(() => {
      setState({
        msgOpen: true,
        msgType: "primary",
        msg: "You have been successfully signed out",
        user: null, 
      });
    })
    .catch((error) => {
      setState({
        msgOpen: true,
        msgType: "error",
        msg: "Failed to sign out user",
      });
    });
};

export default SignOut;
