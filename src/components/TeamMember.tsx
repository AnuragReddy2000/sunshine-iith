import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

export default function TeamMember(props) {
  return <div>{props.member.Name}</div>;
}
