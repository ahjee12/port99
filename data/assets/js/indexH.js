const modal = document.querySelector('.modal');
console.log(modal)
M.Modal.init(modal);

const form = document.querySelector('.modal form')
const name = document.querySelector('.modal form #name')
const parent = document.querySelector('.modal form #parent')
const department = document.querySelector('.modal form #department')

console.log(form)
console.log(name)
console.log(parent)
console.log(department)

form.addEventListener('submit', e => {
    e.preventDefault();

    const item = {
        name: name.value,
        parent: parent.value,
        department: department.value
    }
    console.log(item)
    db.collection('subjects').add(item)

    let instance = M.Modal.getInstance(modal)
    instance.close();

    form.reset();
})

