// Code your solutions in this file
for(let age = 30; age < 40; age++){
    console.log(`I'm ${age} years old. Happy Birthday to me!`);
    //debugger;
}


const gifts = ["teddy bear", "drone", "doll"];

function wrapGift(gifts) {
    for(let i = 0; i < gifts.length; i++){
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        //debugger;
    }
    return gifts;
} 

wrapGift(gifts);

function writeCards(names, event){
    const newArray = [];
    for(let i = 0; i < names.length; i++){
        newArray[i] = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
    }
    return newArray;
}

function countDown(num){
    while(num >= 0){
        console.log(num)
        num--;
    }
}