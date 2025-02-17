export default function Create() {
    return (
        <div className="create-template">
            <div className="topic"> Suveskite paspirtuko Duomenis</div>
            <div>ID: <span className="field-id">int (nuo 1)</span></div>
            <div>Registration Code: <span className="field-registration">string (8)</span></div>
            <div>Is Busy: <span className="field-busy">int (1)</span></div>
            <div>Last Use Time: <span className="field-use-time">date</span></div>
            <div>Total Ride Kilometres: <span className="field-total-ride">float (2 skaičiai po kablelio)</span></div>
            <div className="status">green</div>
        </div>
    );
}
