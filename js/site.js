
//1. get the values from the page
//starst or controller function
function getValues(){
    //get values from the page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    //parse into integers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if(Number.isInteger(startValue) && Number.isInteger(endValue)){

        //call generateNumbers
        let numbers = generateNumbers(startValue, endValue);
        displayNumbers(numbers);

    }
    else{
        alert("You must enter integers!")
    }

}
    
//2. generate numbers from the startValue to the endValue
//logic function
function generateNumbers(sValue, eValue){
    let numbers = [];
    //we want all numbers from start to end
    for (let i = sValue; i <= eValue; i++) {
        
        numbers.push(i);    
    }

    return numbers;
}

//3. display the numbers and mark even numbers bold
//display or view function
function displayNumbers(numbers){
    let templateRows = "";
    for (let index = 0; index < numbers.length; index++) {
        let number = numbers[index];
        
        let className = "";

        if(number % 2 == 0){
            className = "even";
        }
       
        templateRows += `<tr><td class="${className}">${number}</td></tr>`;
    }

    document.getElementById("results").innerHTML = templateRows;

}