import React, {Component} from 'react';

// class EventPractice extends Component{
//     render(){
//         return(
//             <div>
//             <h1>이벤트 연습</h1>
//             <input
//                 type = "text"
//                 name = "message"
//                 placeholder = "아무거나 입력해 보세요"
//                 onChange = {
//                     //e객체는 syntheticevent로 웹 브라우저 네이티브 이벤트를 감싸는 객체임
//                     (e) => {
//                         //값이 바뀔 때마다 콘솔에 기록
//                         console.log(e.target.value);
//                     }
//                 }
//             />
//         </div>
//         )
//     }
// }

// export default EventPractice;

//state에 input담기
// class EventPractice extends Component{
//     state = {message: ''}
//     render(){
//         return(
//             <div>
//                 <h1>이벤트 연습</h1>
//                 <input
//                     type = "text"
//                     name = "message"
//                     placeholder = "아무거나 입력해 보세요"
//                     value = {this.state.message}
//                     onChange = {
//                         (e) => {
//                             this.setState({
//                                 message: e.target.value
//                             })
//                         }
//                     }
//                 />
//             </div>
//         )
//     }
// }

// export default EventPractice;

//버튼 누를 때 message를 공백으로 설정
// class EventPractice extends Component{
//         state = {message: ''}
//         render(){
//             return(
//                 <div>
//                     <h1>이벤트 연습</h1>
//                     <input
//                         type = "text"
//                         name = "message"
//                         placeholder = "아무거나 입력해 보세요"
//                         value = {this.state.message}
//                         onChange = {
//                             (e) => {
//                                 this.setState({
//                                     message: e.target.value
//                                 })
//                             }
//                         }
//                     />
//                     <button onClick={()=>{
//                         alert(this.state.message);
//                         this.setState({
//                             message: ''
//                         });
//                     }}>
//                         확인
//                     </button>
//                 </div>
//             )
//         }
//     }
    
//     export default EventPractice;

//임의 메서드 만들기 input의 onChange, button의 onClick
    
