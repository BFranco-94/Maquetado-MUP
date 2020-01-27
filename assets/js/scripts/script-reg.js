window.addEventListener('load', function(){

	//get answer in real time
	var URLhash = window.location.hash;
	if (URLhash=="#sign-in") {
		$("#section-sigup").hide("slow");
		$("#section-sigup").css("display", "none");
		$("#section-sig-in").css("display", "block");
		$("#section-sig-in").show("slow");
	}else if(URLhash=="#sign-up"){
		$("#section-sigup").show("slow");
		$("#section-sigup").css("display", "block");
		$("#section-sig-in").css("display", "none");
		$("#section-sig-in").hide("slow");
	}


	$("#toSignin").click(function(){
		
	});
	
	$("#toSignup").click(function(){

	});

	document.getElementById('password').addEventListener('input', function() {
		campoPass = event.target;
	    if ( campoPass.value.length > 7 ) {
			$("#password").css("border","1px solid green");
			$("#password").css("color","green");
		}else{
			$("#password").css("border","1px solid red");
			$("#password").css("color","red");
		}

	});

	document.getElementById('conPassword').addEventListener('input', function() {
		campoConfPass = event.target;
		let password= document.getElementById('password').value;
	    if ( campoConfPass.value==password ) {
			    $("#conPassword").css("border","1px solid green");
				$("#conPassword").css("color","green");
	    }else if(campoConfPass.value != password){
	    		$("#conPassword").css("border","1px solid red");
				$("#conPassword").css("color","red");
	    }
	    	
	});
	document.getElementById('userNameStudent').addEventListener('input', function() {
		campoUserName = event.target;
	    if ( campoUserName.value.length > 5 ) {
				$("#userNameStudent").css("border","1px solid green");
				$("#userNameStudent").css("color","green");
		}else{
			$("#userNameStudent").css("border","1px solid red");
			$("#userNameStudent").css("color","red");
		}

	});


	$("#AsStudentLink").click(function(){
		cleanFieldsAsCompany();
	});

	$("#AsCompanyLink").click(function(){
		cleanFieldsAsStudent();
	});

	$('#formAsStud').submit(function(e){
		e.preventDefault();
		let userNStudent = document.getElementById('userNameStudent').value;
		let myEmail=document.getElementById('emailStudent').value;
		let isCheckedTerms=document.getElementById('checkTerms').checked;
		let password= document.getElementById('password').value;
		let passwordConfirm= document.getElementById('conPassword').value;
		let resMail=valEmail(myEmail); //return value boolean
		let resPass = ValPass(password,passwordConfirm); //return value boolean
		let fUser=(userNStudent==="")? false : true;
		//validation form
		if(isCheckedTerms && resMail && fUser){
			if(resPass){
				alert("success!");
			}
		}else{
			//put information about errors on the form
			validateDates(userNStudent, myEmail, isCheckedTerms, resMail);
		}
		

	});



});



//function for validate checkbox and email
function validateDates(userNameS, email, terms , formatMail){
	if(userNameS===""){
		$("#userNameStudent").css("border","1px solid red");
		$("#userNameStudent").css("color","red");
	}else if(email===""){
		$("#emailStudent").css("color","red");
		document.getElementById('emailStudent').value="please introduce a email";
		setTimeout(function() {
		    $("#emailStudent").css("color","gray");
			document.getElementById('emailStudent').value="";

	    },3000);
	    return false;
	}else if(terms==false){
		$("#messageTerms").show("slow");
		setTimeout(function() {
			$("#messageTerms").hide("slow");
	    },5000);
	    return false;
	}else if(formatMail==false){
		$("#emailStudent").css("color","red");
		// document.getElementById('emailStudent').value="please introduce a correct email";
		setTimeout(function() {
		    $("#emailStudent").css("color","gray");
		    document.getElementById('emailStudent').value=email;
	    },3000);
	    return false;
	}
}

function ValPass(pass, passConf){
	if(pass==""){
		// alert("introduce a password");
		$("#password").css("border","1px solid red");	
		return false;
	}else if (passConf===pass){
		$("#password").css("color","green");
		$("#conPassword").css("color","green");
		return true
	}else{
		$("#conPassword").css("color","red");
		// alert("password incorrect!");
		setTimeout(function() {
			$("#conPassword").css("color","gray");
	    },3000);
	    return false;
	}
}



