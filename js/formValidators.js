var form =  document.getElementById("myForm");
console.log(form);
form.addEventListener("submit", function(event) {
var nameInput = document.getElementById("name");
var descriptionInput = document.getElementById("Description");
var addresInput = document.getElementById("Address");
var URLInput = document.getElementById("Image");
var state = 0

if (!nameInput.value) {
    event.preventDefault();
    document.getElementById("error1").style.display = "block";
    state = 1;
}else{
    document.getElementById("error1").style.display = "none";
}

if (!descriptionInput.value) {
    event.preventDefault();
    document.getElementById("error2").style.display = "block";
    state = 1;
}else{
    document.getElementById("error2").style.display = "none";
}

if (!addresInput.value) {
    event.preventDefault();
    document.getElementById("error3").style.display = "block";
    state = 1;
}else{
    document.getElementById("error3").style.display = "none";
}

if (!URLInput.value) {
    event.preventDefault();
    document.getElementById("error4").style.display = "block";
    state = 1;
}else{
    document.getElementById("error4").style.display = "none";
}

if(state==0){
    alert("Formulario Enviado perfectamente")
}
}   
);