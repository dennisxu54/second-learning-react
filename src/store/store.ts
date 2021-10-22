import { combineReducers, createStore } from 'redux';
import listReducer from './reducers/list';
// we can also use combine reducers in case we want to group our global state
// in that case we use combineReducers to initialise the store

export const initialiseStore = () => {
  // the combineReducers function takes an object,
  // the key is the name we register the reducer under

  return createStore(combineReducers({ list: listReducer }));
}

const store = initialiseStore();

// this is for typescript so we know what types are inside our store
export type RootState = ReturnType<typeof store.getState>;
