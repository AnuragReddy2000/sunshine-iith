import React, { useState, useEffect, createContext, useContext } from "react";
import { signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { authentication } from "../firebase-config";
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

export default (props) => {
  const [user, setuser] = useState<User>(undefined);
  const provider = new GoogleAuthProvider();
  //   useEffect(() => {}, []);
  const signinwithGoogle = () => {
    console.log("object");
    signInWithPopup(authentication, provider)
      .then((res) => {
        const User = res.user;
        res.user.getIdToken().then((res)=>{
          setuser({
            displayName: User.displayName,
            email: User.email,
            idToken: res,
          });
        })
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const signout = () => {
    const auth = authentication;
    signOut(auth)
      .then(() => {
        // Sign-out successful.
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
        signout: signout,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export const useContextHook = () => useContext(UserContext);
