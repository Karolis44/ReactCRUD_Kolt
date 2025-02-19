

export default function List({ koltList }) {
    
  
    return (
        <div className="list-template">
            <div className="list-header">
                <h2>Kolt list</h2>
                <div className="list-body">
                    <table className="list-group">
                        <thead>
                            <tr className="list-group-item">
                                <th className="id">ID</th>
                                <th className="code">Code</th>
                                <th className="busy">Is Busy</th>
                                <th className="lastusedate">Last Used</th>
                                <th className="totalridekm">Ride km</th>
                                <th className="actions">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {koltList.length > 0 ? (
                                koltList.map((kolt, index) => (
                                    <tr key={index}>
                                        <td>{kolt.id}</td>
                                        <td>{kolt.code}</td>
                                        <td>{kolt.busy === "true" ? "Yes" : "No"}</td>
                                        <td>{kolt.lastusedate}</td>
                                        <td>{kolt.totalridekm} km</td>
                                        <td className="actions">
                                            <button className="red">Delete</button>
                                            <button className="blue">Edit</button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" style={{ textAlign: "center", padding: "10px" }}>
                                        No data available
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