// Your solution goes here 
function isStrongPassword(password){
	if (password.length < 8){
		return false;
	}
	if (password.indexOf("password") != -1){
		return false;
	}
	let check = false;
	for (i=0; i<password.length; i++){
		let num = password.charCodeAt(i);
		
		if (num >= 65 && num <= 90){
			check = true;
			break;
		}
		
	}
	if (!check){
		return false;
	}
	
	return true;
}