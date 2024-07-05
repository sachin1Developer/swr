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
      <div className='flex justify-between' >
        <h1 className='text-3xl'>Todo List</h1>

        {loadingData && <p>Loading...</p>}
        {errorData && <p>Error: {errorData.message}</p>}
        {isValidating && <p>Validating...</p>}
        <button onClick={onSubmit} className='bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg' >Fetch Todos</button>
      </div>
      <hr className='m-2' />
      {allData && (
        <ul>
          {allData.map(todo => (
            <li className='' key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;

