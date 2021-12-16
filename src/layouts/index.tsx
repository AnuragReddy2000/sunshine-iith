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
import Context from "../components/Provider/Context";
import useWindowDimensions from "../hooks/useWindowDimensions";

export const Dimensionscontext = createContext([0, 0, true]);
// The above context is for passing device width and height using Hook I used and also standalone or not
function index({ children }) {
  const standaloneornot = window.matchMedia("(display-mode: standalone)")
    .matches
    ? true
    : false;
  const { height, width } = useWindowDimensions();
  return (
    <Context>
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
    </Context>
  );
}

export default index;
