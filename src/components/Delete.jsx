import { useState, useEffect } from "react";

export default function Delete({ koltCode, koltList, setKoltList }) {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (showModal) {
            document.body.classList.add("modal-open");
        } else {
            document.body.classList.remove("modal-open");
        }

        return () => document.body.classList.remove("modal-open");
    }, [showModal]);

    const handleDelete = () => {
        const updatedList = koltList
            .filter(kolt => kolt.code !== koltCode) 
            .map((kolt, index) => ({ ...kolt, id: index + 1 }));

        setKoltList(updatedList);
        localStorage.setItem("koltData", JSON.stringify(updatedList));

        setShowModal(false); 
    };

    return (
        <>
            <button className="red" onClick={() => setShowModal(true)}>Delete</button>

            {showModal && (
                <div className="modal-overlay">
                    <div className="modal">
                        <div className="modal-content">
                            <p>Ar tikrai norite ištrinti šį įrašą?</p>
                            <div className="modal-buttons">
                                <button className="red" onClick={handleDelete}>Taip</button>
                                <button className="yellow" onClick={() => setShowModal(false)}>Ne</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
