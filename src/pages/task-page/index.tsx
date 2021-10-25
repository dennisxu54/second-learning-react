import React from "react";
import "./task-page.css";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Link } from "react-router-dom";

function TaskPage() {
  const list = useSelector((state: RootState) => state.list.list);

  return (
    <div className="App">
      <div>
        <Link className="page-link" to="/">
          Home Page
        </Link>
      </div>
      <h1 style={{ color: "white" }}>These are the tasks submitted so far:</h1>
      {list.map((list) => (
        <div key={list.id}>
          <b>Title:</b> {list.title} <b>Description:</b> {list.description}{" "}
          <b>Priority:</b> {list.priority}
        </div>
      ))}
    </div>
  );
}

export default TaskPage;
