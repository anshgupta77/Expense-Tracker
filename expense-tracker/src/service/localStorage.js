const EXPENSES_DATA_KEY = 'expenses_data_key';

export function getExpensesFromLocals() {
    const expensesDataString = localStorage.getItem(EXPENSES_DATA_KEY) || '[]';
    const expenses = JSON.parse(expensesDataString);
    return expenses;
}

export function setExpensesInLocals(expenses) {
    const updatedExpensesString = JSON.stringify(expenses);
    localStorage.setItem(EXPENSES_DATA_KEY, updatedExpensesString);
}