export default function List() {


    return (
        <div className="list-template">
            <div className="list-header">

                <h2>Kolt list</h2>
                <div className="list-body">

                    <table className="list-group">
                        <thead>
                            <tr className="list-group-item">
                                <th className="id"> ID</th>
                                <th className="code">Code</th>
                                <th className="busy">IsBusy</th>
                                <th className="lastusedate">Last used</th>
                                <th className="totalridekm">Ride km</th>
                                <th className="actions">
                                    <button className="red" >Delete</button>
                                    <button className="blue" >Edit</button>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>

                </div>
            </div>

            <div className="list-footer">

            </div>


        </div>
    );
}