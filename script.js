const buscarCEP = 'https://viacep.com.br/ws/01001000/json/';

async function cep (){
    const resposta = await fetch (buscarCEP);
    const endereco = await resposta.json();
    console.log (endereco);
}
cep()