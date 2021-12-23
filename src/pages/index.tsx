import * as React from "react";
import Button from "@mui/material/Button";
import { useContext } from "react";
import { UserContext } from "../layouts";
import Header from "../components/Website/Header";
// import { signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import { authentication } from "../components/firebase-config";
const IndexPage = () => {
  const { user, signinwithGoogle, signout } = useContext(UserContext);
  return (
    <div>
      <Header/>
    </div>
  );
};

export default IndexPage;
