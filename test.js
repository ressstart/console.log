(function() {

var elems = document.getElementsByTagName("p"),
	classElems = document.getElementsByClassName("paragraph"),
	idElem = document.getElementById("forth"),
	elemsSelector = document.querySelector("p"),
	elemsSelectorAll = document.querySelectorAll("p"); //querySelector быстрее 


	console.log( elemsSelectorAll );
	console.log( elemsSelector );
	console.log( classElems );
	console.log( idElem );
//console.log( elems );

/*for (var i = 0, len = elems.length; i < len; i++){
	console.log( elems[i] );
}*/


})();