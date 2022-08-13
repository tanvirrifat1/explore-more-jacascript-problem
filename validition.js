 function add(num1, num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'please enter a anumber';
    }
    return num1 + num2;
 }
 const total = add(12, 45);
 console.log(total);

 function multiply(num1, num2){
    console.log(num1, num2);
    return num1 * num2;
 }
 const output = multiply(12 , 45);
 console.log(output);