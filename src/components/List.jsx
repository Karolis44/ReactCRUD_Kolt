import { useState, useEffect } from "react";

export default function List({ koltList, openEditModal, openDeleteModal }) {
    const [sortedList, setSortedList] = useState([...koltList]);
    const [totalKm, setTotalKm] = useState(0);

    
    useEffect(() => {
        setSortedList([...koltList]); 
        setTotalKm(koltList.reduce((acc, kolt) => acc + parseFloat(kolt.totalridekm || 0), 0)); 
    }, [koltList]);

   
    const sortByKm = () => {
        setSortedList(koltList.toSorted((a, b) => parseFloat(b.totalridekm) - parseFloat(a.totalridekm)));
    };

    
    const sortByDate = () => {
        setSortedList(koltList.toSorted((a, b) => new Date(b.lastusedate) - new Date(a.lastusedate)));
    };

    return (
        <div className="list-template">
            <div className="list-header">
                <h2>Kolt List</h2>

               
                <div className="stats">
                    <p><strong>Total scooters:</strong> {koltList.length}</p>
                    <p><strong>Total km:</strong> {totalKm.toFixed(2)} </p>
                </div>

               
                <div className="list-body">
                    <table className="list-group">
                        <thead>
                            <tr className="list-group-item">
                                <th>ID</th>
                                <th>Code</th>
                                <th>Is Busy</th>
                                <th>Last Used</th>
                                <th>Ride km</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sortedList.length > 0 ? (
                                sortedList.map((kolt) => (
                                    <tr key={kolt.code}>
                                        <td>{kolt.id}</td>
                                        <td>{kolt.code}</td>
                                        <td>{kolt.busy === "Busy" ? "Busy" : "Free"}</td>
                                        <td>{kolt.lastusedate}</td>
                                        <td>{kolt.totalridekm} km</td>
                                        <td className="actions">
                                            <button className="red" onClick={() => openDeleteModal(kolt.code)}>Delete</button>
                                            <button className="blue" onClick={() => openEditModal(kolt)}>Edit</button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="no-data">No data available</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                <div className="sorting-buttons">
                    <button className="blue" onClick={sortByKm}>Sort by km</button>
                    <button className="blue" onClick={sortByDate}>Sort by date</button>
                </div>
            </div>
        </div>
    );
}
