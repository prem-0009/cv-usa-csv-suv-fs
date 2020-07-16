const fs = require('fs');
const file = fs.readFileSync('./owid-covid-usa-data.csv', 'utf-8')

const newCases = require('./get-new-cases-by-day');
const totalCase = require('./get-total-cases-by-day');
const getRows = require('./get-rows.js')
const getDate = require('./get-date');

const command = process.argv[2];
const date = process.argv[3];

const arr2d = getRows(file);
// const dat = getDate(arr2d)
// console.log(getDate(arr2d)[3])
// console.log(arr2d)
// if ( command === 'new'  &?& date ===getDate() )

for ( const arr of arr2d){
    // console.log(arr);
    if ( command === 'new' && date === getDate(arr)){
        // console.log('hello') //w
        console.log('new cases:',newCases(date, arr2d))
    } else if ( command === 'total' && date === getDate(arr)){
        console.log('total cases:',totalCase(date, arr2d))
    }
}

// console.log(getRows(file))
// if ( command === 'new' && date === getDate(arr(file))){
//       console.log(newCases(date, arr))
// }



// if ( command === 'newcases' && date === getDate(getRows(file)) ){
//     console.log(newCases(date, getRows(file)))
// }