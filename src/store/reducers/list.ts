import { ToDoItem } from '../../interfaces/interfaces';

interface ReducerState {
  list: ToDoItem[],
  // These are the properties of the state
}

type ActionType = "ADD_TO_LIST" | "REMOVE_FROM_LIST" | "CLEAR_LIST";

interface Action {
  type: ActionType;
  item?: ToDoItem;
  id?: number;
}

const initialState: ReducerState = {
  list: []
}

// const list = useSelector(state => state.list.list)
// call this to access the state

const reducer = (state: ReducerState = initialState, action: Action) => {
  
  switch (action.type) {
    case "ADD_TO_LIST":
      if (action.item) {
        return {
          list: [...state.list, action.item]
        }
      }
      else return state;

    case "REMOVE_FROM_LIST":
      if (action.id) {
        return {
          list: state.list.filter((item: ToDoItem) => item.id !== action.id)
        }
      }
      else return state;
    case "CLEAR_LIST":
      // stub implementation - do this later yourself
      return state
    default:
      return state;
  }
}

export default reducer;