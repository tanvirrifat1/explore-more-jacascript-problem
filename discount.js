/*
1 if ticket number is less then 100, per ticket price : 100
2 if ticket number is more then 100, but less then 200, First 100 tickets will be 100/ticket
    first 100---> 100tk
    rest -------> 90tk
3 if you purches more then 200 tickets
    first 100 ---> 100tk
    101-200 ---> 90tk
    200+ ---> 70tk
*/


function ticketPrice(ticketQuantity){
    const first100Rate = 100;
    const second100Rate = 90;
    const restTicketRate = 70;
    const ticketNUmber = ticketQuantity;
    
    if(ticketNUmber <= 100){
        const price = ticketNUmber * first100Rate;
        return price;
        
    }
    else if( ticketQuantity >= 101  &&  ticketQuantity <= 200){
        const addfirst100Rate = 100 * first100Rate;
        const restTicketQuantity = ticketQuantity - 100;
        const restTicketPrice = restTicketQuantity * second100Rate;
        const totalPrice = addfirst100Rate + restTicketPrice;
        return totalPrice;
    }
    else{
        const first100Rate = 100 * first100Rate;
        const second100Rate = 100 * second100Rate;
        const restTicketQuantity = ticketQuantity - 200;
        const restTicketPrice = restTicketQuantity * restTicketRate;
        const totalCost = first100Rate + second100Rate + restTicketPrice;
        return totalCost;
    }
}

const price = ticketPrice(130);
console.log(price);