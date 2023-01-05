module.exports = function toReadable (number) {
    let singleDigits = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let twiceDigits = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    let tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    let hundred = "hundred";

    if (number == 0) {
        return "zero";
    } else if (number > 0 && number < 10) {
        return singleDigits[number];
    } else if (number > 9 && number < 20) {
        return twiceDigits[number-10];
    } else if (number > 19 && number < 100) {
        return tens[Math.floor(number/10)] + (number%10 == 0 ? "" : (" " + singleDigits[number%10]));
    } else if (number > 99 && number < 1000) {
        return singleDigits[Math.floor(number/100)] + " " + hundred + ((number%100 == 0) ? "" : (number%100 < 10) ? (" " + singleDigits[number%100]) : (number%100 < 20) ? 
        (" " + twiceDigits[(number%100)-10]) : (number%100 > 19) ? (" " + tens[Math.floor(number%100/10)] + ((number%100%10 > 0) ? (" " + singleDigits[number%100%10]) : "")) : "");
    }
}
