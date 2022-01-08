import React from "react";

import TeamMember from "./TeamMember";

import { UG_Mentors, UG_Buddies } from "../data/TeamData";

export default function TeamMembers(props) {
  ///console.log(UG_Mentors);
  return (
    <div>
      {props.department}
      {UG_Mentors.map(function (member, index) {
        if (props.department.localeCompare("All") == 0) {
          return <TeamMember key={member.id} member={member} />;
        } else if (
          member.Roll_No.substring(0, 2)
            .toUpperCase()
            .localeCompare(props.department) == 0
        ) {
          return <TeamMember key={member.id} member={member} />;
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
