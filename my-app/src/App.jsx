import { useState, useEffect } from 'react';
import './App.css'; // Подключение стилей

function App() {
  // Состояние для исходных данных
  const [data, setData] = useState([]);
  
  // Состояние для строки поиска
  const [searchString, setSearchString] = useState('');
  
  // Состояние для фильтрованных данных
  const [filteredData, setFilteredData] = useState([]);

  // Используем useEffect для загрузки данных при первом рендере
  useEffect(() => {
    // Инициализируем данные вручную
    const initialData = [
      { id: 1, name: 'Gone with the Wind' },
      { id: 2, name: 'The day lasts more than a Hundred Years' },
      { id: 3, name: 'The Great Gatsby' },
      { id: 4, name: 'Anna Karenina' },
      { id: 5, name: 'The why Cafe' },
      { id: 6, name: '1989' },
      { id: 7, name: 'The War and Peace' },
      { id: 8, name: 'Sherlock Holmes' },
      { id: 9, name: 'The little women' },
      { id: 10, name: 'The catcher in the rye' }
    ];

    setData(initialData); // Устанавливаем данные
  }, []); // Этот useEffect выполнится только один раз, при монтировании компонента

  // Используем useEffect для фильтрации данных при изменении строки поиска
  useEffect(() => {
    // Фильтруем данные при каждом изменении строки поиска
    const filtered = data.filter(item => 
      item.name.toLowerCase().includes(searchString.toLowerCase())
    );
    setFilteredData(filtered); // Обновляем состояние с фильтрованными данными
  }, [searchString, data]); // Этот useEffect выполнится при изменении searchString или data

  return (
    <div className="App" id="root">
      <h1>Search Books</h1>
      {/* Поле для ввода строки поиска */}
      <input
        type="text"
        value={searchString}
        onChange={(e) => setSearchString(e.target.value)} // Обновляем строку поиска
        placeholder="Search for a book"
      />
      <ul>
        {data.length === 0 ? (
          <p>Loading...</p>
        ) : filteredData.length === 0 ? (
          <p>No books found((</p> // Если нет совпадений
        ) : (
          filteredData.map(item => <li key={item.id}>{item.name}</li>) // Выводим отфильтрованный список
        )}
      </ul>
    </div>
  );
}

export default App;