// Create a functional Calculator Object [OK]

var Calculator = {
  body: document.getElementById('calculatorBody'), // const
  display: document.getElementById('display'),     // let
  btnsInput: document.querySelectorAll('.btn'),
  charsLimit: document.querySelector('#limitChecker'),     // let

  operators: ["*", "/", "+", "-"],
  miscBtns: ["C", "AC"],
  historyMemory: []
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
}





// MEU FOCO DE HOJE!!!
function splitString(str){
  
  // let thePerfectString = "19+86*3";
  let arrayNums, arrayOperators;
  let numRegex, operatorsRegex

  // TODO encontrar forma de separar TODOS os operadores encontrados  

  numRegex = /\d+/g;
  operatorsRegex = /[*/+-]/g;
  
  arrayNums = [...str.matchAll(numRegex)];
  arrayOperators = [...str.matchAll(operatorsRegex)];

  // TODO Create a handling error
  calculate(arrayNums, arrayOperators);

}



function calculate(nums, operators){
  
  let temp;
  let result;

  // Find operator following the PEMDA rule
      // identificar index
  

/* A partir do operador, efetuar operação 
  inicial: recolocar resultado
  final: eliminar número posterior



*/


  // 0, 1
  // 0

  // a, a+1
  // a


  // n-1, n
  // n-1

    // Separate from num

  while(operators.length != 0){
    switch (operators) {
      case '*':
        
        console.log(operators.findIndex("*"));
        result = nums[nums.length-1] * nums[nums.length-2];
        break;
      case '/':
        output = nums[nums.length-1] * nums[nums.length-2];
        break
      case '+':
        output = nums[nums.length-1] * nums[nums.length-2];
        break
      case '-':
        output = nums[nums.length-1] * nums[nums.length-2];
        break;
      
        default:
        console.log(`Sorry, performing math goes wrong.`);
    }


    operators.pop();

}

  return result;


}

function result(){

}


main()

/*
Buttons

C  - clear last digits
AC - clear all operation and numbers from display, taking display's values equal 0

Warning

ERR - conditions to pop up error on calculator screen
1. User can see 'ERR' displayed if any operation would exceed the 8 digit maximum.

*/




