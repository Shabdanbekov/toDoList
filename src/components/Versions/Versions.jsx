// Versions.jsx
import React from "react";
import { Link } from "react-router-dom";
import s from "./Versions.module.css";
import AddTask from "../addTask/AddTask";

const Versions = () => {
  return (
    <div className={s.container}>
      <Link className={s.back} to="/">
        <button>Desktop</button>
      </Link>
      <AddTask />
    </div>
  );
};

export default Versions;
