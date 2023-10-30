import React from "react";
import HelloRedux from "./HelloRedux";
import CounterReducer from "./CounterRedux/counterReducer";
import HelloReducer from "./HelloRedux/helloReducer";
import CounterRedux from "./CounterRedux";
import AddRedux from "./AddRedux";
import TodoList from "./todos/TodoList";

const ReduxExamples = () => {
  return(
    <div>
      <h2>Redux Examples</h2>
      <HelloRedux/>
      <CounterRedux/>
      <AddRedux/>
      <TodoList/>
    </div>
  );
};

export default ReduxExamples;