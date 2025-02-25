export default function Delete({ handleDelete, closeDeleteModal }) {
    return (
        <div className="modal-overlay">
            <div className="modal">
                <div className="modal-content">
                    <p>Do you really want to delete this data?</p>
                    <div className="modal-buttons">
                        <button className="red" onClick={handleDelete}>Taip</button>
                        <button className="yellow" onClick={closeDeleteModal}>Ne</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
