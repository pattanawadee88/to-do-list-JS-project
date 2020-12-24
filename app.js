var textNew = document.querySelector('input');
var list = document.getElementsByClassName('list-items-container');

function getTextInput(){
  document.querySelector(".list-items-container").innerHTML = textNew.value; 
}

