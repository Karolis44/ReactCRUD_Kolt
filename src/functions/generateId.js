
export default function generateId() {
    const existingData = JSON.parse(localStorage.getItem('koltData')) || [];
    return existingData.length > 0 ? existingData.length + 1 : 1; 
}