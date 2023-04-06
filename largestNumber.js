/**
  *  Determine the largest number in an array of objects
  *
  *  The function loop through the array received as a parameter, it obtains 
  *  the value of type string that is in the 'name' field.
  *  Through regular expressions it obtains the number that is in the string and 
  *  compares it with the values ​​that have already been checked.
  *
  *  @params {Array} items - array of objects to be checked
  *  @return {number} largest - The largest number found in the objects 
  *                   (if there are not numbers the value will be 0)
  */

const getItemsMaxNumber = items => { 

    //numbers represented in binary, hexadecimal and octal could also be validated
    const regex = /([+-])?(\d[\d]*)(\.\d*)?([e|E]\d*)?/gi;
    
    // get only numbers
    let largest = items.map((item) => item?.name?.toString().match(regex))

    // change the array depth
    largest = largest.toString().split(",")
    // sort array 
    largest.sort((a, b) => b - a)
	
    // return the largest number
    return largest[0] || 0;
};

/*integers = should be 11*/
const items = [ { name: 'item 1' }, { name: 'item -2' }, { name: 'item 11' }, { name: 'item 3' }, { name: 'item 10' } ];

/*scientific notation = should be 124.35*/
//const items = [ { name: 'item 1.1435e2' }, { name: 'item 1.2435E2' }, { name: 'item -1.3435E2' }, { name: 'item 23' }, { name: 'item 10' } ];

/*no numbers = should be 0*/
//const items = [ { name: 'item' }, { name: 'item' }, { name: 'item' }, { name: 'item' }, { name: 'item' } ];

/*decimals = should be 34*/
//const items = [ { name1: 'item 29' }, { name: 'item 5.1 value' }, { name: 'item -23' }, { name: 'item -3.5 example' }, { name: 34 } ];

//get the largest
console.log(getItemsMaxNumber(items)); 



