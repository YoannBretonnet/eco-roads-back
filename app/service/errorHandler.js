//~import modules
import { formattedDate } from "../utils/formattedDate.js";
import * as fs from "fs";

//~ resolve __dirname
import { resolve, join } from "path";
const __dirname = resolve(`./app/services`);
// resolve will define your root file

function errorLoggerHandling(err, req, res) {
    const actualDate = new Date();

    // format error message : Date + url + message
    const logMessage = `${actualDate.toLocaleString()} - ${req.url} - ${err.message}\r`;

    // date format YYYY-MM-DD
    const fileName = `${formattedDate}.log`;

    // create a log and write it in your file
    fs.appendFile(join(__dirname, `../../logs/${fileName}`), logMessage, (error) => {
        if (error) console.log(error);
    });
}

export { errorLoggerHandling };
