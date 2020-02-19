window.addEventListener('load',function(){
let btnService=document.getElementById('btnService');
btnService.addEventListener('click',function(e){
	e.preventDefault();
	let password=document.getElementById('password').value;
	console.log(password);
	document.getElementById('answerService').textContent=password;

	$.get('https://localhost:8080/ExerciseRest/services/encrypted',{
		pass: password
	},function(data){
		document.getElementById('answerService').textContent=password;
		console.log(data);
		alert(data);

	});
	return false;

});



});