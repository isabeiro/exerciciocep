

    const formulario = document.querySelector('#formulario')
    
    const cep = document.querySelector('#inputCep')
    const rua = document.querySelector('#inputRua')
    const bairro = document.querySelector('#inputBairro')
    const cidade = document.querySelector('#inputCidade')
    const estado = document.querySelector('#inputEstado')
    const ibge = document.querySelector('#inputIbge')

    function pesquisa() {    
        
        function transformarEmJson(dados) {
            return dados.json()
        }
        
        function exibirNaTela(dados) {
            rua.value = `${dados.logradouro}`
            bairro.value = `${dados.bairro}`
            cidade.value = `${dados.localidade}`
            estado.value = `${dados.uf}`
            ibge.value = `${dados.ibge}`
        }
        
        function exibirErro() {
            console.log('Deu erro!')
        }
        
        fetch(`https://viacep.com.br/ws/${cep.value}/json/`)
        .then(transformarEmJson)
        .then(exibirNaTela)
        .catch(exibirErro)
            
    }    
    



    
