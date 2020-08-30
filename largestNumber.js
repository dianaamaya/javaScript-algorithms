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

    //initial values
    let largest = 0;
    let currentvalue=0;
    const regex = /([+-])?(\d[\d]*)(\.\d*)?([e|E]\d*)?/;
    //numbers represented in binary, hexadecimal and octal could also be validated

    // loop array 
	  items.forEach(value => {

  		// check if there is a string value in name field
  		if(typeof(value.name) !== 'string') return;

  		// find number in the regular expression
      currentvalue = regex.exec(value.name);
      //console.log(currentvalue[0]);
          
      // only if there is a number in the string, compare it 
      //with the currently largest (if it is bigger, update the value)
  		if(currentvalue && currentvalue[0] > largest){
  			largest = parseFloat(currentvalue);
  		}	
  		
  	})
	
	// it returns the largest number
	return largest;
};

/*integers = should be 11*/
const items = [ { name: 'item 1' }, { name: 'item -2' }, { name: 'item 11' }, { name: 'item 3' }, { name: 'item 10' } ];

/*scientific notation = should be 124.35*/
//const items = [ { name: 'item 1.1435e2' }, { name: 'item 1.2435E2' }, { name: 'item -1.3435E2' }, { name: 'item 23' }, { name: 'item 10' } ];

/*no numbers = should be 0*/
//const items = [ { name: 'item' }, { name: 'item' }, { name: 'item' }, { name: 'item' }, { name: 'item' } ];

/*decimals = should be 5.1*/
//const items = [ { name1: 'item 29' }, { name: 'item 5.1 value' }, { name: 'item -23' }, { name: 'item -3.5 example' }, { name: 34 } ];

//get the largest
console.log(getItemsMaxNumber(items)); 



