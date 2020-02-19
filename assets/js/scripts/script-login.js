let optionKindOfUser;
window.addEventListener('load', function(){

	document.querySelector('#userNameStudent').addEventListener('input', function() {
		campoPass = event.target;
	    if ( campoPass.value.length > 7 ) { 
	    	$("#userNameStudent").css("border","1px solid green");
			$("#userNameStudent").css("color","green");
	    }
	});

	document.querySelectorAll('input[type=radio]').forEach(
			item => item.addEventListener('click', e => {
			let valueOption=e.target;
			optionKindOfUser=valueOption.value;	
	}));


	document.querySelector('#btnLogin').addEventListener('click', function(e){
		e.preventDefault();
		let nameUser=document.querySelector('#userNameStudent').value;
		let passw=document.querySelector('#passwordLogin').value;

		if (nameUser.length > 7){
			alert(nameUser+" - "+passw+" - "+optionKindOfUser);
			// $.post('servLogUser', {
			// 	userName : nameUser,
			// 	password: passw,
			// 	typeUser: optionKindOfUser
			// }, function(response) {
			// 	let datos=JSON.parse(response);
			// 	if(datos.dataLoginSuccess.status==true){
			// 		alert("\n "+
			// 			  "\t Hola : "+datos.dataLoginSuccess.NameUser+
			// 			  "\n \t"+datos.dataLoginSuccess.Message);
			// 		window.location.href= "dashboard.jsp";
			// 		console.log(
			// 				"datos JSON \n "+
			// 				  "Hola : "+datos.dataLoginSuccess.NameUser+
			// 				  "\n : "+datos.dataLoginSuccess.Message
			// 		);
			// 	}else{
			// 		alert("\n\t "+datos.dataLoginSuccess.Message);
			// 		console.log("fallo -> "+datos.dataLoginSuccess.status);
			// 	}
			// }); 
			// return false; 
		}else{
			UIkit.modal("#mdl-for-errorAccess").show();
			$("#userNameStudent").css("border","1px solid red");
			$("#userNameStudent").css("color","red");
		}


		
	});
	



});



/*

{
	dataLoginSuccess :{
		NameUser : ,
		Message: , 
		status:  
	}


}




*/ 