import { useState, useEffect } from "react";
import * as C from './constants';
import generateCode from "../functions/generateCode";
import generateId from "../functions/generateId";



export default function Create({ setKoltList }) {
    
    const [kolt, setKolt] = useState({ ...C.defaultKolt, id: generateId(), code: generateCode() });

   

    useEffect(() => {
        setKolt(prev => ({ ...prev, id: generateId(), code: generateCode(), busy: "No" }));
    }, []);



    const handleKolt = e => {
        let value = e.target.value;

        if (e.target.name === 'totalridekm') {
            value = parseFloat(value).toFixed(2);
        }

        setKolt({ ...kolt, [e.target.name]: value });
    };



    const saveToLocalStorage = () => {
        let existingData = JSON.parse(localStorage.getItem('koltData')) || [];

        const newKolt = { ...kolt, id: generateId(), busy: "Yes" }  
        const updatedData = [...existingData, newKolt];

        localStorage.setItem('koltData', JSON.stringify(updatedData));

        setKoltList(updatedData);
        setKolt({ ...C.defaultKolt, id: generateId(), code: generateCode(), busy: "No" });
    };



    return (
        <div className="create-template">
            <div className="topic">New Kolt</div>
            <div>
                <label className="kolt-id">ID:</label>
                <input type="text" name="id" className="kolt-id-ctrl" readOnly value={kolt.id} />
            </div>
            <div>
                <label className="kolt-code">Code:</label>
                <input type="text" name="code" className="kolt-code-ctrl" value={kolt.code} readOnly />
            </div>
            <div>
                <label className="kolt-busy">IsBusy:</label>
                <input type="text" name="busy" className="kolt-busy-ctrl" readOnly value={kolt.busy} />
            </div>
            <div>
                <label className="kolt-date">Last used:</label>
                <input type="date" name="lastusedate" className="kolt-date-ctrl" onChange={handleKolt} value={kolt.lastusedate} />
            </div>
            <div>
                <label>Ride km: <b className="kolt-totalkm">{kolt.totalridekm}km</b></label>
                <input type="range" name="totalridekm" className="kolt-totalkm-ctrl" min={1} max={5000} step={0.01} onChange={handleKolt} value={kolt.totalridekm} />
            </div>

            <button className="green" onClick={saveToLocalStorage}>Save</button>
        </div>
    );
}
