window.addEventListener('load', function(){
	
	let btnProfile=document.getElementById('Profile');
	let btnContact=document.getElementById('Contact');
	let btnTMates=document.getElementById('TMates');
	let btnSocialMedia=document.getElementById('SMedia');
	let btnProjects=document.getElementById('projects');
	let btnGenerateCode=document.getElementById('generateCode');
	let btnCreateNewProject=document.getElementById('btnVerifyCreateProject');

	// variables for actions on section profile
	let btnImageProfile=document.getElementById('imageProfile');
	let btnToSendImageDB=document.getElementById('btnUpdateImageToSend');
	
	//variables to remove disable
	let btnInputsPAccess=document.getElementsByClassName('inputsToProfileAcces');
		// inputs
		let btnShowUpdateUserAccess = document.getElementById('btnShowUpdateUserAccess');

	// flags for enable inputs
	let flagBtnAcces=true; //flag to enable boxes kind of inputs, for user access
	let flagLoadToUpdate=false;



	disableInputs(btnInputsPAccess); //disable the boxes type input when load the page


		
	// Acciones/eventos to change of section
	btnProfile.addEventListener('click',function(){ showProfile(); });
	btnContact.addEventListener('click',function(event){ showContact(); });
	btnTMates.addEventListener('click',function(){ showTMates(); });
	btnSocialMedia.addEventListener('click',function(){ showSMedia(); });
	btnProjects.addEventListener('click', function(){ showProjects(); });






	// button to generate codes througth data base
	btnGenerateCode.addEventListener('click', function(){
		$("#box-to-generateCode").hide("slow");
		let sameNameUserCode=document.getElementsByClassName('userCode');
		let codesUser=document.getElementsByClassName('codesUser');
		let datesExpiration=document.getElementsByClassName('date_expiration_code');

		let user="Bryan Franco"
		let name="BFranco";
		let date="04/12/2020";
		let codesJson=["1k4dd3jJ92","2k4dd3jJ92","3k4dd3jJ92","4k4dd3jJ92","5k4dd3jJ92"];
		fillTableCodes(
			sameNameUserCode, 
			datesExpiration,
			codesUser, 
			user, 
			date, 
			codesJson);
		$("#box-with-codes-generated").show("slow");
	});

// events section profile image{

	btnImageProfile.addEventListener('click', function(){
		UIkit.modal("#modal-to-updatePicUser").show();
	});


	// load the image on the box up button load
    $("#formLoadImageUserProfile").submit(function(e) {
        e.preventDefault();
        iniciar();
        const preview = document.querySelector('#uploadPic');
        const imageProfile=document.querySelector("#imageProfile");
	    const file = document.querySelector('input[type=file]').files[0];
	    // alert(file.name);
	    const reader = new FileReader();
	    if ( /\.(jpe?g|png|gif)$/i.test(file.name) ){
	        reader.addEventListener("load", function () {
	            // convert image file to base64 string
	            preview.src = reader.result;
	            imageProfile.src=reader.result;
	        }, false);
	        if (file) {
	            reader.readAsDataURL(file);
	        }
	    }
	    //entra por primera vez cuando no se ha presionado el boton 'load image'
	    if (!flagLoadToUpdate){
	    	$("#uploadPic").show('slow'); //muestra la imagen
	    	flagLoadToUpdate=true; //pone la bandera en true para mostrar el boton modificar y no vuelva repetir el proceso al darle dos clicks
			$("#btnUpdateImageToSend").show('slow'); //muestra el boton modificar
	    }
	    document.getElementById("uploadPic").style.border="4px solid #5C95C1";
    });

    // event to send data to data base
    btnToSendImageDB.addEventListener('click', function(){
    	UIkit.modal("#modal-to-updatePicUser").hide(); //quita el modal
    	$("#btnUpdateImageToSend").hide('slow'); //quita el boton modificar
    	$("#uploadPic").hide('slow'); //quita la imagen cargada
    	flagLoadToUpdate=false;	 //bander en false para volver a cargar una imagen
    });

    /* }end -> events section profile image  */ 



	//events to romeve disable and add enable input boxes
	btnShowUpdateUserAccess.addEventListener('click',function(){
		if(flagBtnAcces){
			for(var i = 0; i < btnInputsPAccess.length; i++) {
		    	btnInputsPAccess[i].disabled = false;
		    	btnInputsPAccess[i].style.border="2px solid #5C95C1";
			}
			btnShowUpdateUserAccess.value="Disable Boxes";
			btnShowUpdateUserAccess.style.backgroundColor="#f0506e";
			flagBtnAcces=false;
		}else{
			for(var i = 0; i < btnInputsPAccess.length; i++) {
		    	btnInputsPAccess[i].disabled = true;
		    	btnInputsPAccess[i].style.border="1px solid #ececec";
			}
			btnShowUpdateUserAccess.value="Enable Boxes";
			btnShowUpdateUserAccess.style.backgroundColor="#1e87f0  ";
			flagBtnAcces=true;
		}
	});



	btnCreateNewProject.addEventListener('click', function(){
		$("#sectionToSeeProjects").show('slow'); 

		$.post('servletName', {
			userName : userNStudent
		}, function(response) {
			let booleanAnswer=response;
			if (booleanAnswer){
				window.location.href="http://localhost/myuniversityproject/my-project.jsp";
			}else{
				$("#textMessageProject").show('slow'); 
			}
		}); 
		return false;
	});





});



