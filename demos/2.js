// Formating
const dayjs = require("dayjs");
// use customParseFormat plugin
const customParseFormat = require('dayjs/plugin/customParseFormat')
dayjs.extend(customParseFormat)

const withoutTime = dayjs().format("MM-DD-YYYY")
console.log("Date only:", withoutTime)

const withTime = dayjs().format("MM-DD-YYYY HH:mm:ss a")
console.log("With time:", withTime)