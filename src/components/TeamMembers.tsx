import React from "react";

import TeamMember from "./TeamMember";

import { UG_Mentors, UG_Buddies } from "../data/TeamData";

import "bootstrap/dist/css/bootstrap.min.css";

export default function TeamMembers(props) {
  ///console.log(UG_Mentors);
  return (
    <div className="row text-center">
      {UG_Mentors.map(function (member, index) {
        if (props.department.localeCompare("All") == 0) {
          return (
            <TeamMember key={member.id} member={member} role={"UG Mentor"} />
          );
        } else if (
          member.Roll_No.substring(0, 2)
            .toUpperCase()
            .localeCompare(props.department) == 0
        ) {
          return (
            <TeamMember key={member.id} member={member} role={"UG Mentor"} />
          );
        } else {
          return <></>;
        }
      })}
    </div>
  );
}

/**
 * {UG_Mentors.map(function ({ member, index }: any) {
        if (member.Roll_No.substring(0, 2).toUpperCase() === props.department) {
          return <TeamMember member />;
        } else {
          return <></>;
        }
      })}
 */
