var img = document.querySelector('.imag');
var container = document.querySelector('.container');


function phones(phone){
 img.src= phone;
}

function colors(color){
    container.style.background= color;
}


//validations
function formValidate(){
    var username = document.getElementById("username").value;
    var mail = document.getElementById("email").value;
    var pasword = document.getElementById("password").value;
    var phone = document.getElementById("phoneNumber").value;
    var erorr = document.getElementById("erorr").value;

var text="";

//conditional
if (username.length < 5){
    text= "please enter valid user name";
    erorr.innerHtml = text;
    return false
}else if (mail.indexof("@")==-1|| mail.length<6){
    text="please enter vaild email"
    return false

}else if (pasword.length < 10){
    text="please enter vaild password"
    return false

}else if (phone.length < 12) {
    text="please enter vaild number"
    return false
}else
alert("your data are succesfuly")

}