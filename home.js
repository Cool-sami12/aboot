function checkform(){
	var fn= document.getElementById('fname');
	var ln= document.getElementById('lname');
	var em= document.getElementById('em');
	var ps=document.getElementById('pass');
	 if ( fn.value =="" | ln.value == "" || em.value == "" || ps.value == ""){
	 	document.write("You must fill in the missing fields");
	 } else {
	 	location.href="signin.html";
	 }
}
function checkSign(){
	var em=document.getElementById('txtemail');
	var ps=document.getElementById('txtpass');
	if ( fn.value =="" | ln.value == "" || em.value == "" || ps.value == ""){

	} else{
		location.href="dashboard.html";
	}
	
}
