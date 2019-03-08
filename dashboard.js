function myCom() {
  var x = document.getElementById("bodyp");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function myBox() {
  document.getElementById("demo").innerHTML = "Welcome to your Inbox";
}
function myDraft() {
  document.getElementById("demo").innerHTML = "Drafts!!!";

}

function mySent() {
  document.getElementById("demo").innerHTML = "Sent Items";
}