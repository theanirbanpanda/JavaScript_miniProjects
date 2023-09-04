
let addbtn=document.getElementById("addbtn");
addbtn.addEventListener("click",()=>{

item=document.getElementById("textfield").value;
if(!item)
{
    alert("please enter something");
  
   
}
else{
  
var text = document.createTextNode(item);
var newItem = document.createElement('li');

// Create checkbox
var checkbox = document.createElement('input');
checkbox.type = 'checkbox';
newItem.appendChild(checkbox);
checkbox.style.marginRight='20px';

// Append text to list item
newItem.appendChild(text);

// Create cross button
var crossButton = document.createElement('button');
crossButton.innerHTML = 'X';
crossButton.style.marginLeft='250px';
crossButton.style.border='0';
crossButton.style.background='transparent';
  crossButton.addEventListener('click', function() {
    newItem.remove();
  });
newItem.appendChild(crossButton);

    // Add item to list
    document.getElementById('todolist').appendChild(newItem);
    checkbox.addEventListener('change', function() {
        if (this.checked) {
          newItem.style.textDecoration = 'line-through';
        } else {
          newItem.style.textDecoration = 'none';
        }
        setCookie('todolist', document.getElementById('todolist').innerHTML, 1);



      });
      document.getElementById('textfield').value = '';
    }
})


function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
  
  