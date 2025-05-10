function calc(op) {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  var output = 0;

  switch (op) {
    case '+': output = num1 + num2; break;
    case '-': output = num1 - num2; break;
    case '*': output = num1 * num2; break;
    case '/': output = num1 / num2; break;
  }

  if (Number.isFinite(output) != true) {
    output = "∞";
  }
  
  document.getElementById("output").value = output;

  var newhistory = "<p>" + num1 + " " + op + " " + num2 + " = " + output + "</p>";
  var history = document.getElementById("history");

  history.innerHTML = newhistory + history.innerHTML;

  if(history.children.length > 10) {
    history.removeChild(history.childNodes[10]); //removendo o 11 filho
  }
}

/*
function calcSub(){
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    
    var output = num1 - num2;

    document.getElementById("output").value = output;
}

function calcMult(){
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    
    var output = num1 * num2;

    document.getElementById("output").value = output;
}

function calcDiv(){
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    
    var output = num1 / num2;

    document.getElementById("output").value = output;
}
    */