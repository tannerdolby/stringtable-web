import { 
    getLength, getFirstChar, getLastChar, getLowerCase, getUpperCase, titleCaseStr, removeSpace, rot13, toCamelCase, toAscii, toHex, huffmanCode
} from "./stringTools.js";

/* Grabbing elements from the DOM to give values to */
const name = document.querySelector("#myName");

const item1 = document.querySelector("#item1");
const item2 = document.querySelector("#item2");
const item3 = document.querySelector("#item3");
const item4 = document.querySelector("#item4");
const item5 = document.querySelector("#item5");
const item6 = document.querySelector("#item6");
const item7 = document.querySelector("#item7");
const item8 = document.querySelector("#item8");
const item9 = document.querySelector("#item9");
const item10 = document.querySelector("#item10");
const item11 = document.querySelector("#item11");
const item12 = document.querySelector("#item12");

/* Adding Event listener to populate table on keyup() , ie when any keystroke is made on keyboard */
name.addEventListener("keyup", () => {
    const result = name.value;
    if (result !== undefined || "") {
        item1.innerText = getLength(result);
        item2.innerText = getLowerCase(result);
        item3.innerText = getUpperCase(result);
        item4.innerText = getFirstChar(result);
        item5.innerText = getLastChar(result);
        item6.innerText = titleCaseStr(result);
        item7.innerText = removeSpace(result);
        item8.innerText = rot13(result);
        item9.innerText = toCamelCase(result);
        item10.innerText = toAscii(result);
        item11.innerText = toHex(result);
        item12.innerText = huffmanCode(result);
    }
});

// Add event listener for click event on clear button
const clearBtn = document.body.querySelector("#myBtn");
clearBtn.addEventListener("click", function() {
    name.value = null;
    item1.textContent = null;
    item2.innerText = null;
    item3.innerText = null;
    item4.innerText = null;
    item5.innerText = null;
    item6.innerText = null;
    item7.innerText = null;
    item8.innerText = null;
    item9.innerText = null;
    item10.innerText = null;
    item11.innerText = null;
    item12.innerText = null;
});

