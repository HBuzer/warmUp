// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
// You can use each character in text at most once. Return the maximum number of instances that can be formed.

// Example 1:
// Input: text = "nlaebolko"
// Output: 1

// Example 2:
// Input: text = "loonbalxballpoon"
// Output: 2

// Example 3:
// Input: text = "RebootKamp"
// Output: 0
 
// Constraints:
// 1 <= text.length <= 10^4
// text consists of lower case English letters only.

function balloon(str) {
	var arr = [];
	[1] = ['b'];
	[2] = ['a'];
	[3] = ['l'];
	[4] = ['o'];
	[5] = ['n'];
	for (var i = 0; i < str.length; i++) {
		if (str[i] === 'b') {
			arr.push(str[1]);
		} else if (str[i] === 'a') {
			arr.push(str[2])
		} else if (str[i] === 'l') {
			arr.push(str[3])
		} else if (str[i] === 'o') {
			arr.push(str[4])
		} else if (str[i] === 'n') {
			arr.push(str[5]);
		}
	}

	return arr;
}