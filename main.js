function eveenify(element){
    if(element % 2 == 0){
        console.log(element, "is even number");
    }
    else{
        console.log(element*2, "is odd number");
    }
}
function ifLoop(number){
    for(var i=0; i<number.length; i++){
        var num = number[i];
        eveenify(num);
    }
    
}

var number = [12, 15, 9, 34, 32, 5, 8, 10];
var friend = [14, 13, 20, 14, 42, 15, 18, 10];

ifLoop(number)
ifLoop(friend);
