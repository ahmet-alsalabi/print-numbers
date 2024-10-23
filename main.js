

function dataSave() {


    let firInpValue = document.getElementById("first").value;
    let secInpValue = document.getElementById("second").value;

    if (firInpValue > secInpValue) {
        document.getElementById("result").innerHTML = "القيمة الأولى يجب أن تكون أقل من أو تساوي القيمة الثانية";
        return;
    }

    let resultString = "";

    for (let i = firInpValue; i <= secInpValue; i++) {
        resultString += i + (i < secInpValue ? ", " : "");
    }


    for (let i = firInpValue; i <= secInpValue; i++) {
       // console.log(i);

    }

    document.getElementById("result").innerHTML = resultString;

}
function numbers(number1,number2){
    let min,max;
    if(number1>number2){
        max=number1;
        min=number2;   
    }else{
        max=number2;
        min=number1;
    }
    let myArray = [];
    for(let i=min; i <= max; i++){
        console.log(i);
        
        myArray.push(i);
    }
    return myArray;

}
//console.log(numbers(12,6));