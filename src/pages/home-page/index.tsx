import React, { useState } from "react";
import "./home-page.css";
import { Priority } from "../../interfaces/types";
import { ToDoItem } from "../../interfaces/interfaces";
import { addItemToList } from "../../store/actions/list";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function HomePage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState<Priority>("LOW");
  const [id, setID] = useState(Date.now());

  const dispatch = useDispatch();

  const handleSubmit = () => {
    const item: ToDoItem = {
      id,
      priority,
      title,
      description,
    };

    // 'dispatch'ing is a way to make the redux store change
    // 'select'ing is a way to get stuff from the redux store
    // useDispatch and useSelector
    dispatch(addItemToList(item));
    
    setID(Date.now());
    setTitle("");
    setDescription("");
    setPriority("LOW");
  };

  return (
    <div className="App">
      <h1>Welcome to learning TypeScript</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label>
          Priority:
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="LOW">LOW</option>
            <option value="MEDIUM">MEDIUM</option>
            <option value="HIGH">HIGH</option>
          </select>
        </label>
        <button
          type="submit"
          onClick={(event: React.MouseEvent) => {
            event.preventDefault();
            handleSubmit();
          }}
        >
          Add to list
        </button>
      </form>
      <>
        <Link
          to="/task"
          style={{ textDecoration: "none", display: "inline-block", marginTop: 8 }}
        >
          Tasks Page
        </Link>
      </>
    </div>
  );
}

export default HomePage;
