import React, { useState } from 'react';
import styles from './AddTodo.style';

export default function AddTodo({ addTodo }) {
  let [task, setTodo] = useState('');

  return (
    <div>
      <input
        style={styles.inputField}
        placeholder='Enter Todo'
        value={task}
        onChange={(event) => {
          setTodo(event.target.value);
        }}
      />
      <button
        style={styles.submitBtn}
        onClick={() => {
          addTodo(task);
          setTodo('');
        }}
      >
        Add
      </button>
    </div>
  );
}
