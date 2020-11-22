export default function validateInfo(values){
    let errors = {}

    //아이디 ^문장 처음 $문장 마지막
    if(!values.username.trim()){
        errors.username = '아이디를 입력하세요:D';
    }else if(!/^[a-zA-z0-9]{1,10}$/.test(values.username)){
        //전역 매칭 플래그 g 대소문자 무시 플래그 i
        errors.username = '아이디를 알파벳 1~10글자(특수문자X)!'
    }

    //이메일
    if(!values.email){
        errors.email = '이메일를 입력하세요:D';
    }else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email = '이메일 형식에 맞지 않습니다!';
    }

    //비밀번호
    if(!values.password){
        errors.password = '비밀번호를 입력하세요:D';
    }else if(values.password.length < 6){
        errors.password = '비밀번호를 6자리 이상 입력해주세요!';
    }else if(!/(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{6,50}$/.test(values.password)){
        errors.password = '영문 2개, 숫자, 특수문자 각각 1개 이상 입력해주세요!';
    }

    //비밀번호 재입력
    if(!values.password2){
        errors.password2 = '비밀번호를 다시 입력하세요:D';
    }else if(values.password !== values.password2){
        errors.password2 = '비밀번호가 같지 않습니다!';
    }   

    //성별
    if(!values.gender){
        errors.gender = '성별을 선택하세요:D';
    }

    //생일
    if(!values.birthday){
        errors.birthday = '생일을 입력하세요:D';
    }

    //전화번호
    if(!values.phonenumber){
        errors.phonenumber = '전화번호를 입력하세요:D';
    }else if(!/-?[0-9]{3,4}-?[0-9]{4}/.test(values.phonenumber)){
        errors.phonenumber = '7 또는 8자리 번호를 입력하세요!';
    }

    //동의
    if(!values.agreement){
        errors.agreement = '동의를 체크하세요:D';
    }

    return errors;

}