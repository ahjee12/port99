function addOne(a,b){
    return a + b
}

const addTwo = (a,b) =>{
    return a + b
}

const addThree = (a,b) => a + b

// console.log(addOne(3,5))
// console.log(addTwo(3,5))
// console.log(addThree(3,5))

//this라는 건 personOne object를 의미
const personOne = {
    name: 'hyunji',
    speak: function(){
        console.log('my name is', this.name)
    }
}

// arrow 함수에서는 this 작동 안 함!!
const personTwo = {
    name: 'hyunji',
    speak: () =>{
        console.log('my name is', this.name);
    }
}

