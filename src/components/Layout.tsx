import React from "react";
import Header from "./Header";

import "bootstrap/dist/css/bootstrap.min.css";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <footer></footer>
    </div>
  );
}
