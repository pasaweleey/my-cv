


















function validation(){
    var mailLable = document.getElementById("mail");
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass");
    var passwordLable = document.getElementById("password").value;
    var valid = true;
    if(email === ""){
        mailLable.innerHTML ="required";
        return valid = false;
    }
    else if(passwordLable === ""){
        pass.innerHTML ="required";
        return valid = false;
    }
}