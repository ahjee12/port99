const dims = { height: 500, width: 1100 } 

const svg = d3.select('.container .canvas')
              .append('svg')
              .attr('width', dims.width + 100)
              .attr('height', dims.height + 100)

console.log(svg)

const graph = svg.append('g')
                 .attr('transform', 'translate(50, 50)')

//data strat
const stratify = d3.stratify()
                    .id(d => d.name)
                    .parentId(d => d.parent);

// console.log(stratify)

const tree = d3.tree()
                .size([dims.width, dims.height])
                
//update function
const update = (data) => {
    console.log(data)

    //get updated foot Node
    const rootNode = stratify(data)
    console.log(rootNode)

    const treeData = tree(rootNode)
    console.log(treeData)


}


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
    update(data)
})


