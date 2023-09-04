var output=document.getElementById("result")
output.addEventListener('click',()=>output.innerText='');

var inputs = document.getElementsByClassName("btn");

Array.from(inputs).map(function(input) {
  input.addEventListener('click', function() {
    output.innerText=eval(input.innerText);
  });
});
eval