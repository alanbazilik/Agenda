
function validaragenda(idNome, idemail, idtelefone) {
    let nome = document.getElementById(idNome).value;
    let email = document.getElementById(idemail).value;
    let telefone = document.getElementById(idtelefone).value;

    if (nome == "")
        alert("Nome do produto não pode estar em branco. Favor preenchê-lo!");
    else if (codigo == "")
        alert("Código do produto não pode estar em branco. Favor preenchê-lo!");
    else cadastrarProduto(nome, email, parseInt(telefone));
}

function cadastraragenda(nome, email, telefone) {
    let novoagendas = {nome:nome, email:email, telefone:telefone};

    if (typeof(Storage) !== "undefined") {
        let agendas = localStorage.getItem("agendas");
        if (agendas == null) agendas = []; // Nenhum produto ainda foi cadastrado
        else agendas = JSON.parse(agendas);
        agendas.push(novoagendas); // Adiciona um novo produto
        localStorage.setItem("agendas",JSON.stringify(agendas))
        alert("Foram cadastradas com sucesso "+qtidade+" unidades do produto "+ produto+"!");
        atualizarTotalEstoque("totalagendas");
        location.reload();
    } 
    else alert("A versão do seu navegador é muito antiga. Por isso, não será possível executar essa aplicação");
}


function atualizarTotalagendas(idCampo) {
    localStorage.setItem("totalagendas",++document.getElementById(idCampo).innerHTML)
}

function carregarTotalagenda(idCampo) {
    if (typeof(Storage) !== "undefined") {
        let totalagendas = localStorage.getItem("totalagendas");
        if (totalagendas == null) totalEstoque = 0;
        document.getElementById(idCampo).innerHTML = totalagendas;
    }
    else alert("A versão do seu navegador é muito antiga. Por isso, não será possível executar essa aplicação");
}


function listaragendas() {
    if (typeof(Storage) !== "undefined") {
        let agendas = localStorage.getItem("agendas");
      
        document.write("<h1>agenda:</h1>")
       
        if (agendas == null)
            document.write("<h3>Ainda não há nenhum tem cradastro da agenda</h3>");
        else {
            agendas = JSON.parse(agendas);
            agendas.forEach(agenda => {
                
                document.write("<h2>Nome: "+agenda.nome+"</h2>");
                document.write("<h2>email: "+agenda.email+"</h2>");
                document.write("<h2>Quantidade no estoque: "+agenda.telefone+"</h2>");
                document.write('<a href="index.html"+>Go Back</a>');
                
            });
        }
    } 
    else alert("A versão do seu navegador é muito antiga. Por isso, não será possível visualizar o estoque!");    
}