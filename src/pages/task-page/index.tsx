import "./task-page.css";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Link } from "react-router-dom";
import TaskCard from "../../components/task-card/TaskCard";
import { ToDoItem } from "../../interfaces/interfaces";

function TaskPage() {
  const list = useSelector((state: RootState) => state.list.list);

  return (
    <div>
      <div className="task-page-link-header">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            display: "inline-block",
            color: "red"
          }}
        >
          Home Page
        </Link>
      </div>
      <h1>These are the tasks submitted so far:</h1>
      {list.length === 0 ? (
        <p>There are currently no tasks submitted.</p>
      ) : (
        list.map((item: ToDoItem) => <TaskCard item={item} key={item.id} />)
      )}
    </div>
  );
}

export default TaskPage;
