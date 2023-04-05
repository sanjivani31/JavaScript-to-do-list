var btnAdd=document.getElementById("add-item");
var listItems=document.getElementById("todo-list");
var inputText=document.getElementById("input-box");
var selectDelete=document.getElementById("todo-list");

currentInputValue='';
inputText.addEventListener('input',function get(e){
    currentInputValue=e.target.value;
})

function addListItem(){
    if(currentInputValue !== undefined && currentInputValue!== null && currentInputValue !== ''){
        var newElement = document.createElement('li');
        var childElementCount=listItems.childElementCount;
        var ElementContent = document.createTextNode(currentInputValue);
        var deleteIcon = document.createElement("img");
        deleteIcon.className = "close";
        deleteIcon.src="bin.png"
        

        newElement.appendChild(ElementContent);
        newElement.appendChild (deleteIcon);
        newElement.id=("item"+(listItems.childElementCount+1));
        listItems.appendChild(newElement);

        console.log(newElement);

        inputText.value='';
        currentInputValue='';

        
    }
    else{
        alert('Enter valid item');
    }
    
}

inputText.addEventListener('keyup',function(e){
    if(e.key === 'Enter'){
        addListItem();
    }
})
btnAdd.addEventListener('click',addListItem);

selectDelete.addEventListener('click',function (e){
    if(e.target.className =="close"){
       e.target.parentNode.remove();
    }
})