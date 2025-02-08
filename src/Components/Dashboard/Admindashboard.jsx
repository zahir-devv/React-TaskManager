import React from "react";
import Header from "../other/Header";
import { useState } from "react";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";

const Admindashboard = () => {
  return (
    <div className="p-10">
      <Header />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default Admindashboard;
