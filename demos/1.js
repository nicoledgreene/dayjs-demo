//Parsing a date object
const dayjs = require("dayjs");

const dayJsNow = dayjs()
console.log('method 1: ', dayJsNow)

//native date
const today = new Date()
const dayJsToday = dayjs(today)
console.log('method 2: ', dayJsToday)

//dayJs object properties:
// '$L': language
// '$d': timestamp
// '$y': year
// '$M': month
// '$D': day
// '$H': hour
// '$m': minute
// '$s': second
// '$ms': millisecond
