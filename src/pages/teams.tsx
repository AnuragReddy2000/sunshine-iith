import React, { useState } from "react";
import Layout from "../components/Layout";
import { Dropdown, DropdownButton } from "react-bootstrap";

import { Departments } from "../data/Deparments";

import TeamMembers from "../components/TeamMembers";

function Teams() {
  const [currentDepartment, setCurrentDepartment] = useState("All");

  return (
    <Layout>
      <div>This is the teams page</div>
      <DropdownButton
        className="m-2"
        id="dropdown-basic-button"
        title="Department"
      >
        <Dropdown.Item key="all" onClick={() => setCurrentDepartment("All")}>
          All
        </Dropdown.Item>
        <Dropdown.Divider />
        {Departments.map((department) => (
          <Dropdown.Item
            key={department[1]}
            onClick={() => setCurrentDepartment(department[1])}
          >
            {department[0]}
          </Dropdown.Item>
        ))}
      </DropdownButton>
      <TeamMembers department={currentDepartment} />
    </Layout>
  );
}
// onSelect={() => setCurrentDepartment(department[1])}
export default Teams;
