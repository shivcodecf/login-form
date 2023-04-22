let username = document.getElementById("user");
let password =document.getElementById("pass");

function validateForm() {
     
    let flag =0;
    if(username.value == "")
    {
        document.getElementById("userError").innerHTML= "username empty!!";
        
    }
    else if(username.value.length < 4)
    {
        document.getElementById("userError").innerHTML= "username must be atlest 3 character !";
        
    }
    else {
        document.getElementById("userError").innerHTML= " ";
        flag += 1;
    }
    if(password.value == "")
    {
        document.getElementById("PassError").innerHTML= "Password empty!!";
        
    }
    else if(password.value.length < 4)
    {
        document.getElementById("PassError").innerHTML= "Password must be atleat 4 character!";
        
    }
    else {
        document.getElementById("PassError").innerHTML= " ";
        flag +=1;
    }
    if(flag==2)
    return true;
    else {
        return false;
    }
    
    
}