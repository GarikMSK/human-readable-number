module.exports = function toReadable (number) {
 
let simpleNumbers = ["zero", "one","two","three","four","five","six","seven","eight","nine"]
let tensNumbers = ["ten","eleven","twelve","thirteen","fourteen","fiveteen","sixteen","seventeen","eighteen","nineteen"]
let deciNumbers = ["","","twenty", "thirdy", "fourthy", "fifty", "sixty", "seventy", "eighty", "ninegthy"]
numbersArray =Array.from(String(number)).reverse()

let finalText = ""
let justNumbers = simpleNumbers[numbersArray[0]]
if(numbersArray[1] == 0 || !numbersArray[1]) {finalText = justNumbers}
else if (numbersArray[1]== 1) {finalText = finalText + tensNumbers[numbersArray[0]]}
else if (numbersArray[1] >=2) {
    finalText = deciNumbers[numbersArray[1]]
    if(numbersArray[0] > 0) finalText = finalText + " " + justNumbers;
    if(numbersArray[2]) finalText = simpleNumbers[numbersArray[2]] + " hundred " + finalText
}
return finalText
}
