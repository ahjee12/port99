import React from 'react';
import MyComponent from './MyComponent';

// const App = ()=>{
//   return <MyComponent />
// };
// export default App;

//모듈 불러오기
// const App = () =>{
//   return <MyComponent />
// };
// export default App;


// prop값 지정
// const App = () =>{
//   return <MyComponent name="react"/>
// }

// export default App; 

//children값 지정
// const App = () =>{
//   return <MyComponent>리액트</MyComponent>
// } 

// export default App;

//prop내부 값 추출
// const App = () =>{
//     return <MyComponent name={"react"}>리액트</MyComponent>;
// }

// export default App;

//propType설정
// const App = () =>{
//     return <MyComponent name={3}>리액트</MyComponent>;
// }

// export default App;

//isRequired사용 propTypes설정
const App = () =>{
    return (
        <MyComponent name={"react"} favoriteNumber={1}>
            리액트
        </MyComponent>);
}

export default App;












