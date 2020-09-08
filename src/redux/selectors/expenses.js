import moment from 'moment'

export default (expenses, { text, startDate, endDate, sortBy }) => {
  return expenses.filter(expense => {
    const createdAtMoment = moment(expense.createdAt)
    const startDateMatch = startDate ? createdAtMoment.isSameOrAfter(startDate, 'day') : true
    const endDateMatch = endDate ? createdAtMoment.isSameOrBefore(endDate, 'day') : true
    // const startDateMatch = typeof startDate !== 'number' || expense.createdAt > startDate
    // const endDateMatch = typeof endDate !== 'number' || expense.createdAt < endDate
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())

    return startDateMatch && endDateMatch && textMatch
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1
    }

    if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1
    }
  })
}
