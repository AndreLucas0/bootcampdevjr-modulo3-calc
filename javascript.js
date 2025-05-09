function calc(){
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    const b1 = document.getElementById("b1ID");
    const b2 = document.getElementById("b2ID");
    const b3 = document.getElementById("b3ID");
    const b4 = document.getElementById("b4ID");


    b1.addEventListener("click", function(event) {
        if (event.currentTarget.id === "b1ID"){
            var output = num1 + num2;

            document.getElementById("output").value = output;  
        } if (event.currentTarget.id === "b2ID"){
            var output = num1 - num2;

            document.getElementById("output").value = output;  
        } if (event.currentTarget.id === "b3ID"){
            var output = num1 * num2;

            document.getElementById("output").value = output;  
        } if (event.currentTarget.id === "b4ID"){
            var output = num1 / num2;

            document.getElementById("output").value = output;  
        }
    })
    
    
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