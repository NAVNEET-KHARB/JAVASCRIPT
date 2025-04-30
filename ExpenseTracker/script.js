document.addEventListener("DOMContentLoaded",() => {
    const expenseForm = document.getElementById("expense-form");
    const expenseNameInput = document.getElementById("expense-name");
    const expenseAmountInput = document.getElementById("expense-amount");
    const expenseList = document.getElementById("expense-list");
    const totalAmountDisplay = document.getElementById("total-amount");

    let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
    renderExpenses();

    expenseForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const name = expenseNameInput.value.trim();
        const amount = parseFloat(expenseAmountInput.value.trim());

        if(name !== "" && !isNaN(amount) && amount>0){
            const newExpense = {
                id : Date.now(),
                name,
                amount
            };
            expenses.push(newExpense);
            saveExpenses();
            renderExpenses();
        }

        expenseNameInput.value = "";
        expenseAmountInput.value = "";
    })

    expenseList.addEventListener("click", (event) => {
        if(event.target.tagName === "BUTTON"){
            const expId = parseInt(event.target.getAttribute("data-id"));
            const expense = expenses.find((item) => item.id === expId);
            expenses.pop(expense);
            saveExpenses();
            renderExpenses();
        }
    })

    function saveExpenses(){
        localStorage.setItem("expenses",JSON.stringify(expenses));
    }

    function renderExpenses(){
        expenseList.innerHTML = "";
        if(expenses.length>0){
            let totalAmount = 0;
            expenses.forEach((expense) => {
                totalAmount += expense.amount;
                const expenseItem = document.createElement("li");
                expenseItem.innerHTML = `
                <span>${expense.name} - $${expense.amount}</span>
                <button data-id = "${expense.id}">Remove</button>
                `
                expenseList.appendChild(expenseItem);
            });
            totalAmountDisplay.innerText = `${totalAmount}`;
        }
    }
});