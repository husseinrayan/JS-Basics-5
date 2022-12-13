function addNumbers() {
    var number;
    var result = "";
    
    number = Number(document.getElementById("number").value);
    
    for(var i =1; i<= 12; i++){
    result = result +" "+ number * i;
    }
    
    document.getElementById("result").innerHTML = result;
    }