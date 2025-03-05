export default function Delete({ handleDelete, closeDeleteModal }) {
    return (
        <div className="modal-overlay">
            <div className="modal">
                <div className="modal-content">
                    <p>Do you really want to delete this data?</p>
                    <div className="modal-buttons">
                        <button className="red" onClick={handleDelete}>Yes</button>
                        <button className="yellow" onClick={closeDeleteModal}>No</button>
                    </div>
                </div>
            </div>
        </div>
    );
}