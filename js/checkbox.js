var circlechecked = document.getElementById("checkbox-circle");
var overimg = document.getElementById("over-arrow");

circlechecked.addEventListener('click', function(){
    overimg.classList.toggle("dis-block");
})
overimg.addEventListener('click', function(){
    overimg.remove.toggle("dis-block");
    overimg.classList.toggle("dis-none");
})