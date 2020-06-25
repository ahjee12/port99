import React, { Fragment, Component } from 'react';
// import logo from './logo.svg';
import './App.css';

//컨포넌트 내부는 하나의 DOM트리로 이루어져야 함!!
// function App() {
//   const name = '리액트';
//   return (
//     // <Fragment>
//     // <h1>리액트 안녕!</h1>
//     // <h2>리액트 작동!!</h2>
//     // </Fragment>
//     <>
//      <h1>{name} 안녕!</h1>
//      <h2>{name} 작동!!</h2>
//     </>
//   );
// }

//{}안에서 if문 사용
// function App() {
//   const name = '래액트';
//   return (
//     <>
//     {name === '리액트' ? (<h1>리액트입니다.</h1>
//     ):(
//     <h2>리액트가 아닙니다</h2>)} 
//     </>
//   );
// }

//&&연산자 사용 if문
// function App(){
//   const name ='리액트';
//   return(
//     <>
//     {name ==='리액트' && <h1>리액트입니다.</h1>}
//     </>
//   )
// }

//||연산자 사용해서 어떤 값이 undefined일 때 나타날 값 지정
// function App(){
//   const name = undefined;
//   return name || '값이 undefined입니다';
// }

//||연산자 사용해서 어떤 값이 undefined일 때 나타날 값 지정
// function App(){
//   const name = undefined;
//   return <>{name || '리액트입니다'}</>;
// }

//인라인 스타일링
// function App(){
//   const name = '리액트';
//   const style = {
//     backgroundColor: 'black',
//     color: 'aqua',
//     fontSize: '48px',
//     fontWeight: 'bold',
//     padding: 16
//   };

// return <div style ={style}>{name}</div>
// }

//div style객체 미리 선언 안 함
// function App(){
//   const name = '리액트';
//   return(
//     <div style = {{
//       backgroundColor: 'black',
//       color: 'aqua',
//       fontSize: '48px',
//       fontWeight: 'bold',
//       padding: 16
//     }}>
//       {name}
//     </div>
//   )
// }

//import ./App.css 
// function App(){
//   const name = '리액트';
// return <div className = "react">{name}</div>;
// }

//태그 닫아야 함
// function App(){
//   const name = '리액트';
//   return(
//     <>
//     <div className = "react">{name}</div>
//     <input></input>
//     </>
//   )
// }

//self-closing태그 <태그이름/>
// function App(){
//   const name = '리액트';
//   return(
//     <>
//     <div className = "react">{name}</div>
//     <input/>
//     </>
//   )
// }

// function App(){
//   const name = '리액트';
//   return(
//     <>
//      {/*주석은 이렇게 작성합니다!!*/}
//     <div className="react" //시작 태그 여러 줄
//     >
//       {name}
//     </div>
//     <input />
//     </>
//   )
// }

//클래스 컴포넌트
class App extends Component{
  render(){
    const name ='react';
    return <div className="react">{name}</div>;
  }
}

//function()
function BlackDog(){
  this.name = '흰둥이';
  return{
    name: '검둥이',
    bark: function(){
      console.log(this.name + ':멍멍!');
    }
  }
}

const blackDog = new BlackDog();
blackDog.bark();

//화살표 함수
function WhiteDog(){
  this.name = '흰둥이';
  return{
    name: '검둥이',
    bark: () => {
      console.log(this.name + ':멍멍!');
    }
  }
}

const whiteDog = new WhiteDog();
whiteDog.bark();

export default App;

