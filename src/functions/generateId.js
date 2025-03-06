export default function generateId(koltList = []) {
  
    const lastCreatedKoltId = parseInt(localStorage.getItem('lastCreatedKoltId')) || 0;

    let newId = lastCreatedKoltId + 1;

    const existingIds = koltList.map(kolt => kolt.id);

    while (existingIds.includes(newId)) {
        newId++;
    }

    return newId;
}
