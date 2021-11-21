import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ToDoItem } from "../../interfaces/interfaces";
import { removeItemToList } from "../../store/actions/list";
import "./TaskCard.css";

interface Props {
  item: ToDoItem;
}

const TaskCard = ({ item }: Props) => {
  //destructuring for tidiness
  const { id, title, description, priority } = item;
  const [isCollapsed, setIsCollapsed] = useState(false);
  const dispatch = useDispatch();

  function deleteItem() {
    dispatch(removeItemToList(id));
    setIsCollapsed(!isCollapsed);
  }

  return (
    <>
      <div className="task-box" aria-expanded={!isCollapsed}>
        <button
          className="options-button"
          onClick={() => setIsCollapsed(!isCollapsed)}
          aria-controls="optionsExpand"
        >
          Options
        </button>
        <span className="task-details">
          <span><b>ID:</b> {id}.</span>
          {title && <span><b>Title:</b> {title}</span>  }
          {description && <span><b>Description:</b> {description} </span>  }
          <span><b>Priority:</b> {priority}</span>
        </span>
      </div>
      <div
        className={`collapse-content ${isCollapsed ? " show" : ""} `}
        id="optionsExpand"
      >
        <div>
          <button
            className="close-button"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            close
          </button>

          <button className="delete-button" onClick={() => deleteItem()}>
            delete
          </button>
          <Link to={`/task-detail/${id}`}>
            <button className="info-button">More Info</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default TaskCard;
