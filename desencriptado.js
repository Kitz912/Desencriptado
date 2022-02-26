function encriptar(elemento){
    var texto = document.getElementsByTagName("input")[0].value;
    var texto_codificado = btoa(texto);
    document.getElementById("resultado").innerHTML = texto_codificado;
}

function desencriptar(elemento){
    var texto = document.getElementsByTagName("input")[0].value;
    var texto_descodificado = atob(texto);
    document.getElementById("resultado").innerHTML = texto_descodificado;
}