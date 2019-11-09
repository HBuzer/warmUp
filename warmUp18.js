// You are given an input string.

// For each symbol in the string if it's the first character occurence, replace it with a '1', else replace it with the amount of times you've already seen it...

// But will your code be performant enough?
// Examples:

// input   =  "Hello, World!"
// result  =  "1112111121311"

// input   =  "aaaaaaaaaaaa"
// result  =  "123456789101112"

function counting(string) {
	var arr = []; // array to assign the numbers to.
	var seen = [];// to assign the letters to check for these letter in the next iterate.

	for (var i = 1; i < string.length; i++) {
		arr.push(1); // pushing number 1 which is 1 time.

		if (seen.includes(string[i])) {
			arr.push(2) // if the letter is already in the seen array add number 2 (I COULDN'T MAKE THIS NUMBER ITERATE ACCORDING TO REPEATED LETTERS)
		}
			seen.push(string[i]); // pushing the letters to seen.
	}
	return arr;
}