// This is the actual moment library
const moment = jest.requireActual('moment')

// When moment is called inside our tests, this is the function that
// actually runs. If there is a timestamp provided, then we want to use it
// returning an instance of the real moment library. Otherwise just return
// an arbitrary default value, 0 in this case
export default (timestamp = 0) => {
  return moment(timestamp)
}
