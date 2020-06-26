import React, { Component } from 'react';
import PropTypes from 'prop-types';

// const MyComponent = props => {
// return(
//     <div>
//     안녕하세요, 제 이름은 {props.name}입니다<br/>
//     children 값은 {props.children}
//     </div>
//     );
// };

// props 기본값 설정!
// MyComponent.defaultProps = {
//     name: '기본 이름'
// };

// export default MyComponent;

//props 내부 값 추출!
// const MyComponent = props => {
//     const {name, children} = props;
//     return(
//       <>
//         안녕하세요, 제 이름은 {name}입니다.<br />
//         children 값은 {children}입니다.
//       </>
//     )
//   }

//   MyComponent.defaultProps = {
//     name: '기본이름',
//     children: '기본 칠드런이름'
//   }

//   export default MyComponent;

//props 내부 값 추출!
// const MyComponent = ({name,children}) =>{
//   return (
//     <>
//       안녕하세요, 제 이름은  {name} 입니다. <br />
//       children 값은 {children} 입니다.
//     </>
//   )
// }

// MyComponent.defaultProps = {
//   name: '기본 이름',
//   children: '기본 칠드런이름'
// }

// export default MyComponent;

//propType설정
// const MyComponent = ({name, children}) => {
//   return (
//     <div>
//       안녕하세요, 제 이름은 {name} 입니다. <br />
//       children 값은 {children} 입니다.
//     </div>
//   )
// }

// MyComponent.defaultProps ={
//   name: '기본이름',
//   children: '기본 칠드런이름'
// }

// MyComponent.propTypes ={
//   name: PropTypes.string
// }

// export default MyComponent;

//isRequired사용 propTypes설정!
// const MyComponent = ({name, favoriteNumber, children}) => {
//   return(
//     <>
//     안녕하세요, 제 이름은 {name}입니다.<br/>
//     children 값은 {children}입니다.<br/>
//     제가 좋아하는 숫자는 {favoriteNumber}입니다.
//     </>
//   )
// }

// MyComponent.defaultProps = {
//   name: 'default이름',
//   children: 'default칠드런이름'
// }

// MyComponent.propTypes = {
//   name: PropTypes.string,
//   favoriteNumber: PropTypes.number.isRequired
// }

// export default MyComponent;

//＊＊＊＊＊＊＊＊＊＊＊＊＊클래스형 컴포넌트!＊＊＊＊＊＊＊＊＊＊＊＊＊＊
// class MyComponent extends Component{
//   render(){
//     const {name, favoriteNumber, children} = this.props;
//     return(
//       <>
//         안녕하세요, 제 이름은 {name}입니다<br/>
//         children값은 {children}입니다<br/>
//         제가 좋아하는 숫자는 {favoriteNumber}입니다.
//       </>
//     )
//   }
// }

// MyComponent.defaultProps = {
//  name: 'default이름',
//  children: 'default칠드런이름'
// }

// MyComponent.propTypes = {
//   name: PropTypes.string,
//   favoriteNumber: PropTypes.number.isRequired
// }

// export default MyComponent;

//클래스형 컴포넌트2!
class MyComponent extends Component{
  static defaultProps = {
    name: 'default 이름',
    children: 'default 칠드런 이름'
  };
  static propTypes = {
    name: PropTypes.string,
    children: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired
  };
  render(){
    const{name, favoriteNumber, children} = this.props;

    return(
      <>
        안녕하세요, 제 이름은 {name}입니다 <br/>
        children 값은 {children}입니다<br/>
        제가 좋아하는 숫자는 {favoriteNumber}입니다.
      </>
    )
  }

}

export default MyComponent;