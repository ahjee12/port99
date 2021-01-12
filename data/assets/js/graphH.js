//data & firebase hook-up
let data = []
db.collection('subjects').onSnapshot(res => {
        res.docChanges().forEach(change => {
            console.log(change)
            const doc = {
                ...change.doc.data(),
                id: change.doc.id
        }
        switch(change.type){
            case 'added': 
                data.push(doc);
                break;

            case 'modified': 
                const index = data.findIndex(item => item.id == doc.id)
                data[index] = doc
                break;

            case 'removed': 
                // 같지않을 때 = true일 때  / false일 때 !
                data = data.filter(item => item.id !== doc.id)
                break;

            default:
                break;
        }
    })
    // update(data)
})
