const financialData = require('./financial.json');

// console.log('Financial data: ' + getFiancialObject());

function getFiancialObject() {
  var financialObject = financialData;
// how much money was spent in 2014
  function moneySpent(){
    const dateJan = new Date('January 01, 2014 00:00:00');
    const dateDec = new Date('December 31, 2014 23:59:59');
    const timeJan = dateJan.getTime();
    const timeDec = dateDec.getTime();
    let dupa = financialObject[1].detailsOfPayent.date
    

  }
  moneySpent()
 // return financialObject;
}
getFiancialObject()
// TODO (util functions)
