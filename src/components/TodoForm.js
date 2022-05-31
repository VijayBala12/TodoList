import React, { useState, useEffect, useRef } from 'react';
import { v4 as uuid } from 'uuid';
function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = hc => {
    setInput(hc.target.value);
  };

  const handleSubmit = hs => {
    hs.preventDefault();

    props.onSubmit({
      id: uuid,
      text: input
    });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      {props.edit ? (
        <>
          <input
            placeholder='Mettre à jour'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input edit'
          />
          <button onClick={handleSubmit} className='todo-button edit'>
            Actualiser
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Ajouter une tâche'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='todo-button'>
            Ajouter
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;