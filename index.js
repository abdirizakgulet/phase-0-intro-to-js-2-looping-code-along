// Code your solutions in this file
function writeCards(names,occasion){
    let messages=[];
    for (let i=0;i<names.length;i++){
        let message=`Thank you, ${names[i]}, for the wonderful ${ occasion} gift!`;
        messages.push(message);
    }
    return messages;
}
const names=["Guadalupe","Ollie","Aki"];
const occassion="birthday";
const messages=writeCards(names,occassion);
    

function countDown(num){
    for (let i=num;i>=0;i--){
        console.log(i);
    }
}
countDown(10);
