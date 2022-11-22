import React, { useState } from "react";

import { FaTrash } from "react-icons/fa";
import styles from "./Item.module.css";

const TodoItem = (props: any) => {
  const [editing, setEditing] = useState(false);

  const { todo } = props;
  const { completed, id, title } = todo;
  const { handleChangeProps, deleteTodoProps, setUpdate } = props;

  const handleEditing = () => {
    setEditing(true);
  };
  const handleUpdatedDone = (event: any) => {
    if (event.key === "Enter") {
      setEditing(false);
    }
  };

  const completedStyle: React.CSSProperties = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  };

  const viewMode = { display: "" };
  const editMode = { display: "" };
  if (editing) {
    viewMode.display = "none";
  } else {
    editMode.display = "none";
  }

  return (
    <li className={styles.item}>
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={completed}
          onChange={() => handleChangeProps(id)}
        />
        <button type="button" onClick={() => deleteTodoProps(id)}>
          <FaTrash style={{ color: "black", fontSize: "16px" }} />
        </button>
        <span style={completed ? completedStyle : undefined}>{title}</span>
      </div>
      <input
        type="text"
        style={editMode}
        className={styles.textInput}
        value={title}
        onChange={(e) => {
          setUpdate(e.target.value, id);
        }}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
};

export default TodoItem;
