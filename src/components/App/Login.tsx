import React,{useEffect,useContext} from "react";
import GoogleIcon from "../../images/GoogleIcon.svg";
import LoginImage from "../../images/sunshine_9.jpg";
import { Fab, Typography } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import * as styles from "../css/app-index.module.css";
import { UserContext } from "../../layouts";
import { navigate } from "gatsby";
export default function Login() {
  let prompter: any = null;
  const {user,signinwithGoogle,signout}=useContext(UserContext)
  useEffect(() => {
    if (window !== undefined) {
      window.addEventListener("beforeinstallprompt", (e) => {
        e.preventDefault();
        prompter = e;
      });
    }
  }, []);
  useEffect(() => {
    if (user) {
      navigate("/home");
      // just to test whether working or not I used tell page
    }
  }, [user]);
  return (
    <React.Fragment>
      <div className={styles.maindiv}>
        <div className={styles.mainContainer}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              alt="Sunshine IITH"
              src={LoginImage}
              className={styles.loginhomeimage}
            />
            <br/>
            <h1 className={styles.logincontent}>Welcome!</h1>
            <br/>
            <p
              style={{
                textAlign: "center",
                fontSize: "21px",
                width: "80%",
                margin: "0px auto",
              }}
            >
              We are Sunshine, your buddies to talk with
            </p>
          </div>
          {user === undefined ? (
            <LinearProgress color="success" style={{ width: "70vw" }} />
          ) : user === null ? (
            <Fab
              sx={{ backgroundColor: "#F2BA49" }}
              variant="extended"
              onClick={(e) => {
                e.preventDefault();
                user ? signout() : signinwithGoogle();
              }}
            >
              <img
                style={{ height: "1rem", width: "1rem" }}
                src={GoogleIcon}
                alt="Sign In with Google"
              />
              <Typography style={{ marginLeft: "10px" }}>
                {user ? "Signed In !" : "Sign In With Google"}
              </Typography>
            </Fab>
          ) : (
            <div>Hello! {user.displayName} </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}
