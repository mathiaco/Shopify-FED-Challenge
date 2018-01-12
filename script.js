document.getElementById("email").addEventListener("invalid", message);
function message(){
document.getElementById("errorMsg").innerHTML= "Please enter a valid email address";
}

function print(){
  var email=document.getElementById("email").value;
  console.log(email);
}
