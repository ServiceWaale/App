function validate(){
	
	var fname = document.getElementById('fname').value;
	var email = document.getElementById('email').value;
	var phone = document.getElementById('phone').value;
	var subject = document.getElementById('subject').value;
	var address = document.getElementById('address').value;
	var msg = document.getElementById('msg').value;

	var validEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	if(fname==''){
		alert('please enter your name');
		document.getElementById('fname').focus();
		return false;
	}
	else if(email==''){
		alert('please enter your email');
		document.getElementById('email').focus();
		return false;
	}
	else if(validEmail.test(email) == false){
		alert('please enter valid email.address');
	}
	else if(phone==''){
		alert('please enter your phone no.');
		return false;
	}
	else if(subject==''){
		alert('please enter your subject');
		return false;
	}
	else if(address==''){
		alert('please enter your address');
		return false;
	}
	else if(msg==''){
		alert('please enter your message');
		return false;
	}
	return true;
}