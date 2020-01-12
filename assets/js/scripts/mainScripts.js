window.addEventListener('load', function(){



	$("#formLogin").submit(function(e){
		e.preventDefault();
		var nameUser=document.getElementById('nameUserLogin').value;
		var pwd=document.getElementById('passwordLogin').value;
		var mess=logUser(nameUser, pwd);
		alert(mess);
		limpiarCamposLogin();
	});



	var btnEnterLogin = document.getElementById('btnEnterLogin');
	var btnCancelLogin=document.getElementById('btnCancelLogin');
	var btnCancelRegister=document.getElementById('btnCancelRegister');




	// Events to Listener
	// btnEnterLogin.addEventListener('click', function(){
	// 	alert("click en formulario");
	// });

	// CI,CD



	btnCancelLogin.addEventListener('click',function(){
		limpiarCamposLogin();

	});
	btnCancelRegister.addEventListener('click', function(){
		document.getElementById('nameUserRegister').value="";
		document.getElementsByClassName('sexoUserReg').checked=false;
		document.getElementById('passwordReg').value="";
		document.getElementById('passwordConfirm').value="";
		document.getElementsByClassName('enterpriseStudent').checked=false;

	});
});



function logUser(nameUserEmail, password){
	var message="nombre usuario: "+nameUserEmail+", Password: "+password;
	return message;
	// procesar los datos con ORM en BD
}


function limpiarCamposLogin(){
	document.getElementById('nameUserLogin').value="";
	document.getElementById('passwordLogin').value="";
}
