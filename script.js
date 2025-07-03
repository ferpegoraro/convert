//Cotação de moedas
const USD = 5.41
const EUR = 6.36
const GBP = 7.39



const form = document.querySelector("form")
const amount = document.querySelector("#amount")
const currency = document.querySelector("#currency")
const footer = document.querySelector("main footer")

//Manipulando o input amount para receber somente números
amount.addEventListener("input", () => { 
    const hasCharactersRegex = /\D+/g
    amount.value = amount.value.replace(hasCharactersRegex, "")
})

//Capturando o evento de submit do formulário.
form.addEventListener("submit", (event) => {
    event.preventDefault()
    
    switch(currency.value){
        case "USD":
            convertCurrency(amount.value, USD, "US$")
            break
        case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break
        case "GBP":
            convertCurrency(amount.value, GBP, "£")
            break
    }
})

// Função para converter a moeda

function convertCurrency(amount, currency, symbol){
 
//Aplica a classe que exibe o resultado no try, e remove no catch
    try {
        const result = amount * currency
        footer.classList.add("show-result")
        console.log(result)
    }catch(error){
        console.log(error)
        footer.classList.remove("show-result")
        alert("Não foi possivel realizar sua converção, tente novamente mais tarde.")
    }
}

