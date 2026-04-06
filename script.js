function logar(){
var usuario = document.getElementById("inputUsuário").value
var senha = document.getElementById("inputSenha").value

if((usuario == "Clara"|| usuario == "clara@clara.com") && senha == "clara123" ){
    window.location.href = "home.html"

}else{
        //document.getElementById("erro").innerHTML = "Usuário/Senha incorretos! Tente nvamente"
 Swal.fire({
     title: "Acesso Negado!",
     text: "Usuário/Senha incorretos! Tente novamente",
     icon: "error"
    });
    }
}