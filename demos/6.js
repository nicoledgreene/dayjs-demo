// I18N (internationalization)
const dayjs = require("dayjs");
require("dayjs/locale/es-mx")
const localeData = require("dayjs/plugin/localeData")
dayjs.extend(localeData)

const spanishInstance = dayjs().locale("es-mx")
const months = spanishInstance.localeData().months()
const weekdays = spanishInstance.localeData().weekdays()
console.log("months: ", months)
console.log("weekdays: ", weekdays)
