import React from "react";
import PropTypes from "prop-types";
import TodoItem from "./Item";

const TodoList = (props: any) => {
  const { todos } = props;
  const { handleChangeProps, deleteTodoProps, setUpdate } = props;
  return (
    <ul>
      {todos.map((todo: any) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChangeProps={handleChangeProps}
          deleteTodoProps={deleteTodoProps}
          setUpdate={setUpdate}
        />
      ))}
    </ul>
  );
};

export default TodoList;
