(function() {

var elems = document.getElementsByTagName("p"), //
	classElems = document.getElementsByClassName("paragraph"),
	idElem = document.getElementById("forth"),
	elemsSelector = document.querySelector("p"),
	elemsSelectorAll = document.querySelectorAll("p"), //getElementsByTagName быстрее 
	elemsInDiv = document.querySelectorAll("div p"),
	idElemSelector = document.querySelector("#forth"); //getElementById быстрее 


	//console.log( idElemSelector );
	//console.log( elemsSelectorAll );
	//console.log( elemsSelector );
	//console.log( classElems );
	//console.log( idElem );
//console.log( elems );

for (var i = 0, len = elems.length; i < len; i++){
	//console.log( elems[i].tagName );
	//console.log( elems[i].parentNode );
	//console.log( elems[i].previousSibling ); //если есть пробелы между тегами, то нельзя получить предыдущий
	//console.log( elems[i].previousSibling.previousSibling );
	//console.log( elems[i].nextSibling ); 
	//console.log( elems[i].nextSibling.nextSibling );
	//console.log( elems[i].previousSibling.nodeName ); //#text
	//console.log( elems[i].previousSibling.tagName );
	//console.log( elems[i].nodeType ); //1 - узел элемента
	console.log( elems[i].previousSibling.nodeType ); //3 - текстовый узел
}

})();