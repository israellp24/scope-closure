var a= 'Hello';

function hello(){
    let b= 'Hello World';
    const c = 'Hello World!';
    if(true){
        let d = 'Hello World!!';
        debugger;
    }
}

hello();

//about:blank




const moneyBox = (coins) => {
    var saveCoins = 0;
    const countCoins = (coins)=>{
        saveCoins+=coins;
        console.log('moneyBox: $'+saveCoins);
    }
    return countCoins;
}

let myMoneyBox = moneyBox();
myMoneyBox(4);
myMoneyBox(6);
myMoneyBox(10);