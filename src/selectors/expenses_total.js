export default (expenses) => {
    let total = 0;

    for(let i=0; i<=expenses.length -1 ; i++) {
        total = total + expenses[i].amount;

    }
    return total;
}