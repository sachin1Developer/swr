// App.js
import React from 'react';
import './App.css';
import useApi from './useApi';

function App() {
  const { data: allData, isLoading: loadingData, error: errorData, isValidating, mutate } = useApi({
    url: 'https://jsonplaceholder.typicode.com/todos/',
    options: {
      revalidateOnMount: false,
       // Prevent automatic fetch on mount
    }
  });

  const onSubmit = () => {
    mutate();
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <button onClick={onSubmit}>Fetch Todos</button>
      {loadingData && <p>Loading...</p>}
      {errorData && <p>Error: {errorData.message}</p>}
      {isValidating && <p>Validating...</p>}
      {allData && (
        <ul>
          {allData.map(todo => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;

