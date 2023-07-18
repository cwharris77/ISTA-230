function checkForm() {
   // TODO: Perform input validation 
   let name = document.getElementById("fullName");
   let email = document.getElementById("email");
   let pass = document.getElementById("password");
   let passConfirm = document.getElementById("passwordConfirm");
   let fErrors = document.getElementById("formErrors")
   
   let foundError = false;
   
   if (!name.value){
	   foundError = true;
	   name.className = "error"
	   let nameError = document.createElement("li");
	   nameError.textContent = "Missing full name.";	
	   fErrors.appendChild(nameError);
   } 
   if (!email.value || !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/.test(email.value)){
	   foundError = true;
	   email.className = "error"
	   let emError = document.createElement("li");
	   emError.textContent = "Invalid or missing email address."
	   fErrors.appendChild(emError);
   }
   if (pass.value.length < 10 || pass.value.length > 20){
	   foundError = true;
	   pass.className = "error"
	   let p = document.createElement("li");
	   p.textContent = "Password must be between 10 and 20 characters."
	   fErrors.appendChild(p);
   }
   if (!pass.value || !/[a-z]/.test(pass.value)) {
		foundError = true;
		pass.className = "error"
		let p2 = document.createElement("li");
		p2.textContent = "Password must contain at least one lowercase character.";
		fErrors.appendChild(p2);
	}
	
   if (!pass.value || !/[A-Z]/.test(pass.value)) {
		foundError = true;
		pass.className = "error"
		let p3 = document.createElement("li");
		p3.textContent = "Password must contain at least one uppercase character.";
		fErrors.appendChild(p3);
	}
	
	if (!pass.value || !/[0-9]/.test(pass.value)) {
		foundError = true;
		pass.className = "error"
		let p4 = document.createElement("li");
		p4.textContent = "Password must contain at least one digit.";
		fErrors.appendChild(p4);
	}
	if (pass.value != passConfirm.value){
		foundError = true;
		pass.className = "error"
		let p5 = document.createElement("li");
		p5.textContent = "Password and confirmation password don't match.";
		fErrors.appendChild(p5);
	}
   
   if (!foundError) {
	   fErrors.className = "hide";
	   name.classList.remove("error");
	   email.classList.remove("error");
	   pass.classList.remove("error");
	   
	   while (fErrors.firstChild){
		   fErrors.removeChild(fErrors.firstChild);
	   }
   } else {
	   fErrors.classList.remove('hide');
	   foundError = false;
   }
}

document.getElementById("submit").addEventListener("click", function(event) {
   checkForm();

   // Prevent default form action. DO NOT REMOVE THIS LINE
   event.preventDefault();
});