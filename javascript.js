
const passwordField=document.getElementById("pwd")
const submitButton = document.querySelector("#submitbutton")
submitButton.addEventListener("click",function(){
let password=document.querySelector("#pwd").value
let cpassword=document.querySelector("#cpwd").value
if(password!=cpassword)
{
    alert("password doesnt match! try again")
    passwordField.setCustomValidity("Invalid field.");
}
else{
    passwordField.setCustomValidity('')
}
});
