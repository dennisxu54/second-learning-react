import { ToDoItem } from "../../interfaces/interfaces"

export const addItemToList = (item: ToDoItem) => {
  return {
    type: "ADD_TO_LIST",
    item
  }
}

// so all you need to do, is call this function which as the "ADD" key, so it will trigger