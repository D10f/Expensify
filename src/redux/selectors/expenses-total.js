export default (expenses) => expenses.reduce((acc, val) => acc + val.amount, 0)
