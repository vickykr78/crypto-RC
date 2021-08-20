class CryptoAPI{
//    query the rest api
async queryApi(currency, cryptocurrency){
    
const url = await fetch('https://data.messari.io/api/v2/assets?with-metrics&with-profiles')

// return this as json
const result = await url.json();

// return this as an object
return{
    result
   
}

}



    // get all the cryptocurrencies

    async getCryptoCurrencyList(){
const url = await fetch('https://data.messari.io/api/v2/assets?with-metrics&with-profiles')

// return this as json 
const cryptoCurrency = await url.json();

// return this as an object
return{
    cryptoCurrency
}
}


    
}