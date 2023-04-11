 /**
  * 
  * Given an array of adjustments and the initial values.
  * Compute the final quantity by adding each change on 
  * top of initial value and group by currency.
  * 
  * @param {*} initialCapacities Initial values
  * @param {*} data Capacities values
  * @returns Object with the currency as key and total as value
  */

 const initialCapacities = {
    EUR: 50000,
    USD: 43000
  };
  
 const data = [{
    total: {
      amount: {
        asset: {currency: 'GBP', type: 'Cash'},
        quantity: 100000,
      },
    },
  }, {
    total: {
      amount: {
        asset: { currency: 'EUR', type: 'Cash' },
        quantity: -200000,
      },
    },
  }]

  // forEach solution
  function getTotal( initialCapacities = {}, data = [] ) {
   
    const totals = { ...initialCapacities }
    data.forEach(element => {
        const currentObj = element.total.amount;
        if (totals[currentObj.asset.currency]) {
            totals[currentObj.asset.currency] += currentObj.quantity 
        } 
        // if we want to show the other currencies in data array ex. GBP
        /*else {
            totals[currentObj.asset.currency] = currentObj.quantity
        }*/
    });
    return totals
  }
  console.log(getTotal(initialCapacities, data))
  
  
  //reduce solution
  function getTotalReduce( initialCapacities = {}, data = [] ) {
   
    return data.reduce((acumulator,currentObj) => {
        if (acumulator[currentObj.total.amount.asset.currency]) {
            acumulator[currentObj.total.amount.asset.currency] += currentObj.total.amount.quantity 
        } /*else {
            acumulator[currentObj.total.amount.asset.currency] = currentObj.total.amount.quantity
        }*/
        return acumulator
    }, initialCapacities)
  }
  console.log(getTotalReduce(initialCapacities, data))
