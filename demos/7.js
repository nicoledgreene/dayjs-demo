// Timezone
const dayjs = require("dayjs");
const utc = require("dayjs/plugin/utc")
const timezone = require("dayjs/plugin/timezone")
dayjs.extend(utc)
dayjs.extend(timezone)

const format = function(dayjsobj) {
  return dayjsobj.format("MM-DD-YYYY h:mm a")
}

// my (local) timezone
const nowPst = format(dayjs())

const nowEst = format(dayjs.tz(nowPst, "America/Toronto"))

console.log("now in PST: ", nowPst)
console.log("now in EST: ", nowEst)

// set defualt timezone
dayjs.tz.setDefault("Asia/Tokyo")
const nowTokyo = format(dayjs().tz())

console.log("now in Tokyo: ", nowTokyo)

// reset default timezone:
dayjs.tz.setDefault()