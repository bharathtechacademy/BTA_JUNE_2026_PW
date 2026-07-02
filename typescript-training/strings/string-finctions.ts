//String :  String is a collection of characters. 

let firstName: string = "Bharath";
let lastName: string = 'Reddy';
let fullName: string = `My name is ${firstName} ${lastName}`;
console.log(fullName);

//1. Storing a string in a variable
console.log("************Storing a string in a variable************");
let originalString: string = " Username : Admin | Password : admin123 ";
console.log(originalString);

//2. Method to calculate the total number of characters available in the string. => string.length
console.log("************Calculating the total number of characters in the string************");
console.log(`Total number of characters: ${originalString.length}`);

//3. Method to get a particular character from a specific index => string.charAt(Index)
console.log("************Getting a particular character from a specific index************");
let index: number = 5;
console.log(`Character at index ${index}: ${originalString.charAt(index)}`);

//Reverse the string. 
console.log("************Reverse the string************");
let reverseString :string = "";
for(let i =originalString.length-1 ;i>=0 ; i-- ){
    reverseString = reverseString+originalString.charAt(i);
}
console.log(reverseString);

//4. Method to remove unwanted spaces from the string 
console.log("************Method to remove unwanted spaces from the string************");
console.log(`Original String: "${originalString}"`);
let trimmedString: string = originalString.trim();
console.log(`Trimmed String: "${trimmedString}"`);

//5. Method to remove all the spaces from the string. => string.replace(/chars-to-be-replaced/g, '');
let stringWithoutSpaces: string = originalString.replace(/ /g, '');
console.log(`Original String: "${originalString}"`);
console.log(`String without spaces: "${stringWithoutSpaces}"`);

//6. Method to remove all the alphabets from the string. => string.replace(/chars-to-be-replaced/g, '');
let stringWithoutAlphabets: string = originalString.replace(/[a-zA-Z]/g, '');
console.log(`Original String: "${originalString}"`);
console.log(`String without alphabets: "${stringWithoutAlphabets}"`);

//7. Method to remove all the numbers from the string. => string.replace(/chars-to-be-replaced/g, '');
let stringWithoutNumbers: string = originalString.replace(/[0-9]/g, '');
console.log(`Original String: "${originalString}"`);
console.log(`String without numbers: "${stringWithoutNumbers}"`);

//8. Method to remove all the special characters from the string. => string.replace(/chars-to-be-replaced/g, '');
let stringWithoutSpecialChars: string = originalString.replace(/[^a-zA-Z0-9]/g, '');
console.log(`Original String: "${originalString}"`);
console.log(`String without special characters: "${stringWithoutSpecialChars}"`);