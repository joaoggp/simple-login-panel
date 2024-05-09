class usuario {
    constructor(nome, senha) {
        this.nome = nome
        this.senha = senha
    }
}

let bancoDeDados = []

document.getElementById('login-submit').addEventListener('click', logarSistema)
document.getElementById('register-submit').addEventListener('click', cadastrarUsuario)
const aviso = document.getElementById('advice-user')

avisoFunc = (advcText) => {
    switch (advcText) {
        case 1:
            aviso.style.color = "green"
            aviso.innerText = 'Logado no Sistema!'
            setTimeout(() => {
                aviso.innerText = ''
            }, "4000")
            return
        case 2:
            aviso.style.color = "green"
            aviso.innerText = 'Usuário Cadastrado com Sucesso!'
            setTimeout(() => {
                aviso.innerText = ''
            }, "4000")
            return
        case 3:
            aviso.style.color = "red"
            aviso.innerText = 'Senha Incorreta!'
            setTimeout(() => {
                aviso.innerText = ''
            }, "4000")
            return
    }
    aviso.style.color = "red"
    aviso.innerText = advcText
    setTimeout(() => {
        aviso.innerText = ''
    }, "4000")
}

camposVazios = (nome, senha) => {
    if (nome === '' && senha === '') {
        avisoFunc("Usuário ou Senha não informados!")
        return false
    } else {
        return true
    }
}

function cadastrarUsuario() {
    let nomeUsuario = document.getElementById('user-input')
    let senhaUsuario = document.getElementById('user-pass')

    if (camposVazios(nomeUsuario.value, senhaUsuario.value) === true) {
        let verificador = bancoDeDados.find(user => user.nome === nomeUsuario.value)
        if (verificador) {
            avisoFunc("Usuário já cadastrado!")
            return
        }
        else {
            let novoUsuario = new usuario(nomeUsuario.value, senhaUsuario.value)
            bancoDeDados.push(novoUsuario)
            avisoFunc(2)
        }
    }
}

function logarSistema() {
    let nomeUsuario = document.getElementById('user-input')
    let senhaUsuario = document.getElementById('user-pass')
    if (camposVazios(nomeUsuario.value, senhaUsuario.value) === true) {
        let verificador = bancoDeDados.findIndex(user => user.nome === nomeUsuario.value)

        if (verificador !== -1) {
            if (nomeUsuario.value === bancoDeDados[verificador].nome && senhaUsuario.value !== bancoDeDados[verificador].senha) {
                avisoFunc(3)
            }
            else if (nomeUsuario.value === bancoDeDados[verificador].nome && senhaUsuario.value === bancoDeDados[verificador].senha) {
                avisoFunc(1)
            }
        } else {
            avisoFunc('Usuário não encontrado!')
        }
    } else {
        return
    }
}