const fs = require("fs");
const file = fs.readFileSync("./owid-covid-usa-data.csv", "utf-8");

const newCases = require("./get-new-cases-by-day");
const totalCase = require("./get-total-cases-by-day");
const getRows = require("./get-rows.js");

const totalCasediffBetweenDates = require("./stretch-get-diff-cases-bet-2dates.js");

const command = process.argv[2];
const date = process.argv[3];
const date2 = process.argv[4];

const arr2d = getRows(file);

if (!command || !date) {//need some other condition too
  console.log(
    `please input in below format.\n1.new dates\n  to get new cases for this date\n
2.total dates\n   to get total case for this date\n
3.difference-between date1 date2\n   to get difference between total case between these dates`
  );
} else if (command === "new") {
  console.log("new cases", newCases(date, arr2d));
} else if (command === "total") {
  console.log("total cases:", totalCase(date, arr2d));
} else if (command === "difference-between") {
  console.log(
    "difference in total cases between 2 dates",
    totalCasediffBetweenDates(date, date2)
  );
}
