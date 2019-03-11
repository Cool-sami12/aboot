function checkform() {
	let fn = document.getElementById('fname');
	let ln = document.getElementById('lname');
	let em = document.getElementById('em');
	let  ps = document.getElementById('pass');
	if (fn.value == "" | ln.value == "" || em.value == "" || ps.value == "") {
		document.write("You must fill in the missing fields");
	} else {
		location.href = "signin.html";
	}
}
function checkSign() {
	let em = document.getElementById('txtemail');
	let ps = document.getElementById('txtpass');
	if (fn.value == "" | ln.value == "" || em.value == "" || ps.value == "") {

	} else {
		location.href = "dashboard.html";
	}

}
