const newCases = require('./get-new-cases-by-day');
const totalCase = require('./get-total-cases-by-day');
const getRows = require('./get-rows.js')
const getDate = require('./get-date');
const getTotalCases = require('./get-total-cases')

const fs = require('fs');
const file = fs.readFileSync('./owid-covid-usa-data.csv', 'utf-8')

let arr2d= getRows(file)

let n1 ='';
let n2 = '';
const newCasesBet2Dates = function(strDate1, strDate2){
    
    for ( const arr of arr2d){
        if ( strDate1 === getDate(arr)){
            n1 += getTotalCases(arr)
        }
    }

    for ( const arr of arr2d){
        if ( strDate2 === getDate(arr)){
            n2 += getTotalCases(arr)
        }
    }
    return n2-n1;
    
}

// newCasesBet2Dates('2020-07-12','2020-07-11')

module.exports = newCasesBet2Dates;