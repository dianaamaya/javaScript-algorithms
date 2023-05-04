/**
*
* Write a function that takes a tree node as input, then iterates over it and
* returns an array of ids for RED elements that are found.
*
*/

const arrayIds = []
function searchTree(element, color){

  if(element.color === color){
    arrayIds.push(element.id) ;
  }
  
  if (element?.children?.length) {
       for(let i=0; i < element.children.length; i++){
          searchTree(element.children[i], color);
       }
  }

  return arrayIds
}


const stub = {
	id: 1,
  color: "BLUE",
  children: [
  	{
      id: 2,
      color: "RED",
      children: [
        {
          id: 5,
          color: "RED",
          children: [
            {
              id: 7,
              color: "BLUE",
              children: [
                {
                  id: 11,
                  color: "BLUE",
                  children: [],
                },
                {
                  id: 12,
                  color: "RED",
                  children: [],
                },
                {
                  id: 13,
                  color: "BLUE",
                  children: [],
                },
                {
                  id: 14,
                  color: "RED",
                  children: [],
                }, 
              ],
            },
            {
              id: 8,
              color: "BLUE",
              children: [],
            },
            {
              id: 9,
              color: "BLUE",
              children: [],
            },
            {
              id: 10,
              color: "BLUE",
              children: [],
            },            
          ],
        },
        {
          id: 6,
          color: "RED",
          children: [],
        },
      ],
  	},
    {
      id: 3,
      color: "BLUE",
      children: [],
  	},
    {
      id: 4,
      color: "RED",
      children: [
        {
          id: 15,
          color: "BLUE",
          children: [],
        },
        {
          id: 16,
          color: "RED",
          children: [],
        },
        {
          id: 17,
          color: "BLUE",
          children: [
            {
              id: 18,
              color: "RED",
              children: [],
            },
          ],
        },
        {
          id: 19,
          color: "RED",
          children: [],
        }, 
      ],
  	},
  ]
}


const result = searchTree(stub, "RED")?.sort((a, b) => a - b).toString();
const expect = [2, 4, 5, 6, 12, 14, 16, 18, 19].toString();
console.log(expect === result);
