export default function generateId(koltList = []) {
   
    const deletedItems = JSON.parse(localStorage.getItem("deletedItems")) || [];
    const deletedIds = deletedItems.map(item => item.id);


    const existingIds = koltList.map(kolt => kolt.id);

    const allUsedIds = [...existingIds, ...deletedIds];

    let newId = 1;
    while (allUsedIds.includes(newId)) {
        newId++;
    }

    return newId;
}
