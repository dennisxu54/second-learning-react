import React, { useState } from "react";
import "./home-page.css";

function HomePage() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [priority, setPriority] = useState("LOW")

  const handleSubmit = () => {
    alert(`The title you entered was: ${title} and the description was: ${description} with the priority: ${priority}`)
  }

  return (
    <div className="App">
      <h1 style={{ color: "white" }}>Welcome to learning TypeScript</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label>
          Description:
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <label>
          Priority:
          <select value={priority} onChange={(e) => setPriority(e.target.value)}>
            <option value="LOW">LOW</option>
            <option value="MEDIUM">MEDIUM</option>
            <option value="HIGH">HIGH</option>
          </select>
        </label>
        <input type="submit"/>
      </form>
    </div>
  );
}

export default HomePage;
