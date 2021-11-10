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
  const selectedItem = list.length !== 0 ? list.filter((item: ToDoItem) => item.id === idNumber)[0] : "";

  return (
    <>
      <Link to="/" style={{ textDecoration: "none", display: "inline-block" }}>
        Return to Home Page
      </Link>
      <br />
      <Link
        to="/task"
        style={{ textDecoration: "none", display: "inline-block" }}
      >
        Return to Tasks Page
      </Link>
      {selectedItem ? (
            <TaskDetail
            itemDetail={selectedItem}
            /> 
      ) : (
        <h2>There is no ToDo Item with id: {id}</h2>
      )}
    </>
  );
}

export default TaskDetailPage;
