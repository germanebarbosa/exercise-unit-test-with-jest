let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.1, // us dollar
    "GBP": 0.8, // british pound
}
let oneYenIs = {
    "EUR": 147.46 , // japan yen
    "USD": 133.52 , // us dollar
    "GBP": 166.48, // british pound
}
let onePoundIs = {
    "JPY": 0.006, // japan yen
    "USD": 0.80, // us dollar
    "EUR": 0.89, // british pound
}

function fromDollarToYen(dollar){
    return yen = dollar * oneYenIs.USD
};

function fromEuroToDollar(euro){
    return dollar = euro * oneEuroIs.USD
};

function fromYenToPound(yen){
    return pound = yen * onePoundIs.JPY
};

module.exports = {fromEuroToDollar, fromDollarToYen, fromYenToPound};

