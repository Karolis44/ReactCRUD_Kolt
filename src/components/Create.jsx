import { useState, useEffect } from "react";
import * as C from './constants';
import generateCode from "../functions/generateCode";
import generateId from "../functions/generateId";

export default function Create({ setKoltList, koltList }) {
    const [kolt, setKolt] = useState({
        ...C.defaultKolt,
        id: generateId(koltList),
        code: generateCode(),
        busy: "Free"
    });

    useEffect(() => {
        setKolt({
            ...C.defaultKolt,
            id: generateId(koltList),
            code: generateCode(),
            busy: "Free"
        });
    }, [koltList]);

    const handleKolt = e => {
        let { name, value } = e.target;

        if (name === 'lastusedate') {
            const selectedDate = new Date(value);
            const minDate = new Date("2025-01-01");

            if (selectedDate < minDate) {
                return;
            }
        }

        if (name === 'totalridekm') {
            value = parseFloat(value).toFixed(2);
        }

        setKolt(prev => ({ ...prev, [name]: value }));
    };

    const saveToLocalStorage = () => {
        if (!kolt.lastusedate) return;

        let existingData = JSON.parse(localStorage.getItem('koltData')) || [];
        const newKolt = { ...kolt, id: generateId(existingData), busy: "Busy" };
        const updatedData = [...existingData, newKolt];

        localStorage.setItem('koltData', JSON.stringify(updatedData));

        localStorage.setItem('lastCreatedKoltId', newKolt.id);

        setKoltList(updatedData);
    };

    return (
        <div className="create-template">
            <div className="topic">New Kolt</div>
            <div>
                <label className="kolt-id">ID:</label>
                <input type="text" name="id" className="kolt-ctrl" readOnly value={kolt.id} />
            </div>
            <div>
                <label className="kolt-code">Code:</label>
                <input type="text" name="code" className="kolt-ctrl" value={kolt.code} readOnly />
            </div>
            <div>
                <label className="kolt-busy">Is Busy:</label>
                <input type="text" name="busy" className="kolt-ctrl" readOnly value={kolt.busy} />
            </div>
            <div>
                <label className="kolt-date">Last used:</label>
                <input type="date" name="lastusedate" className="kolt-date-ctrl" onChange={handleKolt} value={kolt.lastusedate} min="2025-01-01" required />
            </div>
            <div>
                <label>Ride km: <b className="kolt-totalkm">{kolt.totalridekm}km</b></label>
                <input type="range" name="totalridekm" className="kolt-totalkm-ctrl" min={1} max={5000} step={0.01} onChange={handleKolt} value={kolt.totalridekm} />
            </div>

            <button className="green" onClick={saveToLocalStorage}>Save</button>
        </div>
    );
}
