const classNames = {
    TODO_ITEM: 'todo-container',
    TODO_CHECKBOX: 'todo-checkbox',
    TODO_TEXT: 'todo-text',
    TODO_DELETE: 'todo-delete',
  }
  
  
  const list = document.getElementById('todo-list')
  const itemCountSpan = document.getElementById('item-count')
  const uncheckedCountSpan = document.getElementById('unchecked-count')
  const listLi = document.getElementsByTagName('li')
  
  let itemCount = 0;
  let itemUnchecked = 0;

function addTodo() {
    let todo = prompt("Escriba su to-do")
    if(addElement(todo)){
      itemCount++;
      itemUnchecked++;

      itemCountSpan.innerText = itemCount.toString();
      uncheckedCountSpan.textContent = itemUnchecked.toString();
    }  
}


function deleteTodo(){
  let index = prompt("Ingrese número de to-do");


}


function addElement(todo){
    let checkbox = createCheckbox();
    let liTag = document.createElement('li');
    if(todo != ""){
      liTag.textContent = todo;

    liTag.appendChild(checkbox)
    list.appendChild(liTag);
    return true;
    }
    

}

function createCheckbox(){
    let checkbox = document.createElement('input')
    checkbox.type = "checkbox";
    checkbox.onclick = () => {
      if(checkbox.checked){
        itemUnchecked--;
      }else{
        itemUnchecked++;
      }
      uncheckedCountSpan.textContent = itemUnchecked.toString();
    } 
    return checkbox;
}

const checkboxes = document.getElementsByClassName("check");
