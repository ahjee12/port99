import React from 'react'

const FormSignUp = () => {
    return (
        <div className="form-container">
            <form className="form">
                <h1>회원가입</h1>
                <div className="form-input">
                    <label htmlFor="username" className="form-label">
                        <input type="text" name="username" className="form-input" placeholder="아이디"/>
                    </label>
                </div>
                <div className="form-input">
                    <label htmlFor="password" className="form-label">
                        <input type="text" name="password" className="form-input" placeholder="비밀번호"/>
                    </label>
                </div>
            </form>
        </div>
    )
}

export default FormSignUp
