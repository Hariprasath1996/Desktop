`use strict`

let input = document.getElementById(`input`)
let button = document.getElementById(`add`)
let todoList = document.getElementById(`todoList`)

let items = [];

button.addEventListener(`click`, ()=>{
  items.push(input.value)
  addItem(input.value)
input.value=``
})

function addItem (item) {
  let para = document.createElement(`p`)
  para.innerText = item
  todoList.appendChild(para)
  para.addEventListener(`click`,()=>{
    para.style.textDecoration=`line-through`
    remove(item)
  })
  para.addEventListener(`dblclick`,()=>{
todoList.removeChild(para)
remove(item)
})
}
function remove(item) {
  let index = items.indexOf(item)
  if(index>-1)
  items.splice(index,1)
}
