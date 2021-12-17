import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../components/Globaltheme/Globaltheme";
import logo from "../images/icon.png";
import logo48 from "../images/icon_x48.png";
import logo96 from "../images/icon_x96.png";
import logo128 from "../images/icon_x128.png";
import logo192 from "../images/icon_x192.png";
import logo512 from "../images/icon_x512.png";
import Button from "@mui/material/Button";
import { Helmet } from "react-helmet";
import { createContext } from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { useState, useEffect, useContext } from "react";
import { signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { authentication } from "../components/firebase-config";
// import firebase from "firebase/app";
// import "firebase/auth";
type User = {
  displayName: string;
  email: string;
  idToken: string;
};

type Context = {
  user: User;
  signinwithGoogle: () => void;
  signout: () => void;
};
export const UserContext = createContext<Context>({
  user: null,
  signinwithGoogle: () => {},
  signout: () => {},
});

export const Dimensionscontext = createContext([0, 0, true]);
// The above context is for passing device width and height using Hook I used and also standalone or not
function index({ children }) {
  const standaloneornot = window.matchMedia("(display-mode: standalone)")
    .matches
    ? true
    : false;
  const { height, width } = useWindowDimensions();
  const [user, setuser] = useState<User>(undefined);
  const provider = new GoogleAuthProvider();
  //   useEffect(() => {}, []);
  const signinwithGoogle = () => {
    // console.log("object");
    signInWithPopup(authentication, provider)
      .then((res) => {
        const User = res.user;
        if (!res.user.email.includes("iith.ac.in")) {
          signout();
          return;
        } else {
          res.user.getIdToken().then((res) => {
            setuser({
              displayName: User.displayName,
              email: User.email,
              idToken: res,
            });
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const signout = () => {
    const auth = authentication;
    // console.log('signout click');
    signOut(auth)
      .then(() => {
        setuser(null);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <UserContext.Provider
      value={{
        user,
        signinwithGoogle,
        signout,
      }}
    >
      <ThemeProvider theme={theme}>
        <Dimensionscontext.Provider value={[height, width, standaloneornot]}>
          <Helmet
            htmlAttributes={{
              lang: "en",
            }}
          >
            <meta charSet="utf-8" />
            <meta
              name="description"
              content="The Web App of Sunhine, The counselling cell of IITH."
            />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <title>Sunshine IITH</title>
            <link
              href="https://fonts.googleapis.com/css?family=Open+Sans"
              rel="stylesheet"
            />
            <link
              href={logo}
              sizes="330x330"
              rel="apple-touch-startup-image"
            ></link>
            <link
              href={logo48}
              sizes="48x48"
              rel="apple-touch-startup-image"
            ></link>
            <link
              href={logo96}
              sizes="96x96"
              rel="apple-touch-startup-image"
            ></link>
            <link
              href={logo128}
              sizes="128x128"
              rel="apple-touch-startup-image"
            ></link>
            <link
              href={logo192}
              sizes="192x192"
              rel="apple-touch-startup-image"
            ></link>
            <link
              href={logo512}
              sizes="512x512"
              rel="apple-touch-startup-image"
            ></link>
          </Helmet>
          {children}
        </Dimensionscontext.Provider>
      </ThemeProvider>
    </UserContext.Provider>
  );
}

export default index;
