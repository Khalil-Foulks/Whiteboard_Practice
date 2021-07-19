function isFirstComeFirstServed(takeOutOrders, dineInOrders, servedOrders) {

    // Check if we're serving orders first-come, first-served
    
    // create 2 new empty sets takeout/ dinein
    // loop through take out arr store each order in takeout sets
    // loop through dine arr store each order in dinein sets
    // create dineinactual takeoutactual arrs 
    // loop through served arr
    // check if cur element in 1 of the sets
    // push to corresponding actual arr
    // if takeout arr matches takeoutactual and dineinorders matches dineinactual than return true otherwise return false
  
    if ((takeOutOrders.length + dineInOrders.length) != servedOrders.length){
      return false
    }
  
    let takeOut = new Set()
    let dineIn = new Set()
    let takeOutActual = []
    let dineInActual = []
    
    takeOutOrders.forEach((order) => takeOut.add(order))
    dineInOrders.forEach((order) => dineIn.add(order))  
    
    // console.log(takeOut.values())
    // console.log(dineIn.values())
    
    for(i = 0; i < servedOrders.length; i++){
      let cur = servedOrders[i]
      if(takeOut.has(cur)) {
        takeOutActual.push(cur)
      }
      if(dineIn.has(cur)) {
        dineInActual.push(cur)
      }
    }
    
    // console.log(`takeOut ${takeOutOrders} vs ${takeOutActual}`)
    // console.log(`dineIn ${dineInOrders} vs ${dineInActual}`)
    
    if ( comparison(takeOutOrders,takeOutActual) === true && comparison(dineInOrders,dineInActual) === true) {
      return true
    }
    
    return false;
  }
  
  function comparison (a, b){
    return a.length === b.length && a.every((v, i) => v === b[i]);
}
  