//functions specific for user profile{
function disableInputs(btnInputsPAccess){
	for(var i = 0; i < btnInputsPAccess.length; i++) {
    	btnInputsPAccess[i].disabled = true;
	}
}

/**
*@param sameNameUserCode type=selector.class: get at array kind of selector class
*@param datesExpiration type=selector.class: get at array kind of selector class
*@param codesUser type=selector.class: get at array kind of selector class
*@param user type=JSON: get JSON type data to assign to sameNameUserCode selector
*@param date type=JSON: get JSON type data to assign to datesExpiration selector
*@param codesJson type=JSON: get JSON type data to assign to codesUser selector
*/
function fillTableCodes(sameNameUserCode, datesExpiration, codesUser,user, date, codesJson){
	for(let i=0; i < codesJson.length; i++){
		sameNameUserCode[i].textContent=user;
		codesUser[i].textContent=codesJson[i];
		datesExpiration[i].textContent=date;
		console.log("code["+i+"] : ["+codesJson[i]+"]");
	}
}










// funciones para mostrar y quitar, box-Contact, #box-TMates,#box-SMedia
function showProfile(){
	$("#box-Profile").show('slow');
		$("#box-Contact").hide('slow');
		$("#box-TMates").hide('slow');
		$("#box-SMedia").hide('slow');
		$("#box-Projects").hide('slow');
		$("#options-profile-box").css("height","700");
}
function showContact(){
	$("#box-Contact").show('slow'); 
		$("#box-Profile").hide('slow');
		$("#box-TMates").hide('slow');
		$("#box-SMedia").hide('slow');
		$("#box-Projects").hide('slow');
		$("#options-profile-box").css("height","700");
}
function showTMates(){
	$("#box-TMates").show('slow');
		$("#box-Profile").hide('slow');
		$("#box-Contact").hide('slow');
		$("#box-SMedia").hide('slow');
		$("#box-Projects").hide('slow');
		$("#options-profile-box").css("height","750");
}
function showSMedia(){
	$("#box-SMedia").show('slow');
		$("#box-Profile").hide('slow');
		$("#box-Contact").hide('slow');
		$("#box-TMates").hide('slow');
		$("#box-Projects").hide('slow');
		$("#options-profile-box").css("height","700");
}
function showProjects(){
	
	$("#box-Projects").show('slow');
		$("#box-Profile").hide('slow');
		$("#box-Contact").hide('slow');
		$("#box-TMates").hide('slow');
		$("#box-SMedia").hide('slow');
	$("#options-profile-box").css("height","1100");
}
/*
	$("#box-Contact").show(1000, function() {
      $( this ).text( "Ok, DONE! (now showing)" );
    });
*/ 



// functions for load the image user profile
function loadUserProfile(){
	
}


function iniciar() {
    cajadatos = document.getElementById('uploadPic');
    var archivos = document.getElementById('imgUser');
    archivos.addEventListener('change', procesar, false);
    titulo = document.getElementById('textFinished');

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
}





/*
	// JSON con distintos valores para utilizar
	var json = {'valor1': 1, 'valor2': [1, 2, 3, 4], 'valor3': '3'};
	     
	// Obteniendo todas las claves del JSON
	for (var clave in json){
	  // Controlando que json realmente tenga esa propiedad
	  if (json.hasOwnProperty(clave)) {
	    // Mostrando en pantalla la clave junto a su valor
	    alert("La clave es " + clave+ " y el valor es " + json[clave]);
	  }
	}











	$.post('ServletRegisterUsers', {
					userName : userNStudent,
					email: myEmail,
					password: password,
					checkTterms: isCheckedTerms
				}, function(response) {
					let datos=JSON.parse(response);
					if(datos.dataRegisterSuccess.status==true){
						alert("\n "+
							  "\t Hola : "+datos.dataRegisterSuccess.NameUser+
							  "\n \t"+datos.dataRegisterSuccess.Message);

						console.log(
								"datos JSON \n "+
								  "Hola : "+datos.dataRegisterSuccess.NameUser+
								  "\n : "+datos.dataRegisterSuccess.Message
						);
					}else{
						alert("\n\t "+datos.dataRegisterSuccess.Message);
						console.log("fallo -> "+datos.dataRegisterSuccess.status);
					}
				}); 
				return false; 
*/