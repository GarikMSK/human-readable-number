module.exports = function toReadable (number) {

let simpleNumbers = ["zero", "one","two","three","four","five","six","seven","eight","nine"]
let tensNumbers = ["ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"]
let deciNumbers = ["","","twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]
numbersArray =Array.from(String(number)).reverse()

let finalText = ""
if (numbersArray[0]== 0 && numbersArray[1]== 0) {justNumbers = ""; hundredWord = " hundred"}
else {justNumbers = simpleNumbers[numbersArray[0]]; hundredWord = " hundred "}
if(numbersArray[1] == 0 || !numbersArray[1]) {finalText = justNumbers}
else if (numbersArray[1]== 1) {finalText = finalText + tensNumbers[numbersArray[0]]}
else if (numbersArray[1] >=2) {
    finalText = deciNumbers[numbersArray[1]]
    if(numbersArray[0] > 0) finalText = finalText + " " + justNumbers;
    
}
if(numbersArray[2]) finalText = simpleNumbers[numbersArray[2]] + hundredWord +finalText
console.log(finalText)

return finalText


   
 }