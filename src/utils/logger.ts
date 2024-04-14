import logger from "pino";
import dayjs from "dayjs";

const log = logger({
    transport : {
        target : "pino-pretty"
    },
    base : {
        pid : false
    },
    timestamp : () => `,"time": "${dayjs().format('DD-MM-YYYY HH:mm:ss A')}"`
})

export default log;