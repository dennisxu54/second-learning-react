import React, { useState } from "react";
import "./home-page.css";

function HomePage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  type priorityType = "LOW" | "MEDIUM" | "HIGH" | string;
  type Option<T extends priorityType> = {
    value: T;
    label: string;
  };
  type Props<T extends priorityType> = {
    options: Option<T>[];
    value: T;
    onChange: (value: T) => void;
  };

  const [priority, setPriority] = useState("LOW");

  const handleSubmit = () => {
    alert(
      `The title you entered was: ${title} and the description was: ${description} with the priority: ${priority}`
    );
  };

  function Select<T extends priorityType>(props: Props<T>) {
    function handleOnChange(e: React.FormEvent<HTMLSelectElement>) {
      const { selectedIndex } = e.currentTarget;
      const selectedOption = props.options[selectedIndex];
      props.onChange(selectedOption.value);
    }
    return (
      <select value={props.value} onChange={handleOnChange}>
        {props.options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    );
  }

  function Form() {
    const targets = [
      { value: "LOW", label: "Low" },
      { value: "MEDIUM", label: "Medium" },
      { value: "HIGH", label: "High" },
    ];

    return <Select options={targets} value={priority} onChange={setPriority} />;
  }

  return (
    <div className="App">
      <h1 style={{ color: "white" }}>Welcome to learning TypeScript</h1>
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
          <Form />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
}

export default HomePage;
