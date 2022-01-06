import * as React from "react";
import Button from "@mui/material/Button";
import { useContext } from "react";
import { UserContext } from "../layouts";
// import { signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import { authentication } from "../components/firebase-config";

import Teams from "./teams";
import Layout from "../components/Layout";

const IndexPage = () => {
  const { user, signinwithGoogle, signout } = useContext(UserContext);
  return (
    <Layout>
      <Button
        variant="contained"
        color="primary"
        onClick={(e) => {
          e.preventDefault();
          user ? signout() : signinwithGoogle();
        }}
      >
        {user ? "Sign out" : "Sign In"}
      </Button>
      {user ? user.displayName : "user"}
    </Layout>
  );
};

export default IndexPage;
