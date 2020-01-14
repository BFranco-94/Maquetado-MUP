window.addEventListener('load', function() {
    iniciar();
    $("#formImage").submit(function(e) {
        e.preventDefault();
        var img = document.getElementById('imgUser').value;
        alert(img);
    });
});




function reset() {
    $("#uploadPic").css("display", "none");
    $("#uploadPic").hide("slow");
}

function iniciar() {
    cajadatos = document.getElementById('uploadPic');
    var archivos = document.getElementById('imgUser');
    archivos.addEventListener('change', procesar, false);
    titulo = document.getElementById('titleUpload');

}

function procesar(e) {
    var archivos = e.target.files;
    cajadatos.innerHTML = '';

    var archivo = archivos[0];
    var lector = new FileReader();
    lector.onloadstart = comenzar;
    lector.onprogress = estado;
    lector.onloadend = function() { mostrar(archivo); };
    lector.readAsBinaryString(archivo);
}

function comenzar(e) {
    // cajadatos.innerHTML = '<progress id="js-progressbar" class="uk-progress" value="0" max="100"></progress>';
}

function estado(e) {
    var por = parseInt(e.loaded / e.total * 100);
    titulo.innerHTML = 'Procesando ' + por + '% <img src="../assets/image/loading.gif" ' +
        ' style="width: 40px;background-color:transparent;">  <br>';
    cajadatos.innerHTML = '<progress   class="uk-progress" value="' + por + '" max="100"></progress>';
}

function mostrar(archivo) {
    titulo.innerHTML = 'Carga Completada! 100%';
    // titulo.innerHTML = 'Carga Completada! 100% <br> - Foto ' + archivo.name + ' cargada exitosamente<br>';
    $("#cajadatos").css("background-color", "#4B8AA8");
    $("#cajadatos").css("color", "#fff");
    $("#cajadatos").css("font-size", "150%");
    $("#cajadatos").css("transition", "2s all ease");
    $("#cajadatos").show();
    // cajadatos.innerHTML='Nombre: '+archivo.name+'<br>';
    // cajadatos.innerHTML+='Tipo: '+archivo.type+'<br>';
    // cajadatos.innerHTML+='Tamaño: '+archivo.size+' bytes<br>';
}