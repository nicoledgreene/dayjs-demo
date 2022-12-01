// Manipulate
const dayjs = require("dayjs");
const customParseFormat = require('dayjs/plugin/customParseFormat')
dayjs.extend(customParseFormat)

const format = function(dayjsobj) {
  return dayjsobj.format("MM-DD-YYYY h:mm a")
}

const now = dayjs()
const oneYearAgo = now.subtract(1, 'year')
const startOfTomorrow = now.add(1, 'day').startOf('day')

console.log("now: ", format(now))
console.log("one year ago: ", format(oneYearAgo))
console.log("start of tomrrow: ", format(startOfTomorrow))
