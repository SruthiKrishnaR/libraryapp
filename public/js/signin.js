let user = document.getElementById("username");
let pwd = document.getElementById("password");
let submit = document.getElementById("submit");


function validate(f1,f2){
    if(f1()&&f2()){
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
        let user = document.getElementById("username");
        let content =  user.value;
        if(content == "admin"){
           return true;
        }else{
            log.textContent ="Invalid Username";
            return false;
        }
    }

    
    var log1 = document.getElementById("log1");
    log1.textContent="";
    
    function valPwd(){
        log1.textContent="";
        let content1 =  pwd.value;
        if(content1 == "12345"){
            return true;
        }else{
            log1.textContent ="Invalid Password";
            return false;
        }
    }