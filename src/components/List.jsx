import Delete from './Delete';

export default function List({ koltList, setKoltList }) {
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
                                        <td>{kolt.busy}</td>
                                        <td>{kolt.lastusedate}</td>
                                        <td>{kolt.totalridekm} km</td>
                                        <td className="actions">
                                            <Delete koltCode={kolt.code} koltList={koltList} setKoltList={setKoltList} />
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
