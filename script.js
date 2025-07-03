//Cotação de moedas
const USD = 5.41
const EUR = 6.36
const GBP = 7.39



const form = document.querySelector("form")
const amount = document.querySelector("#amount")
const currency = document.querySelector("#currency")
const footer = document.querySelector("main footer")
const description = document.querySelector("#description")
const result = document.querySelector("#result")


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

function convertCurrency(amount, price, symbol){
 
//Aplica a classe que exibe o resultado no try, e remove no catch
    try {
        //Exibindo a cotação da moeda selecionada
        description.textContent = `${symbol} 1 = ${formatCurrency(price)}`

        //Verifica se o valor é válido (vazio ou zero)
        if (amount === "" || amount === "0"){
            return alert("Por favor, insira um valor válido.")
        }
        
        //Calcula o total da conversão
        let total = amount * price
        
        //Formata o total para real brasileiro
        total = formatCurrency(total).replace("R$", "")
        result.textContent = `${total} Reais`

        //Exibindo o resultado da conversão
        footer.classList.add("show-result")
        
    }catch(error){
        console.log(error)
        footer.classList.remove("show-result")
        alert("Não foi possivel realizar sua converção, tente novamente mais tarde.")
    }
}

//Formata a moeda em real brasileiro
function formatCurrency(value) {
    //Transforma o valor em número, para formatar no padrão BRL
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })
}


