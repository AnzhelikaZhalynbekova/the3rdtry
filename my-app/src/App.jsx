import { useState, useEffect } from 'react';
import './App.css'; // Подключение стилей

function App() {
  // Состояние для исходных данных
  const [data, setData] = useState([]);
  
  // Состояние для строки поиска
  const [searchString, setSearchString] = useState('');

  // Используем useEffect для загрузки данных при первом рендере
  useEffect(() => {
    // Инициализируем данные вручную
    const initialData = [
      { id: 1, name: 'Apple' },
      { id: 2, name: 'Banana' },
      { id: 3, name: 'Cherry' },
      { id: 4, name: 'Grape' },
      { id: 5, name: 'Lemon' },
      { id: 6, name: 'Mango' },
      { id: 7, name: 'Orange' },
      { id: 8, name: 'Peach' },
      { id: 9, name: 'Pineapple' },
      { id: 10, name: 'Strawberry' }
    ];

    setData(initialData); // Устанавливаем данные
  }, []); // Этот useEffect выполнится только один раз, при монтировании компонента

  // Фильтрация данных на основе строки поиска
  const filteredData = data.filter(item => 
    item.name.toLowerCase().includes(searchString.toLowerCase())
  );

  return (
    <div className="App" id="root">
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
        ) : filteredData.length === 0 ? (
          <p>No fruits found</p> // Если нет совпадений
        ) : (
          filteredData.map(item => <li key={item.id}>{item.name}</li>) // Выводим отфильтрованный список
        )}
      </ul>
    </div>
  );
}

export default App;
