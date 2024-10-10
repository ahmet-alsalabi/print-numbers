

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
        console.log(i);

    }

    document.getElementById("result").innerHTML = resultString;

}
