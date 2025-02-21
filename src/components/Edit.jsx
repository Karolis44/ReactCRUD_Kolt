import { useState } from "react";

export default function Edit({ kolt, setKoltList, closeModal }) {

    const [updatedKolt, setUpdatedKolt] = useState({
        code: kolt.code,
        newDate: "",
        dailyRide: 0,
        busy: kolt.busy === "Yes" 
    });

    const handleChange = (e) => {
        setUpdatedKolt({ ...updatedKolt, [e.target.name]: e.target.value });
    };

    const handleCheckbox = () => {
        setUpdatedKolt(prevState => ({ ...prevState, busy: !prevState.busy }));
    };

    const handleSave = (e) => {
        e.preventDefault();
        let updatedList = JSON.parse(localStorage.getItem("koltData")) || [];

        updatedList = updatedList.map(item =>
            item.code === kolt.code
                ? {
                    ...item,
                    lastusedate: updatedKolt.newDate || item.lastusedate,
                    totalridekm: (parseFloat(item.totalridekm) + parseFloat(updatedKolt.dailyRide || 0)).toFixed(2),
                    busy: updatedKolt.busy ? "Yes" : "No" 
                }
                : item
        );

        localStorage.setItem("koltData", JSON.stringify(updatedList));
        setKoltList(updatedList);
        closeModal();
    };

    const handleOverlayClick = (e) => {
        if (e.target.classList.contains("modal-overlay")) {
            closeModal();
        }
    };

    return (
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className="modal modal-large">
                <h2>Edit data</h2>
                <form onSubmit={handleSave} className="modal-form">
                    <div className="modal-field">
                        <label>Registration code:</label>
                        <input type="text" value={updatedKolt.code} readOnly />
                    </div>
                    <div className="modal-field">
                        <label>Last Used:</label>
                        <input type="text" value={kolt.lastusedate} readOnly />
                    </div>
                    <div className="modal-field">
                        <label>New date:</label>
                        <input type="date" name="newDate" onChange={handleChange} />
                    </div>
                    <div className="modal-field">
                        <label>Totall ride km:</label>
                        <b>{kolt.totalridekm} km</b>
                    </div>
                    <div className="modal-field range-container">
                        <label>This day ride km:</label>
                        <input type="range" name="dailyRide" min="0" max="5000" step="0.01" value={updatedKolt.dailyRide} onChange={handleChange} />
                        <b>{updatedKolt.dailyRide} km</b>
                    </div>
                    <div className="modal-field checkbox-container">
                        <label>Is Busy:</label>
                        <input
                            type="checkbox"
                            checked={updatedKolt.busy}
                            onChange={handleCheckbox}
                        />
                        <span className={`busy-label ${updatedKolt.busy ? "busy" : "free"}`}>
                            {updatedKolt.busy ? "Busy" : "Free"}
                        </span>
                    </div>
                    <div className="modal-buttons">
                        <button type="submit" className="green">Save</button>
                        <button type="button" className="red" onClick={closeModal}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
