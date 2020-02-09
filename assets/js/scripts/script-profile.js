window.addEventListener('load', function(){
	let btnProfile=document.getElementById('Profile');
	let btnContact=document.getElementById('Contact');
	let btnTMates=document.getElementById('TMates');
	let btnSocialMedia=document.getElementById('SMedia');

	// Acciones/eventos
	btnProfile.addEventListener('click',function(){
		showProfile();
	});
	btnContact.addEventListener('click',function(event){
		showContact();
	});
	btnTMates.addEventListener('click',function(){
		showTMates();
	});
	btnSocialMedia.addEventListener('click',function(){
		showSMedia();
	});
});





// funciones para mostrar y quitar, box-Contact, #box-TMates,#box-SMedia
function showProfile(){
	$("#box-Profile").show('slow');
		$("#box-Contact").hide('slow');
		$("#box-TMates").hide('slow');
		$("#box-SMedia").hide('slow');
}
function showContact(){
	$("#box-Contact").show('slow'); 
		$("#box-Profile").hide('slow');
		$("#box-TMates").hide('slow');
		$("#box-SMedia").hide('slow');
}
function showTMates(){
	$("#box-TMates").show('slow');
		$("#box-Profile").hide('slow');
		$("#box-Contact").hide('slow');
		$("#box-SMedia").hide('slow');
}
function showSMedia(){
	$("#box-SMedia").show('slow');
		$("#box-Profile").hide('slow');
		$("#box-Contact").hide('slow');
		$("#box-TMates").hide('slow');
}
/*
	$("#box-Contact").show(1000, function() {
      $( this ).text( "Ok, DONE! (now showing)" );
    });
*/ 





