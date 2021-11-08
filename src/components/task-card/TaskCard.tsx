import { useState } from "react";
import { useDispatch } from "react-redux";
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

  function deletItem() {
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
        <span>
          {id}. <b>Title: </b>
          {title} <b>Priority: </b>
          {description} <b>Description: </b>
          {priority}
        </span>
      </div>
      <div className={`collapse-content ${isCollapsed ? " show" : ""} `} id="optionsExpand">
        <div>
          <div>
            <button
              className="left-button"
              onClick={() => setIsCollapsed(!isCollapsed)}
            >
              close
            </button>
            <button className="right-button" onClick={() => deletItem()}>
              delete
            </button>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskCard;