function valEmail(mail){
   var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
   let resPatt= emailPattern.test(mail);
   if (resPatt){
   	    $("#emailStudent").css("border","1px solid green");
		$("#emailStudent").css("color","green");
   }else{
	   	$("#emailStudent").css("border","1px solid red");
		$("#emailStudent").css("color","red");
   }
   return emailPattern.test(mail); 
}



// clean field for student register
function cleanFieldsAsStudent(){
	document.getElementById('userNameStudent').value="";
	document.getElementById('emailStudent').value="";
	document.getElementById('checkTerms').checked=false;
	document.getElementById('password').value="";
	document.getElementById('conPassword').value="";
	// reset fields color
	$("#userNameStudent").css("border","1px solid gray");
	$("#userNameStudent").css("color","gray");
	$("#emailStudent").css("border","1px solid gray");
	$("#emailStudent").css("color","gray");
	$("#password").css("border","1px solid gray");
	$("#password").css("color","gray");
	$("#conPassword").css("border","1px solid gray");
	$("#conPassword").css("color","gray");
}
	// clean field for company register
	function cleanFieldsAsCompany(){
		document.getElementById('usernameAsCompany').value="";
		document.getElementById('emailCompany').value="";
		document.getElementById('checkTermsCompany').checked=false;
		document.getElementById('passCompany').value="";
		document.getElementById('confPassCompany').value="";
		// reset fields color
		$("#usernameAsCompany").css("border","1px solid gray");
		$("#usernameAsCompany").css("color","gray");
		$("#emailCompany").css("border","1px solid gray");
		$("#emailCompany").css("color","gray");
		$("#passCompany").css("border","1px solid gray");
		$("#passCompany").css("color","gray");
		$("#conPassword").css("border","1px solid gray");
		$("#confPassCompany").css("color","gray");
	}





function removeImage(){
	$("#cont-image-left").hide("slow");
	// $(".form-body").css("width","250px");
	$(".form-body").css("margin-top","30px");
	$("#imageSign").show("slow");
	$("#imageSign").css("width","100px");
	$("#imageSign").css("display","block");
}


/*
		=======================================================
		establecer un campo como unico sus valores, ejemplo:
		ALTER TABLE `users` ADD UNIQUE(`Email`);
		=======================================================
		vaciar una tabla:
		TRUNCATE TABLE `users` 
		=======================================================
		query to insert in users:
		INSERT INTO `users` 
		(`id_user`, `UserName`, `Email`, `Password`, `Date`) 
		VALUES 
		(NULL, 'bryan', 'bryanfr@maf.com', '123', '2020-01-01');
		=======================================================
		trigger for insert dates on table dates student

		CREATE TRIGGER users_AI AFTER INSERT ON users FOR EACH ROW 
		INSERT INTO studentdata(id_dateUser, id_idxUser) 
		VALUES(NULL, NEW.id_user)
		=======================================================
		update trigger
		
		DROP TRIGGER IF EXISTS `users_AI`;CREATE DEFINER=`root`@`localhost` 
		TRIGGER `users_AI` AFTER INSERT ON `users` FOR EACH ROW 
		INSERT INTO studentdata(id_dateUser, id_idxUser, EmailStudent) 
		VALUES(NULL, NEW.id_user, NEW.Email)
		=======================================================
		trigger for insert dates on table dates company

		CREATE TRIGGER busers_AI AFTER INSERT ON busers FOR EACH ROW 
		INSERT INTO businessdata ( id_bdate, id_idxBUser, EmailCompany ) 
		VALUES (NULL, NEW.id_buser, NEW.CompanyEmail)

		=======================================================
		
		insert more values than two

		INSERT INTO `busers` 
		(`id_buser`, `NameUser`, `CompanyEmail`, `Password`, `DateRegister`) 
		VALUES 
		(NULL, 'CWize', 'Wize-line@gmail.com', '123', '2020-01-01'), 
		(NULL, 'wCWize121', 'Wize-lline@gmail.com', '123', '2020-01-10');


		*/