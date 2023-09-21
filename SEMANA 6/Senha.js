/* funcao que gera uma senha numerica aleatoria 
parametro: qtde de digitos que a senha tera

Exemplo: gerarSenhaNumerica(8)
*/

function gerarSenhaAlfaNumerica(qtde){

    let senha= "";
    for(let i=0; i < qtde; i++){
        let numero = 65 + parseInt(Math.random()*60);
   senha +=  String.fromCodePoint(numero);
    //console.log(senha);

    }
    return senha;
}



function gerarSenhaNumerica(qtde){

    let senha= "";
    for(let i=0; i < qtde; i++){
   senha+= parseInt(Math.random()*10);
    //console.log(senha);

    }
    return senha;
}
