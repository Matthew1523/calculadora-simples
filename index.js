// Create a functional Calculator Object [OK]

var Calculator = {
  body: document.getElementById('calculatorBody'), // const
  display: document.getElementById('display'),     // let
  btnsInput: document.querySelectorAll('.btn'),    // let
  charsLimit: document.querySelector('#limitChecker'), 

  operators: ["*", "/", "+", "-"],
  miscBtns: ["C", "AC"],
  perfomedCalculationMemory: []
}



function main(){
  
  // btnInput validation
  if (Calculator.btnsInput !== undefined && Calculator.btnsInput !== null) {

    /* 

    TODO Handle with miscaleneos buttons 
    TODO Fix 0 malfuncionlatie on screen

    */

    // Adding Event listiner to buttons
      for(let i=0; i < Calculator.btnsInput.length; i++){
        Calculator.btnsInput[i].addEventListener(
          'click', 
          typing
        )
      }
  }
  else{
    alert("Null value found");
  }
}

function typing(){

  let btnString;
  let displayString;

  checkDigitLimit();

  displayString = Calculator.display.textContent;
  
  btnString = this.textContent;
  Calculator.display.innerHTML += btnString;

  // Buttons features
  let formattedString;
  if(btnString === "="){  
    formattedString = splitString(displayString);
    // result(formattedString);
  }

  if(btnString === "C" || btnString === "AC"){
    clean(btnString);
  }
}

function checkDigitLimit(){
  
  let displayLength, limitString, limitExceedMessage;
  let untilLimit;
  const limit = 8;

  displayLength = Calculator.display.textContent.length;

  limitExceedMessage = document.createTextNode(`ERR: ${limit} digits limit exceded. Clean your screen NOW!`);
  untilLimit = document.createTextNode(`Char limit: ${limit-displayLength}`);
  
  
  limitString = Calculator.charsLimit;
  
  limitString.innerHTML = untilLimit.textContent

  if(displayLength + 1 > limit){
    limitString.innerHTML = limitExceedMessage.textContent;
  }
}

function arrayToString(){

}

function clean(key){
  
  // Exclude last digite display string
  if(key === "C"){
    removedLastStr = Calculator.display.textContent.slice(0, -2);  // TODO REFACTOR
    Calculator.display.textContent = removedLastStr;
  }

  else if(key === "AC"){
    Calculator.display.textContent = "0";
  }
}

function showUpHistory(){
  // TODO Checking Memory
  // if Calculator History is empty, then...
  // else...

let memory;
}

function splitString(str){
  
  let arrayNums, arrayOperators;
  let numRegex, operatorsRegex;

  // TODO encontrar forma de separar TODOS os operadores encontrados  

  numRegex = /\d+/g;
  operatorsRegex = /[*/+-]/g;
  

  // Entender melhor esse negócio aqui
  arrayNums = [...str.matchAll(numRegex)];
  arrayOperators = [...str.matchAll(operatorsRegex)];

  // CRIAR FUNÇÃO URGENTE PRA ISSO DAQUI!!!
  for(let key in arrayNums){
    arrayNums[key] = parseInt(arrayNums[key], 10);
  }


  for(let key in arrayOperators){
    arrayOperators[key] = String(arrayOperators[key]);
  }


  let result = calculate(arrayNums, arrayOperators);
  console.log(result);

}

function calculate(nums, operators){
  
  let temp_output, final_output;
  let result;

  // First -> performe calculation in this order: [*, /, +, -]

  // Handling empty array error
if(operators.length != 0){
  
  let operator;
  

  /*
  
  Encontrar ocorrências de 

  */

  for(let key=0; key < operators.length; key++){  
    operator = operators[key];

    switch(operator) {
      case "*":
        alert(temp_output = nums[key] * nums[key+1]);
        break;
      case '/':
        alert(temp_output = nums[key] / nums[key+1]);
        break
      case '+':
        alert(temp_output = nums[key] + nums[key+1]);
        break
      case '-':
        alert(temp_output = nums[key] - nums[key+1]);
        break;
      
        default:
        console.log(`Sorry, performing math goes wrong.`);

    // Corrigir isso daqui
    operators.splice(key, 1);
    
    nums.splice(key+1, 1);
    nums[key] = temp_output;
    
    result += temp_output;


    }
  }
}

  return result;


}

function result(){

}


main()