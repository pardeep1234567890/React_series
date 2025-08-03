// import React, { useReducer } from 'react';

// // Reducer function
// const reducer = (state, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return { count: state.count + 1 };
//     case "DECREMENT":
//       return { count: state.count - 1 };
//     default:
//       return state;
//   }
// };

// function CounterApp() {
//   const [state, dispatch] = useReducer(reducer, { count: 0 });

//   return (
//     <div>
//       <h2>Count: {state.count}</h2>
//       <button onClick={() => dispatch({ type: "INCREMENT" })}>➕</button>
//       <button onClick={() => dispatch({ type: "DECREMENT" })}>➖</button>
//     </div>
//   );
// }

// export default CounterApp;



import React, { useReducer, useState } from 'react';

// Reducer function to manage todos
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Date.now(), text: action.payload, completed: false }];
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
};

function TodoApp() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [input, setInput] = useState('');

  const handleAdd = () => {
    if (input.trim() !== '') {
      dispatch({ type: 'ADD_TODO', payload: input });
      setInput('');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Todo List</h2>
      <input
        type="text"
        placeholder="Enter a task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {todos.map(todo => (
          <li
            key={todo.id}
            style={{ 
              textDecoration: todo.completed ? 'line-through' : 'none',
              cursor: 'pointer'
            }}
            onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}
          >
            {todo.text}
            <button 
              style={{ marginLeft: '10px' }} 
              onClick={(e) => {
                e.stopPropagation(); // prevent toggle on delete
                dispatch({ type: 'DELETE_TODO', payload: todo.id });
              }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
