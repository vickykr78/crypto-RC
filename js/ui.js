class UI {
    constructor() {
        this.init()
    }
    init() {
        this.printcryptoCurrencies()
    }
    // print the options from the form
    printcryptoCurrencies() {
        cryptoApi.getCryptoCurrencyList()

            .then(data => {
                const cryptoCurrency = data.cryptoCurrency.data

                //    build the <select> from REST API
                const select = document.getElementById('cryptocurrency');
                cryptoCurrency.forEach(currency => {

                    // add the option
                    const option = document.createElement('option')
                    option.value = currency.name;
                    option.appendChild(document.createTextNode(currency.name))
                    select.appendChild(option)
                })
            })
    }

    // print the message and 2 parameters message, className
    printMessage(message, className) {
        const div = document.createElement('div')
        // add the clases
        div.className = className;

        // add the message
        div.appendChild(document.createTextNode(message));
        const messagesDiv = document.querySelector('.messages');

        messagesDiv.appendChild(div);
        // set timeout of 3 sec

        setTimeout(() => {
            document.querySelector('.messages div').remove();
        }, 3000)


    }

    // print the result
    displayResult(result) {


        console.log(result)
        let HTMLTemplate = '';

        HTMLTemplate += ` 
        <div class = "card cyan darken-3">
        <div class = "card-content white-text">
        <span class="card-title">Result</span>
        <p>The price of ${result.name} is % ${result.metrics.market_data.price_usd}</p>
        
        </div>
        </div>
        
        
        `;



        const divResult = document.querySelector('#result');
        divResult.innerHTML = HTMLTemplate;


    }
}
