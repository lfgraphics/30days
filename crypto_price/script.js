let bitcoin = document.getElementById('bitcoin');
let ethereum = document.getElementById('ethereum');
let dogecoin = document.getElementById('dogecoin');
let currency = document.getElementById('currency');

const symbols = {
    inr: '₹',
    usd: '$',
    eur: '€'
}


// let currency = document.getElementById('currency').value;
function updatePrices() {

    let crncy = currency.value;
    const settings = {
        'async': true,
        'crossDomain': true,
        'url': `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=${crncy}`,
        'method': 'get',
        'headers': {}
    }

    $.ajax(settings).done(function (response) {
        bitcoin.innerHTML = `${symbols[crncy]} ${response.bitcoin[crncy]}`
        ethereum.innerHTML = `${symbols[crncy]} ${response.ethereum[crncy]}`;
        dogecoin.innerHTML = `${symbols[crncy]} ${response.dogecoin[crncy]}`;
        // console.log(response.bitcoin)
    });
}

const currencyElement = document.getElementById('currency');
currencyElement.addEventListener('change', updatePrices);

updatePrices();