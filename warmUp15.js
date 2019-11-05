// write a function that takes a string as an argument 
// and returns the string reversed word by word 
// Example : reverseStr("hi there how is the weather today") ==>> "today weather the is how there hi"
//
//
// Note : you can`t use any built-in functions .

function reverse(str) {
	var array1 = [];
	var array2 = [];

	for ( var i = 0; i < str.length; i++) {
		array1.push(str[i]);
	}
	for (var i = array1.length; i >= 0; i--) {
		array2.push(array1[i]);
	}

return array2;

}
	// var string = str.split(' ');
	// var arr = [];
	// for (var i = 0; i < string.length; i++) {
	// 	arr.unshift(string[i]);
	// }

	// return arr.join(' ');