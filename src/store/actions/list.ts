import { ToDoItem } from "../../interfaces/interfaces"

export const getToDoItemFromLocalStorage = (): ToDoItem[] => {
  const localStorageString: string = localStorage.getItem('list') as string
  const toDoItemArray: ToDoItem[] =  localStorageString === null ? [] : JSON.parse(localStorageString);
  return toDoItemArray
}

export const addItemToList = (item: ToDoItem) => {
  const toDoItemArrayAddItem = getToDoItemFromLocalStorage();
  toDoItemArrayAddItem.push(item)
  localStorage.setItem("list", JSON.stringify(toDoItemArrayAddItem))
  return {
    type: "ADD_TO_LIST",
    item
  }
}

export const removeItemToList = (id: number) => {
  const toDoItemArray = getToDoItemFromLocalStorage();
  const ToDoItemArrayRemoveItem = toDoItemArray.filter((item: ToDoItem) => item.id !== id)
  localStorage.setItem("list", JSON.stringify(ToDoItemArrayRemoveItem))
  return {
    type: "REMOVE_FROM_LIST",
    id
  }
}

// so all you need to do, is call this function which as the "ADD" key, so it will trigger