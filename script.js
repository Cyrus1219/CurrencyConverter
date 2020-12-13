const amount_1 = document.getElementById('amount-one')
const amount_2 = document.getElementById('amount-two')
const currency_1 = document.getElementById('currency-one')
const currency_2 = document.getElementById('currency-two')
const rateEl = document.getElementById('rate')
const swap = document.getElementById('swap')

// select list has a change event !

function converter(){

    // console.log(currency_1.value);
    fetch(  ` https://v6.exchangerate-api.com/v6/30f2948672e8b071b63c0477/latest/${currency_1.value}`)
    .then(res => res.json())
    .then(data =>{

        const rate = data.conversion_rates[currency_2.value]
        // console .log(rate)
        rateEl.innerText = ` 1 ${currency_1.value} = ${rate} ${currency_2.value}`

        amount_2.value = (amount_1.value * rate ).toFixed(2)

    })
}

swap.addEventListener('click',()=>{
    const temp = currency_1.value;
    currency_1.value = currency_2.value;
    currency_2.value = temp;
    converter()

})

currency_1.addEventListener('change',converter);
currency_2.addEventListener('change',converter);
amount_1.addEventListener('input',converter);
amount_2.addEventListener('input',converter);

