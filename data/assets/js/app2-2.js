function graph4(){
    const svg = d3.select('.svg4')
    .attr('width', 400)
    .attr('height', 900)
    console.log(svg);
    const width = svg.attr('width');
    const height = svg.attr('height');
    console.log(width)
    console.log(height)

    const margin = {top: 20, right: 20, bottom: 70, left: 60}
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    //group
    const g = svg.append('g')
    .attr('transform', `translate(${margin.left}, ${margin.top})`)  
    
    //scale
    const xScale = d3.scaleBand()
                     .range([0, innerWidth])
                     .padding(0.1)

    const yScale = d3.scaleLinear()
                     .range([innerHeight, 0])

    //groups
    const xAxisG = g.append('g')
    .attr('transform', 'translate(0,' + innerHeight + ')')
    
    const yAxisG = g.append('g')

    const xAxis = d3.axisBottom(xScale)      

    const yAxis = d3.axisLeft(yScale)
                    // .ticks(0, 1200, 10)
                    .tickFormat(d => d + '명')

    // xAxisG.selectAll('text')
    //       .attr('transform', 'rotate(-40)')
    //       .attr('text-anchor', 'end')             
      
    const t = d3.transition().duration(2000)

    const update = (data) =>{

        //1. update scales(domains) if they rely on our data -> 나열되어 있는 text값에 range범위를 나눠 순서대로 number값을 줌
        // range범위 최대 / domain에 들어가는 text 총 개수 * 가중치(순서)
        // 애초에 scaleOrdinal([#1,#2,#3])이고 text도 총 수도 3개면 range는 없어도 됨
        xScale.domain(data.map(d => d.name))
        yScale.domain([0, d3.max(data, d => d.orders)])

        //2. join updated data to elements
        const rect = g.selectAll('rect')
                      .data(data)

        //3. remove exit selection 일단 아직 dom에 있는 게 없어서 지워도 됨 
        rect.exit().remove();

        //4. update current shapes in DOM 첫 번째 update fuc일 땐 지나침
        rect.attr('width', xScale.bandwidth())
            .attr('x', d => xScale(d.name))
            // .transition(t)
            // .attr('y', d => yScale(d.orders))
            // .attr('height', d => innerHeight - yScale(d.orders))
            // .attr('fill', 'steelblue') 



        //5. append the enter selection to the DOM ☆첫 번째 update fuc일 때 쓰이고 더 추가하는 rect없으면 empty
         rect.enter()
             .append('rect')
            //.attr('width', xScale.bandwidth())
             .attr('width', 0)
             //transition
             .attr('height', 0)
             .attr('x', d => xScale(d.name))
            //transition yScale = innerHeight 맨 아래부터 시작! ☆처음 enter했을 때만 starting point설정! 
            //.attr('y', d => yScale(d.orders))
             .attr('y',  yScale(0))
             //처음 enter할 때 merge하면 그 뒤에 설정들은 다음 rect만들 때 자동 설정됨!
             .merge(rect)
             .transition(t)
             .attr('width', xScale.bandwidth())
            //.attrTween('width', widthTween)
             .attr('y', d => yScale(d.orders))
             .attr('height', d => yScale(0) - yScale(d.orders))
             .attr('fill', 'steelblue') 

        
        //6. call axis rect은 append를 한 후에, axis는 append를 한 후에 attr 조절하기!!!
        xAxisG.call(xAxis)
              .selectAll('text')
              .attr('transform', 'rotate(-40)')
              .attr('text-anchor', 'end')          
        yAxisG.call(yAxis)

    }
    
    const widthTween = d =>{
        let i = d3.interpolate(0, xScale.bandwidth())
        
        return (t) => {
            return i(t)
        }
    }

    //☆☆☆realTime update☆☆☆
    let data = [];

   //firebase에서 document change할 때 
    db.collection('dishes')
      .onSnapshot(res => {
        console.log(res.docChanges())
        //어떤 doc을 change했는지 돌림
        res.docChanges().forEach(change => {

            console.log(change)
            //doc data를 직접 만들어야 함(firebase에서는 data를 add, modify, remove한 것만 기록한다고 치자) -> data에 넣기 -> update에 보내기
            //바뀐 데이터 1개에 대한 정보
            const doc = {
                ...change.doc.data(),
                //id는 따로 넣어야 함
                id: change.doc.id
            }
            console.log(doc);
            switch(change.type){
                case 'added': 
                    data.push(doc);
                    break;

                case 'modified': 
                    const index = data.findIndex(item => item.id == doc.id)
                    data[index] = doc
                    break;

                case 'remove':
                    // 같지않을 때 = true일 때  / false일 때 !
                    data = data.filter(item => item.id !== doc.id)
                    break;

                default:
                    break;
            }

        })

        update(data)

    })
}
graph4()