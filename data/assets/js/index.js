const form = document.querySelector('form')
const name = document.querySelector('input#name')
const cost = document.querySelector('input#cost')
const error = document.querySelector('#error')

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    if(name.value && cost.value){
        const item = {
            name: name.value,
            cost: parseFloat(cost.value)
        }
        //firebase가 아니라 form에서 받아오는 것을 firebase에 넣기
        db.collection('expenses').add(item).then(() => {
            error.textContent = '';
            name.value ="";
            cost.value = "";
        })

    }else if(!name.value && cost.value){
        error.textContent = '이름을 입력하세요'
    }else if(name.value && !cost.value){
        error.textContent = '지출을 입력하세요'
    }else{
        error.textContent = '이름과 지출을 입력하세요'
    }
})