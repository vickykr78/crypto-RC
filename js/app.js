// inctanciate the class

const cryptoApi = new CryptoAPI();
const ui = new UI();

// create the variables

const form = document.getElementById('form')




// create eventlisteners
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // read currency
    const currencySelect = document.getElementById('currency').value;
    // read cryptocurrency
    const cryptoCurrencySelect = document.getElementById('cryptocurrency').value;

    // validate that the select have something
    if (currencySelect == '' && cryptoCurrencySelect == '') {
        ui.printMessage('All the fields are mandatory', 'deep-orange darken-4 card-panel')
    } else {

        // query the rest api

        cryptoApi.queryApi(currencySelect, cryptoCurrencySelect)

            .then(data => {

                const result = data.result.data
                result.forEach(currency => {
                    if (cryptoCurrencySelect === currency.name)
                        ui.displayResult(currency)
                })
            })



    }

})
