import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../Modules/modulesReducer";
import coursesReducer from "../Dashboard/coursesReducer";
import assignmentsReducer from "../Assignments/assignmentsReducer";
const store = configureStore({
  reducer: {
    modulesReducer,
    coursesReducer,
    assignmentsReducer,
  }
});


export default store;