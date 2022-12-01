// UTC
const dayjs = require("dayjs");
const utc = require('dayjs/plugin/utc')
dayjs.extend(utc)

const time = dayjs()

const defaulttime = time.format()
console.log("pst: ", defaulttime)

const utctime = time.utc().format()
console.log("utc: ", utctime)