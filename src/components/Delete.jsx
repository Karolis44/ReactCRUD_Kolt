
export default function Delete({ kolt, handleDelete, closeDeleteModal }) {

    return (
        <div className="modal-overlay">
            <div className="modal">
                <div className="modal-content">
                    <p>Are you sure you want to delete this data?</p>
                    <p><b>{kolt.code}</b></p>
                    <div className="modal-buttons">
                        <button className="red" onClick={handleDelete}>Yes</button>
                        <button className="yellow" onClick={closeDeleteModal}>No</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
