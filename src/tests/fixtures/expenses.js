import moment from 'moment'

export default [{
  id: '1',
  description: 'Onions',
  amount: 1200,
  note: '',
  createdAt: 0
}, {
  id: '2',
  description: 'Carrots',
  amount: 80,
  note: 'They are purple!',
  createdAt: moment(0).subtract(3, 'months').valueOf()
}, {
  id: '3',
  description: 'Chocolate',
  amount: 375,
  note: 'Dark chocolate',
  createdAt: moment(0).add(2, 'weeks').valueOf()
}, {
  id: '4',
  description: 'Apple Pie',
  amount: 860,
  note: '',
  createdAt: moment(0).add(4, 'months').valueOf()
}]
