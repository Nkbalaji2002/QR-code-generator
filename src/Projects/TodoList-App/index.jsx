import axios from "axios";
import React, { useEffect, useState } from "react";

const dev_URL = "http://localhost:5000/todos";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const fetchTodo = async () => {
    try {
      const response = await axios.get(dev_URL);
      if (response) {
        setTodos(response.data);
      }
    } catch (error) {
      console.log(`Error : `, error);
    }
  };

  useEffect(() => {
    fetchTodo();
  }, []);

  const addTodo = async () => {
    try {
      const newTodo = {
        text: todo,
        completed: false,
      };

      if (todo.length > 0) {
        const response = await axios.post(dev_URL, newTodo);
        if (response) {
          setTodos([...todos, response.data]);
        }
        setTodo("");
      }
    } catch (error) {
      console.log("Error : ", error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      const resp = await axios.delete(`${dev_URL}/${id}`);
      if (resp) {
        setTodos(todos.filter((todo) => todo.id !== id));
        fetchTodo();
      }
    } catch (error) {
      console.log("Error : ", error);
    }
  };

  const updateTodo = async (id) => {
    try {
      const todoToggle = todos.find((todo) => todo.id === id);
      const updatedTodo = {
        ...todoToggle,
        completed: !todoToggle.completed,
      };
      const resp = await axios.put(`${dev_URL}/${id}`, updatedTodo);

      if (resp) {
        setTodos(todos.map((todo) => (todo.id === id ? resp.data : todo)));
      }
    } catch (error) {
      console.log("Error : ", error);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex justify-center items-center">
        <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold mb-4">Todo List App</h1>
          <div className="mb-4">
            <input
              type="text"
              className="border rounded w-80 mr-2 py-2 px-3 text-gray-700"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
              required
            />
            <button
              className="mt-2 bg-blue-500 text-white py-2 px-4 rounded"
              onClick={addTodo}
            >
              Add
            </button>
          </div>
          {/* list */}
          <ul>
            {todos.map((todo) => (
              <li
                key={todo.id}
                className="flex justify-between items-center bg-gray-200 p-2 rounded mb-2"
              >
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => updateTodo(todo.id)}
                  className="mr-2"
                />
                <span
                  className={`flex-1  ${todo.completed ? "line-through" : ""}`}
                >
                  {todo.text}
                </span>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="bg-red-500 text-white py-1 px-2 rounded"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default TodoList;
