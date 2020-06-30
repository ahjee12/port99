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
// class EventPractice extends Component{
//     state = {
//         message: ''
//     }
    
//     constructor(props){
//         super(props);
//         //HTML 요소의 이벤트로 등록! (되는 과정에서 이벤트메서드와 this의 관계가 끊어짐!-> bind하는 작업 필요!!)
//         this.handleChange = this.handleChange.bind(this);
//         this.handleClick = this.handleClick.bind(this);
//     }

//     handleChange(e){
//         this.setState({
//             message: e.target.value
//         });
//     }

//     handleClick(){
//         alert(this.state.message);
//         this.setState({
//             message: ''
//         });
//     }

//     render() {
//         return (
//             <div>
//                 <h1>이벤트 연습</h1>
//                 <input
//                     type = "text"
//                     name = "message"
//                     placeholder = "아무거나 입력해 보세요"
//                     value = {this.state.message}
//                     onChange = {this.handleChange}
//                 />
//                 <button onClick = {this.handleClick}>확인</button>
//             </div>
//         )
//     }
// }

// export default EventPractice;
    
//바벨 transform-class-properties
// class EventPractice extends Component{
//     state = {
//         message: ''
//     }

//     //바벨의 trnasform-class-properties 문법 사용 화살표 형태로 메서드 정의
//     handleChange = (e) => {
//         this.setState({
//             message: e.target.value
//         });
//     }

//     handleClick = () => {
//         alert(this.state.message);
//         this.setState({
//             message:''
//         });
//     }

//     render(){
//         return(
//             <div>
//                 <h1>이벤트 연습</h1>
//                 <input 
//                     type = "text"
//                     name = "message"
//                     placeholder = "아무거나 입력해 보세요"
//                     value = {this.state.message}
//                     onChange = {this.handleChange}
//                 />
//                 <button onClick ={this.handleClick}>확인</button>
//             </div>
//         )
//     }
// }

// export default EventPractice;

//input 여러 개
// class EventPractice extends Component{

//     state = {
//         username: '',
//         message: ''
//     }

//     handleChange = (e) =>{
//         this.setState({
    ////☆??
//             [e.target.name]: e.target.value
//         });
//     }
//     handleClick = () =>{
//         alert(this.state.username + ': '+this.state.message);
    ////☆
//         this.setState({
//             username: '',
//             message: ''
//         });
//     }
//     render(){
//         return(
//             <div>
//                 <h1>이벤트 연습</h1>
//                 <input
//                     type = "text"
//                     name = "username"
//                     placeholder = "사용자명"
//                     value = {this.state.username}
//                     onChange = {this.handleChange}
//                 />
//                 <input
//                     type = "text"
//                     name = "message"
//                     placeholder = "아무것나 입력해 보세요"
//                     value = {this.state.message}
//                     onChange = {this.handleChange}
//                 />
//                 <button onClick = {this.handleClick}>확인</button>
//             </div>
//         )
//     }
// }

// export default EventPractice;

//onkeyPress
class EventPractice extends Component{
        state = {
            username: '',
            message: ''
        }

        handleChange = (e) => {
            this.setState({
                [e.target.name]: e.target.value
            });
        }
        
        handleClick = () => {
            alert(this.state.username + ': ' + this.state.message);
            this.setState({
                username: '',
                message: ''
            });
        }

        handleKeyPress = (e) => {
            if(e.key === 'Enter'){
                this.handleClick();
            }
        }

       render(){
           return(
               <div>
                   <h1>이벤트 연습</h1>
                   <input 
                        type = 'text'
                        name = 'username'
                        placeholder = '사용자명'
                        value = {this.state.username}
                        onChange = {this.handleChange}
                   />
                   <input
                        type = 'text'
                        name = 'message'
                        placeholder = '아무거나 입력해 보세요'
                        value = {this.state.message}
                        onChange = {this.handleChange}
                        onKeyPress = {this.handleKeyPress}
                   />
                   <button onClick = {this.handleClick}>확인</button>
                </div>
           )
       }
}

export default EventPractice;