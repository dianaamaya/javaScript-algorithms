/**
  * Create a depth object from a flat object
  *
  * The function loops through each key of the flat object. 
  * The key is divided by the "_" character, resulting in 
  * an array. By means of the reducing function the subscripts 
  * are added to the previously defined object (deepObject)
  *  
  * @param {Object} input - initial flat object 
  * @return {Object} deepObject - new deep object 
  */

const deepCreate = input =>{

  let deepObject={}

  Object.keys(input).forEach(value => 
    value.split('_').reduce( (before, current, index, vector) => {
      (index == vector.length-1 ? before[current] = input[value] : (typeof before[current] == "undefined" ? before[current] = {}:null))
      return before[current]
    } , deepObject)
  )

  return deepObject;

}


const input = {
  TEST_INPUT: 1,
  A_B_C: 'OK',
  A_B_D: 'TEST',
  MAX: '1',
};
/*
const output = {
  test: {
    input: 1,
  },
  a: {
    b: {
      c: 'OK',
      d: 'TEST',
    },
  },
  max: '1',
};
*/
console.log(deepCreate(input));