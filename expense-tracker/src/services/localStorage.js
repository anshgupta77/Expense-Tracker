const EXPENSES_DATA_KEY = 'expenses_data_key';
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getExpensesFromBackend() {
    const expenseDataString = localStorage.getItem(EXPENSES_DATA_KEY) || "[]";
    const expenses = JSON.parse(expenseDataString);
    await sleep(1000);
    return expenses;
}

export async function setExpensesInBackend(expenses) {
    await sleep(1000);
    const updatedExpensesString = JSON.stringify(expenses);
    localStorage.setItem(EXPENSES_DATA_KEY, updatedExpensesString);
}