
export default function List({ koltList, openEditModal, openDeleteModal }) {

    return (
        <div className="list-template">
            <div className="list-header">
                <h2>Kolt list</h2>
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
                            {koltList.length > 0 ? (
                                koltList.map((kolt) => (
                                    <tr key={kolt.code}> 
                                        <td>{kolt.id}</td>
                                        <td>{kolt.code}</td>
                                        <td>{kolt.busy === "Yes" ? "Yes" : "No"}</td>
                                        <td>{kolt.lastusedate}</td>
                                        <td>{kolt.totalridekm} km</td>
                                        <td className="actions">
                                            <button className="red" onClick={() => openDeleteModal(kolt)}>Delete</button>
                                            <button className="blue" onClick={() => openEditModal(kolt)}>Edit</button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                <td colSpan="6" className="no-data">
                                    No data available at this time
                                </td>
                            </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
