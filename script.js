//boas-vindas
alert("Seja Bem vindo ao site, a seguir crie seu cadrasto e realize o login.")

//cadrasto
const nome = prompt("Digite seu nome")
let idade = parseInt(prompt("Digite sua idade"))


//verificar se tem a idade permitida
if(idade < 13) {
  alert("você não tem idade suficiente, não é possivel realizar o cadastro")
}else if (idade >= 13) {
//senha e login
 let senha = prompt("Crie sua senha")

//login apos cadastro
alert("Seu cadrasto foi aprovado, a seguir realize o login!")
let nomeLogin = prompt("Digite seu nome para fazer login")
let senhaLogin = prompt("Digite sua senha para fazer login")

//verificar se nome e senha estão corretos
if(nomeLogin === nome && senhaLogin === senha){
alert(`Login realizado com sucesso! ${nome}.`)
}else {
    alert(`Nome ou senha incorretos. Tente novamente.`)
}
}
