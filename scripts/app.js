
function verificarTexto() {
    let textoIngresado = document.getElementById("texto-ingresado").value;
    let textoSinEspacios = document.getElementById("texto-ingresado").value.trim();
    const mayusculas = /[A-Z]/;
    const acentos = /[áéíóúÁÉÍÓÚüÜ]/;
    if (mayusculas.test(textoIngresado) || acentos.test(textoIngresado)) {
        mostrarElemento('mensaje-incorrecto');
        setTimeout(function () {
            ocultarElemento('mensaje-incorrecto');
        }, 3000);
        return false;
    }
    if (textoSinEspacios.length == 0 || textoIngresado.length == 0) {
        mostrarElemento('mensaje-vacio');
        setTimeout(function () {
            ocultarElemento('mensaje-vacio');
        }, 3000);
        return false;
    }
    return true;
}

function encriptarTexto() {
    if (!verificarTexto()) {
        return;
    }
    let textoIngresado = document.getElementById("texto-ingresado").value;
    let textoEncriptadoBien = "";
    ocultarElemento('munieco');
    ocultarElemento('mensaje-no-encontrado');
    ocultarElemento('resalte');
    textoEncriptadoBien = textoIngresado
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    document.getElementById('contenedor-texto-encriptado').style.width = '90%';
    document.getElementById('contenedor-texto-encriptado').style.height = '95%';
    document.getElementById('texto-encriptado').textContent = textoEncriptadoBien;
    mostrarElemento('texto-encriptado');
    mostrarElemento('boton-copiar');
    mostrarElemento('mensaje-texto-encriptado');
    ocultarElemento('mensaje-texto-desencriptado');
    document.getElementById('boton-desencriptar').removeAttribute('disabled');
    setTimeout(function () {
        ocultarElemento('mensaje-texto-encriptado');
    }, 3000);
}

function mostrarElemento(elementoId){
    document.getElementById(elementoId).style.display='block';
}

function ocultarElemento(elementoId){
    document.getElementById(elementoId).style.display='none';
}

function copiarTexto() {
    let textoCopiar = document.getElementById('texto-encriptado').value;
    navigator.clipboard.writeText(textoCopiar).then(function() {
        mostrarMensajeTextoCopiado();
      }).catch(function(err) {
       alert(`Error al copiar el texto: ${err}`);
      });
}

function mostrarMensajeTextoCopiado() {
    mostrarElemento('texto-copiado');
    setTimeout(function () {
        ocultarElemento('texto-copiado');
    }, 3000);
}

function desencriptarTexto() {
    let texto = document.getElementById('texto-ingresado').value;
    // if (!verificarTexto()) {
    //     return;
    // }
    textoDesencriptado = texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    ocultarElemento('mensaje-texto-encriptado');
    ocultarElemento('munieco');
    ocultarElemento('mensaje-no-encontrado');
    ocultarElemento('resalte');
    mostrarElemento('mensaje-texto-desencriptado');
    document.getElementById('texto-encriptado').textContent = textoDesencriptado;
    mostrarElemento('texto-encriptado');
    setTimeout(function () {
        ocultarElemento('mensaje-texto-desencriptado');
    }, 3000);
}

function limpiar(){
    var campotexto = document.getElementById("texto-ingresado");
    campotexto.value="";
}
