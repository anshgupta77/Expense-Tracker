const EXPENSES_DATA_KEY = 'expenses_data_key';
const sleep = (ms) => new Promise((resolve, reject) => { 
    if(ms < 0){
        reject(new Error("Time cant not be negative"));
    }
    else{
        setTimeout(resolve, ms);
    }

})



export async function getExpensesFromBackend() {
    try{
        const expenseDataString = localStorage.getItem(EXPENSES_DATA_KEY) || "[]";
        const expenses = JSON.parse(expenseDataString);
        await sleep(-4000);
        return expenses;

    }catch(err){
        return err;
    }
}

export async function setExpensesInBackend(expenses) {
    await sleep(-4000);
    const updatedExpensesString = JSON.stringify(expenses);
    localStorage.setItem(EXPENSES_DATA_KEY, updatedExpensesString);
}