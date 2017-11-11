// scripts.js

var femaleNames = ['Ania','Ola','Kasia'];
var maleNames = ['Piotrek','Józek','Dyzio'];

var allNames = femaleNames.concat(maleNames);
console.log(allNames);

var newName = prompt('Enter new name');
function newNameModified(newName) {
	
	var newNameFirstLetter = newName[0].toUpperCase();
	var newNameLowercase = newName.toLowerCase();
	var newNameLowercaseCut = newNameLowercase.slice(1);
	
	return newNameFirstLetter + newNameLowercaseCut;

} 
var finalName = newNameModified(newName);

var nameIndex = allNames.indexOf(finalName);
if (nameIndex == -1) {
	allNames.push(finalName);
	console.log(allNames);
	} else {
	console.log(finalName +' is already in this table. Enter another name');
	}
	/*testing*/

