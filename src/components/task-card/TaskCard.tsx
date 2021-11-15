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
    const dataItem = localStorage.getItem('list')
    const newDataItem = dataItem? dataItem.replace(JSON.stringify(item), "") : "";
    localStorage.setItem("list", newDataItem)
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
        <span>
          {id}. <b>Title: </b>
          {title} <b>Priority: </b>
          {description} <b>Description: </b>
          {priority}
        </span>
      </div>
      <div
        className={`collapse-content ${isCollapsed ? " show" : ""} `}
        id="optionsExpand"
      >
        <div>
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
      </div>
    </>
  );
};

export default TaskCard;
