import {useState, useEffect} from 'react';

const useForm = (validate) =>{
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        password2: '',
        gender: '',
        birthday: '',
        prephonenumber:'010',
        phonenumber: '',
        agreement: ''
    })
    const [errors, setErrors] = useState({

    })
    const handleChange = e => {
        const{name, value} = e.target
        setValues({
            ...values,
            [name] : value
        })
    }

    const handleSubmit = e =>{
        e.preventDefault();
        //formSignUp에서 validateInfo를 validate으로 가져옴 -> useForm(validate) -> validate(values)
        setErrors(validate(values));
    }

    return{handleChange, values, handleSubmit, errors};
};

export default useForm;