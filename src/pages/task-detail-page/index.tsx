import "./task-detail.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../store/store";
import { useParams } from "react-router";
import TaskDetail from "../../components/task-detail/TaskDetail";
import { ToDoItem } from "../../interfaces/interfaces";

type NumberParams = {
  id: string;
};

function TaskDetailPage() {
  const list = useSelector((state: RootState) => state.list.list);
  const { id } = useParams<NumberParams>();
  const idNumber = parseInt(id);
  const filteredList = list.filter((item: ToDoItem) => item.id === idNumber);
  const selectedItem = filteredList.length > 0 ? filteredList[0] : "";

  return (
    <>
      <div className="detail-page-link-header">
        <Link
          to="/"
          style={{ textDecoration: "none", display: "inline-block", marginRight: 8, color: "black", }}
        >
          Return to Home Page
        </Link>
        <Link
          to="/task"
          style={{ textDecoration: "none", display: "inline-block", color: "red", }}
        >
          Return to Tasks Page
        </Link>
      </div>
      {selectedItem ? (
        <TaskDetail itemDetail={selectedItem} />
      ) : (
        <h2>There is no ToDo Item with id: {id}</h2>
      )}
    </>
  );
}

export default TaskDetailPage;
