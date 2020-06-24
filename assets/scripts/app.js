console.log('after parsing all files');

const ADD = '+';
const SUBTRACT = '-';
const DIVIDE = '/';
const MULTIPLY = '*';

const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function add() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult + enteredNumber;
    createAndWriteOutput(initialResult, ADD, enteredNumber);
    const logEntry = {
        operation: ADD,
        prevResult: initialResult,
        number: enteredNumber,
        result: currentResult,
    }
    logEntries.push(logEntry)
}

function subtract() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult - enteredNumber;
    createAndWriteOutput(initialResult, SUBTRACT, enteredNumber);
    const logEntry = {
        operation: SUBTRACT,
        prevResult: initialResult,
        number: enteredNumber,
        result: currentResult,
    }
    logEntries.push(logEntry)
}

function divide() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult / enteredNumber;
    createAndWriteOutput(initialResult, DIVIDE, enteredNumber);
    const logEntry = {
        operation: DIVIDE,
        prevResult: initialResult,
        number: enteredNumber,
        result: currentResult,
    }
    logEntries.push(logEntry)
}

function multiply() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult * enteredNumber;
    createAndWriteOutput(initialResult, MULTIPLY, enteredNumber);
    const logEntry = {
        operation: MULTIPLY,
        prevResult: initialResult,
        number: enteredNumber,
        result: currentResult,
    }
    logEntries.push(logEntry)
}

function getUserNumberInput() {
    return parseInt(userInput.value);
}

function createAndWriteOutput(resultBeforeCalc, operator, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

function printLogs() {
    console.table(logEntries)
}

function returnLogs() {
    return logEntries;
}
addBtn.addEventListener('click', add)
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);