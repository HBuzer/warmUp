/* your task is to write a function that returns the smallest and largest integers in an unsorted string.
Input
 Your function will receive two arguments:

     A string comprised of integers in an unknown range; these numbers will be out of order
     An integer value representing the size of the range

Output
 Your function should return the starting (minimum) and ending (maximum) numbers of the range in the form of an array/list comprised of two integers.
 Test Example

 let inputString = '1568141291110137';

 mysteryRange(inputString,10) // [6,15]

     -The 10 numbers in this string are:
     -15 6 8 14 12 9 11 10 13 7
     -Therefore the range of numbers is from 6 to 15

Technical Details

 -The maximum size of a range will be 100 integers
 -The starting number of a range will be: 0 < n < 100
*/


//////////////////////////////////////////////////////////////////////////
																								///
function idk(str, int) {																///
	var keep;  //keep will have the two numbers like there are (1, 2),	///
					//keep will equal to ('12').										///
	var arr1 = [];	//will have all numbers like combined (12, 4, 7, 13).	///
	var j = 1;	// used as a pointer with i in the for loop					///
var string = str.split(''); //splits one string into array of strings	///
																								///
	for (var i = 0; i < string.length - 1; i++) {								///
			if (string[i] === '1') {													///
				keep = string[i] + string[j];											///
				arr1.push(parseInt(keep));												///
			} else {																			///
				arr1.push(parseInt(string[j]));										///
			}																					///
																								///
			j++;																				///
																								///
			if (arr1.length === int) {													///
				var max = arr1[0];														///
				var min = arr1[0];														///
																								///
				for (var a = 0; a < arr1.length; a++) {							///
					if (arr1[a] > max) {													///
						max = arr1[a];														///
					} else if (arr1[a] < min) {										///
						min = arr1[a];														///
					}																			///
				}																				///
																								///
			return "maximum num is: " + max +										///
					 " and minimum num is: " + min;									///
			}																					///
																								///
	}																							///
}																								///
																								///
																								///
																								///
																								///
																								///
//////////////////////////////////////////////////////////////////////////