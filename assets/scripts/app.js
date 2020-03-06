 const defaultResult = 0;
 let currentResult = 0;
 const logEntries = [];

 function getUserNumberInput() {
     return parseInt(userInput.value);
 }

 function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
     const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
     outputResult(currentResult, calcDescription)
 }

 function createAndPushLog(operator, number, prevResult) {
     const logEntry = {
         number,
         operator,
         result: currentResult,
         prevResult,
     }
     logEntries.push(logEntry);
 }

 function add() {
     const enteredNumber = getUserNumberInput();
     const initialResult = currentResult;
     currentResult = currentResult + enteredNumber;
     createAndPushLog('+', enteredNumber, initialResult);
     createAndWriteOutput('+', initialResult, enteredNumber);
 }


 function subtract() {
     const enteredNumber = getUserNumberInput();
     const initialResult = currentResult;
     currentResult = currentResult - enteredNumber;
     createAndPushLog('-', enteredNumber, initialResult);
     createAndWriteOutput('-', initialResult, enteredNumber);
 }

 function divide() {
     const enteredNumber = getUserNumberInput();
     const initialResult = currentResult;
     currentResult = currentResult / enteredNumber;
     createAndPushLog('/', enteredNumber, initialResult);
     createAndWriteOutput('/', initialResult, enteredNumber);
 }

 function multiply() {
     const enteredNumber = getUserNumberInput();
     const initialResult = currentResult;
     currentResult = currentResult * enteredNumber;
     createAndPushLog('*', enteredNumber, initialResult);
     createAndWriteOutput('*', initialResult, enteredNumber);
 }


 addBtn.addEventListener('click', add);
 multiplyBtn.addEventListener('click', multiply);
 divideBtn.addEventListener('click', divide);
 subtractBtn.addEventListener('click', subtract);