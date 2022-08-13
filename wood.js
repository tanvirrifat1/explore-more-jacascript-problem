/*
1 fixed : per item wood requirements
chair --> 3 ctf
table --> 10 ctf
bed --> 50 ctf

vary : quantity
*/

function woodCalculator( chairQuantity, tableQuantity, bedQuentity){
 const perChairWood = 3;
 const perTableWood = 10;
 const perBedWood = 50;

 const chairWood = chairQuantity * perChairWood;
 const tableWood = tableQuantity * perTableWood;
 const bedWood = bedQuentity * perBedWood;

 const totatlWood = chairWood + tableWood + bedWood;
 return totatlWood;
}

const totatlWood = woodCalculator(2, 2, 5);
console.log(totatlWood);