import { ToDoItem } from "../../interfaces/interfaces";
import "./TaskDetail.css";

interface Props {
  itemDetail: ToDoItem;
}

const TaskDetail = ({ itemDetail }: Props) => {
  const { id, title, description, priority } = itemDetail;

  return (
    <div className="detail-box">
      <h3>These are the details of the ToDo Item {id}</h3>
      <div className="detail-content">
        <p>
          <b className="id">The ID is:</b> {id} <br />
          <b className="title">Title: </b> {title} <br />
          <i>Priority: </i> {priority} <br />
          <b>Description: </b> {description}
        </p>
      </div>
    </div>
  );
};

export default TaskDetail;
