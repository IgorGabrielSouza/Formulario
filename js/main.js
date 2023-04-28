//Bloco de verificaçao de preenchimento de campos

function verifica(){
    let user = document.getElementById('email').value; 
    let senha = document.getElementById('senha').value;

    if(!user || !senha){
        alert( "campos de preenchimento obrigatorio. favor preencher!");
    } else{
        alert("Campos preenchidos com sucesso!");
    }
    
}