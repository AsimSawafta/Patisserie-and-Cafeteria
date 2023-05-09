let userEmail=document.getElementById('Email')
let userPassword=document.getElementById('password')

// let login=document.getElementById('login')
let loginBtn=document.getElementById('loginBtn')
let pass='12345'
let email='asim.nots@gmail.com'


loginBtn.onclick=function(){
if(userEmail.value===email&& userPassword.value===pass){
    // window.open(".html");
    window.location.assign('./admin.html');
}
}
