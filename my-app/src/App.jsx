import { useState } from 'react';

function App() {
  // Состояние для исходных данных
  const [data, setData] = useState([]);
  
  // Состояние для строки поиска
  const [searchString, setSearchString] = useState('');

  return (
    <div className="App">
      <h1>Search Fruits</h1>
      {/* Поле для ввода строки поиска */}
      <input
        type="text"
        value={searchString}
        onChange={(e) => setSearchString(e.target.value)} // Обновляем строку поиска
        placeholder="Search for a fruit"
      />
      <ul>
        {data.length === 0 ? (
          <p>Loading...</p>
        ) : (
          <p>Data loaded!</p>
        )}
      </ul>
    </div>
  );
}

export default App;
