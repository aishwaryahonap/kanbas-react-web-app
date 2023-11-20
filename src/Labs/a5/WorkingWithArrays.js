import { useState,useEffect } from "react";
 import axios from "axios";
 import "./index.css"

function WorkingWithArrays(id) {
  const [errorMessage, setErrorMessage] = useState(null);
  const API = "http://localhost:4000/a5/todos";
  const [todo, setTodo] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-09-09",
        completed: false,
      });
  const [todos, setTodos] = useState([]);
  const fetchTodos = async () => {
  const response = await axios.get(API);
  setTodos(response.data);
  };

  const postTodo = async () => {
  const response = await axios.post(API, todo);
  setTodos([...todos, response.data]);
  };
  
    const deleteTodo = async (todo) => {
      try {
          const response = await axios.delete(`${API}/${todo.id}`);
          // setTodos(todos.filter((t) => t.id !== todo.id));
          setTodos(prevTodos => prevTodos.filter((t) => t.id !== todo.id));
      } catch (error) {
      console.log(error);
      setErrorMessage(error.response.data.message);
      }
};

    const updateTodo = async () => {
      try{ 
          const response = await axios.put(
            `${API}/${todo.id}`, todo);
            setTodos(todos.map((t) => (
                t.id === todo.id ? todo : t)));
            setTodo({});
      } catch (error) {
    console.log(error);
    setErrorMessage(error.response.data.message);
  }
};



  useEffect(() => {
    fetchTodos();
  }, []);


  const removeTodo = async (todo) => {
    const response = await axios
      .get(`${API}/${todo.id}/delete`);
    setTodos(response.data);
  };

  const createTodo = async () => {
    const response = await axios.get(`${API}/create`);
    setTodos(response.data);
  };

  const fetchTodoById = async (id) => {
    const response = await axios.get(`${API}/${id}`);
    setTodo(response.data);
  };

  const updateTitle = async () => {
    const response = await axios.get(
      `${API}/${todo.id}/title/${todo.title}`);
    setTodos(response.data);
  };


    return (
      <div>
        <br/><hr/> <br/>
        <h3>Working with Arrays</h3>

        
        <input
        value={todo.id}
        placeholder="Enter ID"
        onChange={(e) => setTodo({
          ...todo, id: e.target.value })}
        className="form-control mb-2"
        type="number"
      />

        <input
        value={todo.title}
        placeholder="Enter Title"
        onChange={(e) => setTodo({
          ...todo, title: e.target.value })}
        className="form-control mb-2"
        type="text"
      />
        <textarea
        value={todo.description}
        placeholder="Enter Description"
        onChange={(e) => setTodo({
          ...todo, description: e.target.value })}
        className="form-control mb-2"
       
      />
        
        <input 
        onClick={(e) => setTodo({ ...todo,
                    completed: e.target.checked 
                })}
        type="checkbox" 
        id="todo"
        checked={todo.completed} />
        <label for="todo">
            Task Completed
        </label>
        {/* <a href={`${URL}/completed/completed=${todo.completed}`}
            className="btn btn-primary me-2 float-end">View Updates (Assignment Completed)</a>
        <br/> */}


      {/* <textarea
        onChange={(e) => setTodo({ ...todo,
          description: e.target.value })}
        value={todo.description} type="text"
      /> */}
      <br/>
      <input
        onChange={(e) => setTodo({
          ...todo, due: e.target.value })}
        value={todo.due} type="date"
        className="mt-2"
      /><br/>
      {/* <label>
        <input
          onChange={(e) => setTodo({
            ...todo, completed: e.target.checked })}
          value={todo.completed} type="checkbox"
        />
        Completed
      </label> */}
      <button onClick={postTodo}
      className="btn btn-primary mt-2 w-100" >
        Post Todo (using app.post)
      </button>
      <button onClick={updateTodo}
      className="btn btn-success mt-2 w-100">
        Update Todo (using app.put)
      </button>


      <br/>
      <br/> <h4>Getting from server: </h4>
      <button onClick={createTodo}
              className="btn btn-primary mb-2 w-100">
        Create Todo (using app.get)
      </button>
            <button onClick={updateTitle}
              className="btn btn-success mb-2 w-100">
        Update Title (using app.get)
      </button>

      <br/>
      {errorMessage && (
        <div className="alert alert-danger mb-2 mt-2">
          {errorMessage}
        </div>
      )}
      <ul className="list-group">
        {todos.map((todo) => (
          <li key={todo.id}
              className="list-group-item wd-border">
          

          <button
          onClick={() => removeTodo(todo)}
          className="btn btn-danger ms-2 float-end" >
          Remove(Using app.get)
        </button>

        <button
          onClick={() => deleteTodo(todo)}
          className="btn btn-danger float-end ms-2">
          Delete(Using app.delete)
        </button>
        <button
          onClick={() => fetchTodoById(todo.id)}
          className="btn btn-warning ms-2 float-end" >
          Edit
        </button>
        <input
              checked={todo.completed}
              type="checkbox" readOnly
            />
            {todo.title}
            <p>Description: {todo.description}</p>
            <p>Due Date: {todo.due}</p>
          </li>
        ))}
      </ul>
      <h3>Updating an Item in an Array</h3>
        <a
            href={`${API}/${todo.id}/title/${todo.title}`}
            className="btn btn-primary me-2" >
            Update Title of Todo with ID = {todo.id}
        </a>
        <br/>
        <a
            href={`${API}/${todo.id}/description/${todo.description}`}
            className="btn btn-primary me-2 mt-2" >
            Update Description of Todo with ID = {todo.id}
        </a> (Extra Credit)

        <br/>
        <a href={`${API}/${todo.id}/completed/${todo.completed}`}
            className="btn btn-primary me-2 mt-2 ">Update Completed Status of Todo with ID =  {todo.id}</a> (Extra Credit)
        <br/>



      <h3>Deleting from an Array</h3>
      <a href={`${API}/${todo.id}/delete`}
         className="btn btn-primary me-2">
        Delete Todo with ID = {todo.id}
      </a>

        <h4>Retrieving Arrays</h4> 
        <a href={API} className="btn btn-primary me-2">
          Get Todos
        </a>

        <h4>Retrieving an Item from an Array by ID</h4>
        <input
        className="form-control"
        value={todo.id}
        onChange={(e) => setTodo({ ...todo,
        id: e.target.value })}/>
        <a href={`${API}/${todo.id}`}
         className="btn btn-primary me-2 mt-2">
        Get Todo by ID
      </a>


      <h3>Filtering Array Items</h3>
        <a href={`${API}?completed=true`}
        className="btn btn-primary me-2" >
        Get Completed Todos
        </a>

    <h4>Creating new Items in an Array</h4>
    <a href={`${API}/create`}
     className="btn btn-primary me-2">
        Create Todo
     </a>
      </div>
    );
  }
  export default WorkingWithArrays;