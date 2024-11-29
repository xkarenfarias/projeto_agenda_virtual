const form = document.getElementById('formulario')
const nome = []
const contato = []

let linhas = '';

    form.addEventListener('submit', function (e){
        e.preventDefault()

        adicionaLinha()
        atualizaTabela()
    })

    function adicionaLinha() {
        const inputNome = document.getElementById('nome-contato')
        const inputContato = document.getElementById('numero-contato')

        if(contato.includes(inputContato.value)){
            alert(`Contato ${inputContato.value} já incluído.`)

        } else {
        nome.push(inputNome.value)
        contato.push(inputContato.value)

        let linha = '<tr>'
        linha += `<td>${inputNome.value}</td>`
        linha += `<td>${inputContato.value}</td>`
        linha += '</tr>'

        linhas += linha
        }

        inputNome.value = '';
        inputContato.value = '';
    }


    function atualizaTabela() {
        const corpoTabela = document.querySelector('tbody')
        corpoTabela.innerHTML = linhas;
    }