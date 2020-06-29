import React, {Component} from 'react';

//바뀌는 값
// class Counter extends Component{
//     //constructor메서드: 컴포넌트에 state설정할 떄 !!
//     constructor(props){

//         //리액트의 component클래스가 지닌 생성자 함수 호출
//         super(props)

//         //state의 초깃값 설정
//         this.state = {
//             number: 0
//         }
//     }
//     render(){
//         const {number} = this.state;
//         return(
//             <>
//                 <h1>{number}</h1>
//                 <button
//                     // onClick: 버튼이 클릭됐을 때 호출할 함수 지정
//                     onClick={()=>{
//                         //this.setState: state에 새로운 값 넣음
//                         this.setState({number: number + 1});
//                     }}   
//                 >
//                     +1
//                 </button>
//             </>
//         )
//     }
// }

// export default Counter;

//Sol#1 state초깃값 설정
// class Counter extends Component{
//     //constructor메서드: 컴포넌트에 state설정할 때 !!
//     constructor(props){

//         //리액트의 component클래스가 지닌 생성자 함수 호출
//         super(props)

//         //state의 초깃값 설정
//         this.state = {
//             number: 0,
//             fixedNumber: 0
//         }
//     }
//     render(){
//         const {number, fixedNumber} = this.state;
//         return(
//             <>
//                 <h1>{number}</h1>
//                 <h2>바뀌지 않는 값:{fixedNumber}</h2>
//                 <button
//                     // onClick: 버튼이 클릭됐을 때 호출할 함수 지정
//                     onClick={()=>{
//                         //this.setState: state에 새로운 값 넣음
//                         this.setState({number: number + 1});
//                     }}   
//                 >
//                     +1
//                 </button>
//             </>
//         )
//     }
// }

// export default Counter;

//Sol#2 state 초깃값 설정
// class Counter extends Component{
//     state = {
//         number: 0,
//         fixedNumber: 0
//     }
//     render(){
//         const {number, fixedNumber} = this.state;
//         return(
//             <>
//                 <h1>{number}</h1>
//                 <h2>바뀌지 않는 값:{fixedNumber}</h2>
//                 <button
//                     // onClick: 버튼이 클릭됐을 때 호출할 함수 지정
//                     onClick={()=>{
//                         //this.setState: state에 새로운 값 넣음
//                         this.setState({number: number + 1});
//                         //한 번 더 넣어도 number는 +1만 됨!! +2 안 됨!!
//                         this.setState({number: this.state.number + 1});
//                     }}   
//                 >
//                     +1
//                 </button>
//             </>
//         )
//     }
// }

// export default Counter;

//Sol#3 this.setState에 객체 대신 함수인자 전달

// class Counter extends Component{
//     state = {
//         number : 0,
//         fixedNumber : 0 
//     }
//     render(){
//         const {number, fixedNumber} = this.state;
//         return(
//             <>
//             <h1>{number}</h1>
//             <h2>바뀌지 않는 값: {fixedNumber}</h2>
//             <button
//                 onClick = {() =>{
//                     //객체 대신 함수인자 전달
//                     this.setState(prevState =>{
//                         return {
//                             number: prevState.number + 1
//                         };
//                     })
//                     //바로 객체 반환 return 없이
//                     this.setState(prevState =>({
//                         number : prevState.number + 1
//                     }));
//                 }}
//             >
//                 +2
//             </button>
//             </>
//         )
//     }
// }

// export default Counter;

//Sol#4 this.setStaterk 끝난 후 특정 작업 실행
class Counter extends Component{
    state = {
        number: 0,
        fixedNumber: 0
    }
    render(){
        const {number, fixedNumber} = this.state;
        return(
            <>
            <h1>{number}</h1>
            <h2>바뀌지 않는 값: {fixedNumber}</h2>
            <button
                //this.setState가 끝난 후 특정 작업 실행
                onClick = {() => {
                   this.setState({
                       number: number + 1
                   },() => {
                       console.log("방금 setState가 호출되었습니다");
                       console.log(this.state);
                   })
                }}
            >
                +1
            </button>
            </>
        )
    }
}

export default Counter;