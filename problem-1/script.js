function tipcalculator(bill){
     var parcentage
     if (bill<50) {parcentage = .2 }
     else if(bill > 50 && bill < 200){parcentage = .15}
     else{   parcentage = .1 }
     return parcentage*bill
}
// console.log(tipcalculator(199))

var bills = [124,48,268]
// console.log(bills)
var tips ="Total_TIP\'S : " +   [tipcalculator(bills[0]),
            tipcalculator(bills[1]),
            tipcalculator(bills[2])]
console.log(tips)

var totalbill = "Total_BIL\'S : " +  [bills[0] + tips[0],
                bills[1] + tips[1],
                bills[2] + tips[2]]
console.log(totalbill)