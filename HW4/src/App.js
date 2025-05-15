/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
import React, { useState, useEffect } from 'react';
import MyTable from './Mytable'; // 假設上面的 DataGrid 元件儲存在 MyTable.js

function App() {
  const [title, setTitle] = useState('posts');
  const [rows, setRows] = useState([]);

  const changeTitle = (newTitle) => setTitle(newTitle);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${title}`)
      .then((res) => res.json())
      .then((json) => {
        const processed = json.map((item, index) => ({
          id: item.id || index + 1,
          title: item.title || item.name || 'N/A',
        }));
        setRows(processed);
      });
  }, [title]);

  return (
    <div>
      <div>
        <button onClick={() => changeTitle('posts')}>Posts</button>
        <button onClick={() => changeTitle('users')}>Users</button>
        <button onClick={() => changeTitle('comments')}>Comments</button>
      </div>
      <h1>{title.toUpperCase()}</h1>
      <MyTable rows={rows} />
    </div>
  );
}

export default App;