
function validate(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="abinash" && password=="pass"){
        alert("Login Successfull");
        window.location.href="success.html";
        return false;
    }
    else{
        document.getElementById("username").disabled=true;
        document.getElementById("password").disabled=true;
        return false;
    }
}
