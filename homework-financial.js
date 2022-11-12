const financialData = require('./financial.json');

// console.log('Financial data: ' + getFiancialObject());

function getFiancialObject() {
  var financialObject = financialData;
// how much money was spent in 2014
  function moneySpent(){
    const dateJan = new Date('January 01, 2014 00:00:00');
    const dateDec = new Date('December 31, 2014 23:59:59');
    const timeJan = dateJan.getTime(); // time in ms
    const timeDec = dateDec.getTime();
    let sumUpCosts = 0;
    for(let i = 0; i < financialData.length; i++){
      var date = financialData[i].detailsOfPayent.date;
      var datearray = date.split("-");
      var newdate = datearray[1] + '-' + datearray[0] + '-' + datearray[2];
      let dateInMiliseconds = Date.parse(newdate)
      if(dateInMiliseconds < timeDec && dateInMiliseconds > timeJan){
        sumUpCosts = sumUpCosts + parseFloat(financialData[i].cost)
      }
    }
    console.log('Costs in 2014 = ' + sumUpCosts.toFixed(2)) // 46794.860000000015 XD
  }
  // moneySpent()

  function earningsPerCompany(){
    let earningsECSTASIA = 0;
    let earningsMANGELICA = 0;
    let earningsCODAX = 0;
    let result = financialData.reduce((count, currIndex) => {
      if(currIndex.detailsOfPayent.company === "ECSTASIA"){
        return earningsECSTASIA += parseFloat(currIndex.cost)
      } else if(currIndex.detailsOfPayent.company === "MANGELICA"){
        return earningsMANGELICA += parseFloat(currIndex.cost)
      } else if(currIndex.detailsOfPayent.company === "CODAX"){
        return earningsCODAX += parseFloat(currIndex.cost)
      } 
    }, 0)
    console.log('ECSTASIA costs ' + earningsECSTASIA);
    console.log('MANGELICA costs ' + earningsMANGELICA);
    console.log('CODAX costs ' + earningsCODAX);
  }
  // earningsPerCompany()

  function spendingsPerTransactionType(){
    let type1 = 0;
    let type2 = 0;
    let type3 = 0;
    let type4 = 0;
    let type5 = 0;
    const result = financialData.filter((currentIndex) => {
      if(currentIndex.detailsOfPayent.Type === 1){
        return type1 += parseFloat(currentIndex.cost)
      } else if(currentIndex.detailsOfPayent.Type === 2){
        return type2 += parseFloat(currentIndex.cost)
      } else if(currentIndex.detailsOfPayent.Type === 3){
        return type3 += parseFloat(currentIndex.cost)
      } else if(currentIndex.detailsOfPayent.Type === 4){
        return type4 += parseFloat(currentIndex.cost)
      } else if(currentIndex.detailsOfPayent.Type === 5){
        return type5 += parseFloat(currentIndex.cost)
      }
    })
    console.log('Type 1 costs ' + type1.toFixed(2))
    console.log('Type 2 costs ' + type2.toFixed(2))
    console.log('Type 3 costs ' + type3.toFixed(2))
    console.log('Type 4 costs ' + type4.toFixed(2))
    console.log('Type 5 costs ' + type5.toFixed(2))
  }
  // spendingsPerTransactionType()
  // TO DO!!!
  // function spendingsByMonth(){
  //   // let fullDate = currentIndex.detailsOfPayent.date;
  //   // let monthDate = fullDate.slice(3, 5);
  //   const result = financialData.reduce((accumulator, element) => {

  //   }, 0)
  // }
  // spendingsByMonth()
 // return financialObject;
}
getFiancialObject()
// TODO (util functions)
