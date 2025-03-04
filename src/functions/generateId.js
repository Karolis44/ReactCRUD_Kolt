

export default function generateId(koltList = []) {
    if (!koltList.length) return 1;
    
    const maxId = Math.max(...koltList.map(kolt => kolt.id), 0);
    return maxId + 1;
}



// export default function generateId(koltList = []) {
//     if (!koltList.length) return 1;

//     const existingIds = koltList.map(kolt => kolt.id).sort((a, b) => a - b);

//     for (let i = 0; i < existingIds.length; i++) {
//         if (existingIds[i] !== i + 1) {
//             return i + 1; 
//         }
//     }

//     return existingIds.length + 1;
// }

