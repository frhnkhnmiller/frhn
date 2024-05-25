function clearScreen(){
    document.getElementById("result").value = "";
}

function display(value){
    document.getElementById("result").value += value;
}

function calculate(){
    var M = document.getElementById("result").value;
    var F = eval(M);
    document.getElementById("result").value = F;
}
//-4px -4px 10px, -4px 4px 10px, 4px -4px 10px, 4px 4px 10px
//-2px -2px 10px , 2px -2px 10px , -2px 2px 10px , 2px 2px 10px
//-10px -10px 100px, 2px -10px 100px, -10px 2px 100px, 2px 2px 100px