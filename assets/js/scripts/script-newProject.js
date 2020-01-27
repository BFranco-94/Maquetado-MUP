window.addEventListener('load', function() {
    iniciar();

    // format to write only letters
    $("#titleProject").keypress(function(keyToLetter){
        if ((keyToLetter.charCode < 65 || keyToLetter.charCode > 90)  && 
            (keyToLetter.charCode < 97 || keyToLetter.charCode > 123) && 
             keyToLetter.charCode != 32
            ) return false;     
    });

    // format to write only numbers
    $('#costProject').keypress(function (tecla) {
      if (tecla.charCode < 48 || tecla.charCode > 57) return false;
    });



    $("#formImage").submit(function(e) {
        e.preventDefault();
        const preview = document.querySelector('#chargeLoadImage');
        const file = document.querySelector('input[type=file]').files[0];
        // alert(file.name);
        const reader = new FileReader();
        if ( /\.(jpe?g|png|gif)$/i.test(file.name) ){
            reader.addEventListener("load", function () {
                // convert image file to base64 string
                preview.src = reader.result;
            }, false);
            if (file) {
                reader.readAsDataURL(file);
            }
        }
    });


    $("#delMemberBox").click(function(){
        var valSpan = document.getElementById('idMember').innerHTML;
        alert("El valor es: "+valSpan);
    });



    $("#formSelectNumberMember").submit(function(e) {
        e.preventDefault();
        let numMembers = document.getElementById('numMembers').value;
        const elementFatherMemberDiv = document.getElementById('addElementsMembers');
        let containMembers='';

        // span en la linea 28
        /*
        <span uk-icon="icon: close;"\
       class="iconClose"  onclick="deleteBoxMember('+i+')" ></span>
        */
        for(let i=1; i <= numMembers; i++){
            containMembers+=' \
                    <div class="delMemberBox">\
                    <div class="uk-card uk-card-default uk-card-body" >\
                    \
                        <h4 class="uk-align-left uk-text-secondary">Member dates #'+i+'</h4>\
                    \
                        <div class="uk-inline uk-margin">\
                            <span class="uk-form-icon" uk-icon="icon: user"></span>\
                            <input class="uk-input uk-form-width-large uk-text-center" name="nameMember_'+i+'" type="text" placeholder="Name of member(s)">\
                        </div>\
                        <div class="uk-inline uk-margin">\
                            <span class="uk-form-icon" uk-icon="icon: user"></span>\
                            <input class="uk-input uk-form-width-large uk-text-center" name="lastNameMember_'+i+'" type="text" placeholder="LastNames of member">\
                        </div>\
                        <div class="uk-inline uk-margin">\
                            <span class="uk-form-icon" uk-icon="icon: mail"></span>\
                            <input class="uk-input uk-form-width-large uk-text-center" name="emailMember_'+i+'" type="email" placeholder="Email">\
                        </div>\
                        <div class="uk-inline uk-margin">\
                            <span class="uk-form-icon" uk-icon="icon: calendar"></span>\
                            <input class="uk-input uk-form-width-large uk-text-center" name="ageMember_'+i+'" type="text" placeholder="Age">\
                        </div>\
                        <span class="iconClose uk-invisible" id="idMember" >'+i+'</span>\
                    </div>\
                    </div>\
            ';
        }
        $("#addElementsMembers").html(containMembers);
        $("#formSelectNumberMember").hide("slow");
    });








    $("#setDates").click(function(){
        alert("preparando datos...");
    });



});


function previewFiles(){
    alert("hola");
  var preview = document.querySelector('#imagePreview');
  var files   = document.querySelector('#image1').files;

  function readAndPreview(file) {
    alert("hola");

    // Make sure `file.name` matches our extensions criteria
    if ( /\.(jpe?g|png|gif)$/i.test(file.name) ) {
      var reader = new FileReader();

      reader.addEventListener("load", function () {
        var image = new Image();
        image.height = 100;
        image.title = file.name;
        image.src = this.result;
        preview.appendChild( image );
      }, false);

      reader.readAsDataURL(file);
    }

  }

  if (files) {
    [].forEach.call(files, readAndPreview);
  }

}


function deleteBoxMember(idBoxMember){
    let num=parseInt(idBoxMember);
    let value = "";
    value="delMemberBox"+num+"";
    let divPadre = document.getElementById("addElementsMembers");
    let listItems = document.getElementsByClassName('delMemberBox')[num-1];
    listItems.parentNode.removeChild(listItems);
    console.log(num-1);
}

/*
    click add -> 4
        1
        2
        3
        4

        opcion  agregar, quitar
*/ 

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
    // cajadatos.innerHTML = '<progress   class="uk-progress" value="' + por + '" max="100"></progress>';
}

function mostrar(archivo) {
    titulo.innerHTML = 'Carga Completada! 100%';
    console.log(archivo.name);
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