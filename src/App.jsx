import { useState, useEffect } from "react";
import './app.css';
import './buttons.css';
import Create from './components/Create';
import List from './components/List';
import Edit from './components/Edit';
import Delete from './components/Delete';

export default function App() {
  const [koltList, setKoltList] = useState([]);
  const [selectedKolt, setSelectedKolt] = useState(null);
  const [koltToDelete, setKoltToDelete] = useState(null);


  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("koltData")) || [];
    setKoltList(savedData);
  }, []);


  const openEditModal = (kolt) => {
    setSelectedKolt(kolt);
  };


  const closeEditModal = () => {
    setSelectedKolt(null);
  };


  const openDeleteModal = (kolt) => {
    setKoltToDelete(kolt);
  };


  const closeDeleteModal = () => {
    setKoltToDelete(null);
  };


  const handleDelete = () => {
    if (!koltToDelete) return;

    const updatedList = koltList.filter(kolt => kolt.code !== koltToDelete.code);
    setKoltList(updatedList);
    localStorage.setItem("koltData", JSON.stringify(updatedList));

    closeDeleteModal();
  };

  return (
    <div className='app'>
      <div className='app-bin'>
        <div className='create-bin'>
          <Create setKoltList={setKoltList} />
        </div>
        <div className='list-bin'>
          <List koltList={koltList} openEditModal={openEditModal} openDeleteModal={openDeleteModal} />
        </div>
      </div>

      {selectedKolt && (
        <Edit kolt={selectedKolt} setKoltList={setKoltList} closeModal={closeEditModal} />
      )}

      {koltToDelete && (
        <Delete kolt={koltToDelete} handleDelete={handleDelete} closeDeleteModal={closeDeleteModal} />
      )}
    </div>
  );
}
