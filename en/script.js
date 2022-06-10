let fal = prompt("फळ  भांडार");
switch (fal){
	case "aamba":
	document.write("aaba @Rs. 400 dozen");
	break;
	case "chikkoo":
	document.write("chikkoo @Rs. 100/kg");
	break;
	default:
	document.write(`${fal} available nahi...!`);}
if (fal == "aamba"){document.write("aamba available ahe ");}
else {document.write("sorry...!");}
