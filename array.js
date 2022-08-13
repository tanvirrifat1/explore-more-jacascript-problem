const country = 'Bangladesh';
const age = 52;
const inIndependent = true;
const student = {id : 123, class: 11, name: 'Agun' };
const friends = [13, 14, 11, 17, 21, 16, 15, 21];
function add(num1 , num2){
    return num1 + num2;
}

console.log(typeof country);
console.log(typeof age);
console.log(typeof inIndependent );
console.log(typeof student);

//cheak array
console.log( Array.isArray(friends));
console.log(typeof add);

/................../
console.log(friends.includes(19));
console.log(friends.includes(21));

if(friends.indexOf(252) !== -1){

}

//concar
const newFriends = [11, 12, 13, 14];
const allFriends = newFriends.concat(friends);
console.log(allFriends);