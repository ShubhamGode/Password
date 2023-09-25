const button = document.querySelector("button");
var result;
let ip = document.getElementById("ip");
ip.onclick = function(){
    if(ip.type == "password"){
        ip.type = "text";
    }else{
        ip.type = "password";
    }
}


function containUpperCase(str){
    return /[A-Z]/.test(str);
}

function containLowerCase(str){
    return /[a-z]/.test(str);
}

function containNum(int){
    return /[0-9]/.test(int);
}
function specialChar(a){
    for(let i = 0; i < a.length; i++){ 
        if(a.charAt(i) == '?' || a.charAt(i) == '!'||a.charAt(i) == '@'|| a.charAt(i) == '#'|| a.charAt(i) == '$' || a.charAt(i) == '%'|| a.charAt(i) == '^' || 
        a.charAt(i) == '&' || a.charAt(i) == '*' || a.charAt(i) == '(' || a.charAt(i) == ')'|| a.charAt(i) == '_' || a.charAt(i) == '-' || a.charAt(i) == '+' ||
        a.charAt(i) == '=' ||a.charAt(i) == '{' || a.charAt(i) == '}' || a.charAt(i) == '[' || a.charAt(i) == ']' || a.charAt(i) == '|' || a.charAt(i) == ':' || 
        a.charAt(i) == ';' || a.charAt(i) == '"' || a.charAt(i) == "'" || a.charAt(i) == '<' || a.charAt(i) =='>' || a.charAt(i) == '/'){
           return true;
            } 
        }return false;
}
function findcommonpass(a) {
    const common = ["123456", "123456789", "qwerty", "password", "12345", "qwerty123", "1q2w3e","12345678","111111","1234567890","Qwertyuiop","Iloveyou","1q2w3e","123","abc","ABC","ABCDE","abcde"]; 
    const words = a.split(/\s+/);
    const commonPass = words.filter(word => common.includes(word.toLowerCase()));   
    return commonPass;
  }
  function functionToExecute(){ 
    var a = document.getElementById('ip').value;
    if(a.length >= 15){
        if(containUpperCase(a) && containLowerCase(a) && containNum(a)){
            if(specialChar(a)){
                result = "Strong Password"
            }
            else{
                    result = "No Special charatcter included. This is not a Strong password";
                } 
            }else{
               result = "This is not a Strong password";
            }
    
    }else {
            result = "Please Update your Password";
    }
    if(findcommonpass(a)){
        result = "Common Password - Easy to crack";
    }
        
        document.getElementById("result").innerHTML = result;
    } 
    
    
 