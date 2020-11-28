import React, {useState} from 'react';
import useForm from './useForm';
import BtnToggle from './btnToggle';
import validate from './validateInfo';
import './FormSignUp.css';

const FormSignUp = () => {
    const {handleChange, values, handleSubmit, errors} = useForm(validate);
    const {btns, btnId, btnValue, activeBtnToggle, styleActiveBtnToggle} = BtnToggle();

    return (
        <div className="form-container">
            <div className="row">
                <form className="form" onSubmit={handleSubmit}>
                    <h1>회원가입</h1>
                    <div className="form-input-container">
                        <label htmlFor="username" className="form-label"></label>
                        <input id="username" type="text" name="username" className="form-input" placeholder="아이디" value={values.username} onChange={handleChange}/>
                        {errors.username && <p>{errors.username}</p>}
                    </div>
                    {/* {errors.username && <p>{errors.username}</p>} */}
                    <div className="form-input-container">
                        <label htmlFor="password" className="form-label"></label>
                        <input id="email" type="email" name="email" className="form-input" placeholder="이메일" value={values.email} onChange={handleChange}/>
                        {errors.email && <p>{errors.email}</p>}
                    </div>
                        {/* {errors.email && <p>{errors.email}</p>} */}
                    <div className="form-input-container">
                        <label htmlFor="password" className="form-label"></label>
                        <input id="password" type="password" name="password" className="form-input" placeholder="비밀번호" value={values.password} onChange={handleChange}/>
                        {errors.password && <p>{errors.password}</p>}
                    </div>
                        {/* {errors.password && <p>{errors.password}</p>} */}

                    <div className="form-input-container">
                        <label htmlFor="password2" className="form-label"></label>
                        <input id="password2" type="password" name="password2" className="form-input" placeholder="비밀번호 확인" value={values.password2} onChange={handleChange}/>
                        {errors.password2 && <p>{errors.password2}</p>}
                    </div>
                        {/* {errors.password2 && <p>{errors.password2}</p>} */}
                
                    {/* <BtnToggle/> */}
                    <div className="form-input-container gender">
                        {btns.btnindexs.map((elements, index) => (
                            <label htmlFor="gender" 
                                    className={styleActiveBtnToggle(index)} 
                                    key={index} 
                                    >
                                    {btnValue(index)}
                                 {/* <div className="bg"></div> */}
                                <input id={btnId(index)} type="radio" name="gender" className="form-input" value={btnValue(index)} onChange={handleChange} key={index} onClick={()=>{activeBtnToggle(index)}}/>
                            </label> 
                        ))}
                        {errors.gender && <p>{errors.gender}</p>}
                    </div>
                        {/* {errors.gender && <p>{errors.gender}</p>} */}
                    <div className="form-input-container birthday">
                        <label htmlFor="birthday" className="form-label">생일</label>
                        <input id="birthday" type="date" name="birthday" className="form-input" min="1900-01-01" max="2020-12-31" value={values.birthday} onChange={handleChange}/>
                        {errors.birthday && <p>{errors.birthday}</p>}
                    </div>
                        {/* {errors.birthday && <p>{errors.birthday}</p>} */}
                    <div className="form-input-container phonenumber">
                        <label htmlFor="phonenumber" className="form-label">전화</label>
                        <select className="prephonenumber" name="prephonenumber" id="prephonenumber" value={values.prephonenumber} onChange={handleChange}>
                            <option value="010">010</option>
                            <option value="011">011</option>
                            <option value="110">110</option>
                        </select>
                        <input id="phonenumber" type="text" name="phonenumber" className="form-input"  value={values.phonenumber} onChange={handleChange}/>
                        <button type="submit" className="form-input-btn" >인증</button>
                        {errors.phonenumber && <p>{errors.phonenumber}</p>}
                    </div>
                        {/* {errors.phonenumber && <p>{errors.phonenumber}</p>} */}
                    <div className="form-input-container agreement">
                        <label htmlFor="agreement" className="form-label">모든 약관 내용에 동의 합니다.</label>
                        <div className="toggle-btn-container">
                            <div className="checkbox-bg"></div>
                            <input type="checkbox" className="form-input checkbox-invisible" name="agreement" value="동의" onChange={handleChange}/>
                            <div className="checkbox-circle"></div>
                        </div>
                        {errors.agreement && <p>{errors.agreement}</p>}
                    </div>
                        {/* {errors.agreement && <p>{errors.agreement}</p>} */}
                    <div className="form-btn-container signup">
                        <button className="form-btn" type="submit">가입하기</button>
                    </div>
                    {/* <span className="form-input-container login">
                        이미 계정이 있습니까?
                        <a href="#">로그인</a>
                    </span> */}
                </form>
            </div>
        </div>
    )
}

export default FormSignUp
