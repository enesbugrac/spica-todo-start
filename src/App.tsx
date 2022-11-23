import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import InputTodo from "./components/InputTodo";
import TodoList from "./components/ItemList";
import styles from "./App.module.css";
import SearchTodo from "./components/SearchTodo";
const dummyTodos = [
  {
    id: 1,
    title: "Deneme1",
    completed: false,
  },
  {
    id: 2,
    title: "Deneme2",
    completed: false,
  },
  {
    id: 3,
    title: "Deneme3",
    completed: true,
  },
  {
    id: 4,
    title: "Deneme4",
    completed: false,
  },
];
const App = () => {
  const [todos, setTodos] = useState(dummyTodos);
  const [searchTitle, setSearchTitle] = useState("");

  const updateTodoItem = (id: any) => {
    setTodos((prevState: any) =>
      prevState.map((todo: any) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  const deleteTodoItem = (id: any) => {
    setTodos([...todos.filter((todo: any) => todo.id !== id)]);
  };

  const addTodoItem = (title: any) => {
    const newTodo = {
      title,
      id: 5,
      completed: false,
    };
    console.log("Girdi");
    setTodos([...todos, newTodo]);
  };

  const setUpdatedTodoItem = (updatedTitle: any, id: any) => {
    setTodos(
      todos.map((todo: any) => {
        if (todo.id === id) {
          // eslint-disable-next-line no-param-reassign
          todo.title = updatedTitle;
        }
        return todo;
      })
    );
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <div className={styles.container}>
              <div className={styles.inner}>
                <Header />
                <SearchTodo
                  searchTitle={(title: string) => setSearchTitle(title)}
                />
                <InputTodo addTodoProps={addTodoItem} />
                <TodoList
                  todos={todos}
                  handleChangeProps={updateTodoItem}
                  deleteTodoProps={deleteTodoItem}
                  setUpdate={setUpdatedTodoItem}
                />
              </div>
            </div>
          }
        />
      </Routes>
    </>
  );
};

export default App;
