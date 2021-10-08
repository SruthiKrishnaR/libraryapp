var user = document.getElementById("username");
var pwd = document.getElementById("password");
var mobile = document.getElementById("mobile");
var submit = document.getElementById("submit");


function validate(f1,f2,f3,f4){
    if(f1()&&f2()&&f3()&&f4()){
        return true;
    }else{
        alert("Enter Valid Details!!");
        return false;
    }
}

    var log = document.getElementById("log");
    log.textContent="";

   function valName(){
        log.textContent="";
        var user = document.getElementById("username").value;
        if(user == "admin"){
           return true;
        }else{
            log.textContent ="Invalid Username";
            return false;
        }
    }

    //mail.textContent ="";

    function valMail(){
        mail.textContent="";
        var email = document.getElementById("email");
        
        let re = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})$/g;
        if(!re.test(email.value)) {
            email.focus();
            mail.textContent="Invalid Email";
            return false;
        }
        else{
            return true;
        }

        // if(email==reg){
        //     console.log("sucess");
        //     return true;
        // }else{
        //     mail.textContent="Invalid Email";
        //     return false;
        // }
    }

    
    var log1 = document.getElementById("log1");
    log1.textContent="";
    
    function valPwd(){
        log1.textContent="";
        var content1 =  pwd.value;
        if(content1 == "12345"){
            return true;
        }else{
            log1.textContent ="Invalid Password";
            return false;
        }
    }

    var mob = document.getElementById("mob");
    mob.textContent ="";

    function valMobile(){
        mob.textContent="";
        var mobile = document.getElementById("mobile");
        let re = /^\(?([0-9]{3})\)?[-._ ]?([0-9]{3})[-._ ]?([0-9]{4})$/;
        if(!re.test(mobile.value)) {
            mobile.focus();
            mob.textContent="Invalid";
            return false;
        }
        else{
            return true;
        }
    }