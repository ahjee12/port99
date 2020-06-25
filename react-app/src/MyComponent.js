import React from 'react';

// const MyComponent = props =>{
// return(
//     <div>
//     안녕하세요, 제 이름은 {props.name}입니다<br/>
//     children 값은 {props.children}
//     </div>
//     );
// };

// //props 기본값 설정
// MyComponent.defaultProps = {
//     name: '기본 이름'
// };

// export default MyComponent;

const MyComponent = props =>{
    const {name, children} = props;
    return(
      <>
        안녕하세요, 제 이름은 {name}입니다.<br />
        children 값은 {children}입니다.
      </>
    )
  }
  