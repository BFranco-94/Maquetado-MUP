window.addEventListener('load',function(){
	let optionMenuSearch= document.getElementById('searchFMenu');
	optionMenuSearch.addEventListener('click', function(){
		// $('.box-toresult').removeClass("result-box");
		$(".box-tosearch").css("display","block");
		$('.box-toresult').addClass("box-result-first-style");
		

	});
	let btnSearch = document.getElementById('btnSearch');
	btnSearch.addEventListener('click', function(){
		$(".box-tosearch").css("display","none");
		$('.box-toresult').addClass("result-box");


	});


	
});


