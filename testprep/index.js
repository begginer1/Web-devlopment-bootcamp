
function fun()
{
  var text=document.getElementById("email").value;
var patt=/[a-z]*@gmail[.]com/i;
if(text.match(patt))
document.getElementById("le").hidden=true;
else
document.getElementById("le").hidden=false;

var patt2=/^[a-z]{3}$/i;
if(patt2.test(text))
alert("right length");
else
alert("wrang");
}
