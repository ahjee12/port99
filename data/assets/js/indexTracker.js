//DOM elements
const btns = document.querySelectorAll('button');
const form = document.querySelector('form');
const formAct = document.querySelector('form span');
const input = document.querySelector('form input');
const error = document.querySelector('form .error');

var activity = 'cycling'
btns.forEach(btn => {
    btn.addEventListener('click', e => {
        activity = e.target.dataset.activity;
        let target = e.target;
        //remove and add active class
        btns.forEach(btn =>{
            btn.classList.remove('active')
        })
        target.classList.add('active')
        
        //set id of input field id는 꼭 필요한 건 아니지만
        input.setAttribute('id', activity)

        //set text of form span
        formAct.textContent = activity

        //call the update function
        update(data);
    })
})

//form submit
form.addEventListener('submit', e => {
    //prevent default action
    e.preventDefault();
    const distance = parseInt(input.value)
    const item ={
        //es6 magic! 배열 요소이름 : 값 이 같으면 한 번만 적으면 자동 인식됨!!
        distance,
        activity,
        date: new Date().toString()
    }
    if(distance){
        db.collection('activities').add(item).then(() => {
            error.textContent ='';
            input.value = ''
        })
    }else{
        error.textContent = '수를 입력해 주세요!'
    }
})

