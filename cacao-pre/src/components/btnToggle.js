// import useForm from './useForm';
import React ,{useState} from 'react';

const BtnToggle = () => {
    // const {handleChange, values, handleSubmit} = useForm();
    const [btns, setActiveBtn] = useState({
        activebtn: null,
        btnindexs:[{id: 'male', value: '남자'},{id: 'female', value: '여자'}]
    })
    const btnId = (index) => {
        return btns.btnindexs[index].id;
    }
    const btnValue = (index) =>{
        return btns.btnindexs[index].value;
    }

    const activeBtnToggle = (index) =>{
        setActiveBtn({
            ...btns,
            activebtn: btns.btnindexs[index]
        })
    }

    const styleActiveBtnToggle = (index) =>{
        if(btns.btnindexs[index] === btns.activebtn){
            return "form-lable-btn active";
        }else{
            return "form-lable-btn inactive";
        }
    }
    // function activeBtnToggle(index){
    //     setActiveBtn({
    //         ...btns,
    //         activebtn: btns.btnindexs[index]
    //     })
    // }
    return{btns, btnId, btnValue, activeBtnToggle, styleActiveBtnToggle};
    // return(
    //     <div className="form-btn-container gender">
    //         {btns.btnindexs.map((elements, index) => (
    //             <label htmlFor="gender" 
    //             className="form-lable-btn inactive" 
    //             key={index} 
    //             onClick={()=>{activeBtnToggle(index)}}>
    //                 {btnValue(index)}
    //                 <input id={btnId(index)} type="radio" name="gender" value={btnValue(index)} onChange={handleChange}/>
    //             </label> 
    //         ))}
    //     </div>
    // )
};

export default BtnToggle;
