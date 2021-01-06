function graph1(){
    const svg = d3.select('.svg1');
    console.log(svg);
    svg.attr('width', 1900)
    .attr('height', 600)
    const width = svg.attr('width');
    const height = svg.attr('height');
    console.log(width);
    console.log(height);
    //render
    const render = data =>{
        const xValue = d => d.number;
        const yValue = d => d.name;
    
        //margin 넣을 때 
        const margin = {top: 20, right: 20, bottom: 20, left: 100}
        const innerWidth = width - margin.left - margin.right;
        const innerHeight = height - margin.top - margin.bottom;
        //상위 width * (자신 / 전체)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
        //숫자일 때
        //data안에서 element d 중 number 중 최대값
        //range: 전체 width, height값 = 범위
        const xScale = d3.scaleLinear()
        .domain([0, d3.max(data, xValue)])
        .range([0, innerWidth])
    
        //문자일 때
        const yScale = d3.scaleBand()
        .domain(data.map(yValue))
        .range([0, innerHeight])
        .padding(0.1)
    
        //세로 
        // const yAxis = d3.axisLeft(yScale);
        // const xAxis = d3.axisLeft(xScale);
    
        const g = svg.append('g')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top +')')
        
        g.append('g').call(d3.axisLeft(yScale));
        g.append('g').call(d3.axisBottom(xScale))
        .attr('transform', 'translate(0,' + innerHeight + ')')
    
    
        console.log(xScale.domain());
        console.log(yScale.domain());
        //data join 1 enter 2 update 3 exit
        g.selectAll('rect').data(data)
           .enter().append('rect')
           // 순서대로 간격을 띄고 싶음 -> name순서 -> 높이 * (자신1*가중치 순서 / 전체)
           .attr('y', d => yScale(yValue(d)))
           // number만큼 넓이로 하고 싶음 -> number수 
           .attr('width', d => xScale(xValue(d)))
           // 같은 넓이로 -> name수 -> bandwidth(): 높이 * (자신1*가중치1 / 전체)
           .attr('height', yScale.bandwidth())
           .attr('fill', 'steelblue')
    }
    
    d3.csv('assets/js/text.csv')
    .then(data =>{
        data.forEach(d =>{
            d.number = +(d.number)*1000;
        })
        console.log(data)
        render(data)
    })
}
graph1();

// console.log(d3.csv('data.csv'));
function graph2(){
    const svg = d3.select('.svg2')
    .attr('width', 400)
    .attr('height', 800)
    console.log(svg);
    const width = svg.attr('width');
    const height = svg.attr('height');
    console.log(width)
    console.log(height)

    //render
    const render = data =>{
        const margin = {top: 20, right: 20, bottom: 20, left: 60}

        const innerWidth = width - margin.left - margin.right;
        const innerHeight = height - margin.top - margin.bottom;

        //naming
        const xScale = d3.scaleBand()
        .domain(data.map(d => d.name))
        .range([0, innerWidth])
        .padding(0.1) //paddingInner paddingOuter

        //number ☆☆☆☆ 세로 막대일 때 range 반대로 ☆☆☆☆
        const yScale = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.number)])
        .range([innerHeight, 0])
        //콘솔로 yScale 확인해 보면 domain에 들어가는 숫자가 range로 나오는 걸 확인할 수 있음

        //grouping
        const g = svg.append('g')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')   

        //axis에 범위 넣어야 해서 xScale, yScale 넣음
        const yAxis = g.append('g').call(d3.axisLeft(yScale).tickFormat(d => d + '명'))
        

        const xAxis = g.append('g').call(d3.axisBottom(xScale))
        .attr('transform', 'translate(0,' + innerHeight + ')')
        .selectAll('text')
        .attr('transform', 'rotate(-40)')
        .attr('text-anchor', 'end')
        
       
   
        const rect = g.selectAll('rect')
            .data(data)
            .enter()
            .append('rect')
            .attr('x', d => xScale(d.name))
            //☆☆☆☆ 세로 막대일 때 y는 innerHeight- 가 아니라 yScale(d.number) 자체임! 이유: yScale range를 반대로 해서 이미 값이 반대로(1-자기자신)됨  ☆☆☆☆
            .attr('y', d =>  yScale(d.number))
            .attr('width', xScale.bandwidth())
            //☆☆☆☆ 세로 막대일 때 height는 yScale(0) - yScale(d.number) ☆☆☆☆
            .attr('height', d => yScale(0) -yScale(d.number))
            .attr('fill', 'steelblue')
             

 }
    //source 가져온 다음 then data 꺼내서 
    d3.csv('assets/js/text.csv')
      .then(data => {
        console.log(data);
        data.forEach(d => {
            d.number = parseFloat(d.number)*1000
       })
       console.log(data);
       render(data)
    })
}
graph2()

