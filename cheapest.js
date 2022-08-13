const phones = [
    { name : 'Samsung', camera : 12, storage : '132gp', price : 36000, color : 'sliver'},
    { name : 'Walton', camera : 12, storage : '132gp', price : 22000, color : 'sliver'},
    { name : 'iphone', camera : 12, storage : '132gp', price : 82000, color : 'sliver'},
    { name : 'Xioami', camera : 12, storage : '132gp', price : 52000, color : 'sliver'},
    { name : 'Oppo', camera : 12, storage : '132gp', price : 20000, color : 'sliver'},
    { name : 'Nokia', camera : 5, storage : '132gp', price : 44000, color : 'sliver'},
    { name : 'HTC', camera : 12, storage : '132gp', price : 62000, color : 'sliver'},
];

function cheapestPhone(phones){
    let cheapest = phones[0];
    for (let i = 0; i < phones.length; i++){
        const phone = phones[i];
        if(phone.price < cheapest.price){
            cheapest = phone;
        }
    }
    return cheapest;
}

const mySelection = cheapestPhone(phones)
console.log(mySelection);