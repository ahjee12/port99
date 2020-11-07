import logo from './logo.svg';
import './App.css';
//class component 할 때 필요
import {Component} from 'react'

//1 가장 간단한 형태 My pick!!
const Body = () =>(
  <div>
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
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
    return(
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Body />
        <h1>{this.props.title}</h1>
        <div>{this.props.myObj.a}</div>
        <div>{this.props.myObj.b}</div>
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
  render(){
    return(
      <div className="App">
        {/* curly bracet넣어야 함 */}
      <Header title="Hello from App" num={5} myObj={{
        a: 5,
        b: 6
      }} />
      </div>
    );
  }
}

export default App;