function graph3(){
    const svg = d3.select('.svg3')
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
    .attr('transform', `translate(${margin.left},${margin.top})`)  
    
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
                    // .ticks(3)
                    .tickFormat(d => d + '명')

    // xAxisG.selectAll('text')
    //       .attr('transform', 'rotate(-40)')
    //       .attr('text-anchor', 'end')             
      
    
    const update = (data) =>{

        //1. update scales(domains) if they rely on our data
        xScale.domain(data.map(d => d.name))
        yScale.domain([0, d3.max(data, d => d.orders)])

        //2. join updated data to elements
        const rect = g.selectAll('rect')
                      .data(data)

        //3. remove exit selection 일단 아직 dom에 있는 게 없어서 지워도 됨 
        rect.exit().remove();

        //4. update current shapes in DOM 첫 번째 update fuc일 땐 지나침
        rect.attr('width', xScale.bandwidth())
            .attr('height', d => yScale(0) -yScale(d.orders))
            .attr('x', d => xScale(d.name))
            .attr('y', d =>  yScale(d.orders))
            .attr('fill', 'steelblue') 

        //5. append the enter selection to the DOM 첫 번째 update fuc일 때 쓰이고 더 추가하는 rect없으면 empty
         rect.enter()
             .append('rect')
             .attr('width', xScale.bandwidth())
             .attr('height', d => yScale(0) - yScale(d.orders))
             .attr('x', d => xScale(d.name))
             .attr('y', d =>  yScale(d.orders))
             .attr('fill', 'steelblue') 
        
        //6. call axis rect은 append를 한 후에, axis는 append를 한 후에 attr 조절하기!!!
        xAxisG.call(xAxis)
              .selectAll('text')
              .attr('transform', 'rotate(-40)')
              .attr('text-anchor', 'end')          
        yAxisG.call(yAxis)
    }
    
    //source 가져온 다음 then data 꺼내서 
    db.collection('dishes')
      .get()
      .then(res => {
            console.log(res); 
            let data = [];
            res.docs.forEach(doc => {
                console.log(doc.data())
                data.push(doc.data());
        })

        update(data)

        d3.interval(() => {
            // data[0].orders += 50;
            data.pop()
            // update(data)

        }, 1000)
        console.log(data)
    })
}
graph3()

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
      
    const t = d3.transition().duration(1000)

    const update = (data) =>{

        //1. update scales(domains) if they rely on our data
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
            .attr('y', d => yScale(d.orders))
            // .transition(t)
            // .attr('height', d => yScale(0) - yScale(d.orders))
            // .attr('fill', 'steelblue') 

        //5. append the enter selection to the DOM ☆첫 번째 update fuc일 때 쓰이고 더 추가하는 rect없으면 empty
         rect.enter()
             .append('rect')
             // .attr('width', xScale.bandwidth())
             .attr('width', 0)
             //transition
             .attr('height', 0)
             .attr('x', d => xScale(d.name))
             //transition yScale = innerHeight 맨 아래부터 시작! ☆처음 enter했을 때만 starting point설정! 
             // .attr('y', d => yScale(d.orders))
             .attr('y',  innerHeight)
             .attr('fill', 'steelblue') 
             //처음 enter할 때 merge하면 그 뒤에 설정들은 다음 rect만들 때 자동 설정됨!
             .merge(rect)
             .transition(t)
             // .attr('width', xScale.bandwidth())
             .attrTween('width', widthTween)
             .attr('y', d =>  yScale(d.orders))
             .attr('height', d => innerHeight - yScale(d.orders))
        
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
    db.collection('dishes').onSnapshot(res => {
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
}
graph4()

