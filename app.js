function getNumber(num){
    var xkresult = document.getElementById("xkresult");
    xkresult.value += num;
}

function clearResult(){
    var xkresult = document.getElementById("xkresult");
    xkresult.value = ""
}

function getResult(){
    var xkresult = document.getElementById("xkresult");
    xkresult.value = eval(xkresult.value)
}