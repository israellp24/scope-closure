const moneyBox = (coins) => {
    var saveCoins = 0;
    saveCoins +=coins;
    console.log('moneyBox: $'+saveCoins);
}

moneyBox(5);
moneyBox(10);


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