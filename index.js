const output = document.getElementById("output");
const copyElement = document.getElementById("copysvg");
const pwdLenth = document.getElementById("characterLenth");
const slider = document.getElementById("slidBar");
const upperCase = document.getElementById("upperCaser");
const lowerCase = document.getElementById("lowerCase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");
const strenthtype = document.getElementById("strenthtype");
const srthboxA = document.getElementById("srthboxA");
const srthboxB = document.getElementById("srthboxB");
const srthboxC = document.getElementById("srthboxC");
const srthboxD = document.getElementById("srthboxD");
const generatBtn = document.getElementById("generatBtn");

console.log("pass", combinedChars);
console.log("slider-", slider)


//
let sliderValue = 8
pwdLenth.innerText = sliderValue


// ON slider change
slider.addEventListener('change', () => {
    sliderValue = slider.value
    pwdLenth.innerText = sliderValue
        // generateRandomPassowrd()
});

//  includeUppperChar, includeLowerChar, includeNum, includeSpecialChar
function generateRandomPassowrd(
    charLen = 8, isUpperCase = false, isLowerCase = false, isNum = false, isSymbols = false
) {


    const char1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const char2 = 'abcdefghijklmnopqrstuvwxyz';
    const char3 = '0123456789';
    const char4 = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}";
    const combinedChars = char1 + char2 + char3 + char4;

}