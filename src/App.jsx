import { useState, useEffect } from "react";
import './app2.css';
import './buttons.css';
import Create from './components/Create';
import List from './components/List';
import Edit from './components/Edit';
import Delete from './components/Delete';

export default function App() {
  const [koltList, setKoltList] = useState([]);
  const [selectedKolt, setSelectedKolt] = useState(null);
  const [deleteKolt, setDeleteKolt] = useState(null);


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


  const openDeleteModal = (koltCode) => {
    setDeleteKolt(koltCode);
  };


  const closeDeleteModal = () => {
    setDeleteKolt(null);
  };


  const handleDelete = () => {
    if (deleteKolt) {

      const updatedList = koltList.filter(kolt => kolt.code !== deleteKolt);
      localStorage.setItem("koltData", JSON.stringify(updatedList));
      const deletedItems = JSON.parse(localStorage.getItem("deletedItems")) || [];
      const deletedItem = koltList.find(kolt => kolt.code === deleteKolt);
      if (deletedItem) {
        deletedItems.push({
          id: deletedItem.id,
          code: deletedItem.code,
        });
        localStorage.setItem("deletedItems", JSON.stringify(deletedItems));
      }

      setKoltList(updatedList);

      setDeleteKolt(null);
    }
  };





  return (
    <div className='app'>
      <div className='app-bin'>
        <div className='create-bin'>
          <Create setKoltList={setKoltList} koltList={koltList} />
        </div>
        <div className='list-bin'>
          <List
            koltList={koltList} openEditModal={openEditModal} openDeleteModal={openDeleteModal}
          />
        </div>
      </div>

      {selectedKolt && (
        <Edit kolt={selectedKolt} setKoltList={setKoltList} closeModal={closeEditModal} />
      )}

      {deleteKolt && (
        <Delete handleDelete={handleDelete} closeDeleteModal={closeDeleteModal} />
      )}
    </div>
  );
}