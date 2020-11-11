import logo from './logo.svg';
import './App.css';
//class component 할 때 필요
import {Component} from 'react'

//1 가장 간단한 형태 My pick!!
//함수형에서는 this.props.함수이름 을 쓸 수 없음!!
//()대신 또는 안에 props넣기
const Body = (props) =>(
  <div>
    <p>
      Body Edit <code>src/App.js</code> and save to reload.
    </p>
    <p>
      {props.text}
    </p>
    <p>
      {props.text2}
    </p>
    <p>
      {props.myFunc(1, 2)}
    </p>
    <p>
      {props.myFunc(1, 2)}
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >{props.text}
    </a>
  </div>
);

//2 
// const Body = () =>{
//   return(
//     <div>
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//     </div>
//   ) 
//  };

//3
//  function Body(){
//     return(
//       <div>
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//       </div>
//     ) 
// };


//함수
// function Header(){
//   return(
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <Body />
//         <h1></h1>
//       </header>
//   );
// }

//클래스
class Header extends Component{
  render(){
    //a+b에 중가로로 묶으면 왜 안 되는 걸까?!
    //1
    // const add = (a, b) => a+b;
    //2
    // const add = (a, b) => (a+b);
    //3
    const add = (a, b) => { return(a+b)};
    return(
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Body 
        text={"i am body"}
        text2={"i am body2"}
        myFunc={add}
        />
        <Body 
        text={"i am body"}
        text2={"i am body2"}
        myFunc={add}
        />
        <h1>{this.props.title}</h1>
        <div>{this.props.myObj.a}</div>
        <div>{this.props.myObj.b}</div>
        <div>{this.props.myArr[0]}</div>
        <div>{this.props.myFunc(10,12)}</div>
        <div>{this.props.myFunc2(10,12)}</div>
        <div>{JSON.stringify(this.props.myObj)}</div>
      </header>
    );
  }
}

// function App(){
//   return (
//     <div className="App">
//       <Header title="Hello from App"/>
//       <Header title="Hello from App2"/>
//     </div>
//   );
// }

class App extends Component{
  //1
  //render밖 함수는 render안에서 this.함수이름으로 쓰기
  // add(a,b){
  //   return a + b;
  // }
  render(){
    //2
    const add = (a,b) => a + b;
    return(
      <div className="App">
        {/* curly bracet넣어야 함 */}
      <Header 
        title="Hello from App" 
        num={5} 
        myArr={[10,2,3]}
        myFunc={add}
        myFunc2={(a,b) => a+b}
        // myFunc={this.add}
        // myFunc2={this.add}
        //이렇게는 안되는데...
        // myFunc2={function ge(a,b){a+b}}
        // myFunc3={}
        myObj={{a: 5, b: 6}} 
        />
      </div>
    );
  }
}

export default App;
