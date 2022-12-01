// Display
const dayjs = require("dayjs");

// Time from now
const relativeTime = require("dayjs/plugin/relativeTime")
dayjs.extend(relativeTime)

const futureDate = dayjs('2100-01-01').fromNow()
console.log('2100-01-01 is', futureDate)

// Calendar
const calendar = require("dayjs/plugin/calendar")
dayjs.extend(calendar)

const now = dayjs().calendar()
console.log("Calendar: ", now)