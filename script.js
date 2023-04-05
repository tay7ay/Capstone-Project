	//Login Page Validation

    var userID = document.forms['form']['userID'];
    var password = document.forms['form']['password'];
    
    var userID_error = document.getElementById('userID_error');
    var pass_error = document.getElementById('pass_error');
    
    userID.addEventListener('textInput', userID_Verify);
    password.addEventListener('textInput', pass_Verify);
    
    function validated(){
        if (userID.value.length < 9) {
            userID.style.border = "1px solid red";
            userID_error.style.display = "block";
            userID.focus();
            return false;
        }
        if (password.value.length < 6) {
            password.style.border = "1px solid red";
            pass_error.style.display = "block";
            password.focus();
            return false;
        }
    
    }
    function userID_Verify(){
        if (userID.value.length >= 8) {
            userID.style.border = "1px solid silver";
            userID_error.style.display = "none";
            return true;
        }
    }
    function pass_Verify(){
        if (password.value.length >= 5) {
            password.style.border = "1px solid silver";
            pass_error.style.display = "none";
            return true;
        }
    }
    
    document.getElementById("myButton").onclick = function redirect(){
        if(userID_Verify == true && pass_Verify == true){
            location.href = "https://tay7ay.github.io/Capstone-Project/";
        }
    }