import { useState, useEffect } from "react";
import * as C from './constants';
import generateCode from "../functions/generateCode";
import generateId from "../functions/generateId";

export default function Create({ setKoltList }) {
    const [kolt, setKolt] = useState({ ...C.defaultKolt, id: generateId(), code: generateCode(), busy: "Free" });

    useEffect(() => {
        setKolt(prev => ({ ...prev, id: generateId(), code: generateCode(), busy: "Free" }));
    }, []);

    const handleKolt = e => {
        let { name, value } = e.target;

        if (name === 'lastusedate') {
            const selectedDate = new Date(value);
            const minDate = new Date("2025-01-01");

            if (selectedDate < minDate) {
                alert("Date cannot be earlier than January 1, 2025!");
                return;
            }
        }

        if (name === 'totalridekm') {
            value = parseFloat(value).toFixed(2);
        }

        setKolt({ ...kolt, [name]: value });
    };

    const saveToLocalStorage = () => {
        if (!kolt.lastusedate) {
            alert("You must select a last used date!");
            return;
        }

        let existingData = JSON.parse(localStorage.getItem('koltData')) || [];
        const newKolt = { ...kolt, id: generateId(), busy: "Busy" };
        const updatedData = [...existingData, newKolt];

        localStorage.setItem('koltData', JSON.stringify(updatedData));
        setKoltList(updatedData);
        setKolt({ ...C.defaultKolt, id: generateId(), code: generateCode(), busy: "Free" });
    };

    return (
        <div className="create-template">
            <div className="topic">New Kolt</div>
            <div>
                <label className="kolt-id">ID:</label>
                <input type="text" name="id"  className="kolt-ctrl" readOnly value={kolt.id} />
            </div>
            <div>
                <label className="kolt-code">Code:</label>
                <input type="text" name="code" className="kolt-ctrl" value={kolt.code} readOnly />
            </div>
            <div>
                <label className="kolt-busy">IsBusy:</label>
                <input type="text" name="busy" className="kolt-ctrl" readOnly value={kolt.busy} />
            </div>
            <div>
                <label className="kolt-date">Last used:</label>
                <input  type="date" name="lastusedate" className="kolt-date-ctrl" onChange={handleKolt} value={kolt.lastusedate} min="2025-01-01" required/>
            </div>
            <div>
                <label>Ride km: <b className="kolt-totalkm">{kolt.totalridekm}km</b></label>
                <input type="range" name="totalridekm" className="kolt-totalkm-ctrl" min={1} max={5000} step={0.01} onChange={handleKolt} value={kolt.totalridekm} />
            </div>

            <button className="green" onClick={saveToLocalStorage}>Save</button>
        </div>
    );
}
