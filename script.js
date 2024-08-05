function firstNonRepeatedChar(str) {
 // Write your code here
	const char = {};
	for(const char of str){
		if(charCount[char]){
			charCount[char]++;
		}
		else {
			charCount[char] = 1;
		}
	}

	for(const char of str){
		if(charCount[char]===1){
			return char;
		}
	}
	return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
