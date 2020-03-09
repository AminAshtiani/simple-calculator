const defaultResult = 0;
let currentResult = 0;
const logEntries = [];

function getUserNumberInput() {
    return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

function calculateResult(calculationType) { // calculationType ADD SUBTRACT MULTIPLY DIVIDE
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    let mathOperator;
    if (calculationType !== 'ADD' &&
        calculationType !== 'SUBTRACT' &&
        calculationType !== 'MULTIPLY' &&
        calculationType !== 'DIVIDE' ||
        !enteredNumber) {
        return;
    }
    if (calculationType === 'ADD') {
        currentResult += enteredNumber;
        mathOperator = "+";
    } else if (calculationType === 'SUBTRACT') {
        currentResult -= enteredNumber;
        mathOperator = "-";

    } else if (calculationTypr === 'DIVIDE') {
        currentResult /= enteredNumber;
        mathOperator = "/";

    } else if (calculationType === 'MULTIPLY') {
        currentResult *= enteredNumber;
        mathOperator = "*";
    }
    createAndWriteOutput(mathOperator, initialResult, enteredNumber);
    createAndPushLog(mathOperator, enteredNumber, initialResult)
}




function createAndPushLog(operator, number, prevResult) {
    const logEntry = {
        number,
        operator,
        result: currentResult,
        prevResult
    };
    logEntries.push(logEntry);
}

function add() {
    calculateResult('ADD');
}

function subtract() {
    calculateResult('SUBTRACT');
}

function divide() {
    calculateResult('DIVIDE');
}

function multiply() {
    calculateResult('MULTIPLY');
}

addBtn.addEventListener("click", add);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
subtractBtn.addEventListener("click", subtract);
subtractBtn.addEventListener("click", subtract);