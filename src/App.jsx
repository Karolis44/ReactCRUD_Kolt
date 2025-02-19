import './app.css';
import './buttons.css';
import { useState, useEffect } from "react";
import Create from './components/Create';
import List from './components/List';

export default function App() {
  const [koltList, setKoltList] = useState([]);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("koltData")) || [];
    setKoltList(savedData);
  }, []);

  return (
    <div className='app'>
      <div className='app-bin'>
        <div className='create-bin'>
          <Create setKoltList={setKoltList} />
        </div>
        <div className='list-bin'>
          <List koltList={koltList} />
        </div>
      </div>      
    </div>
  );
}