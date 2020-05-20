import { getLength, getFirstChar, getLastChar, getLowerCase, getUpperCase, titleCaseStr, removeSpace } from "./stringTools.js";

/* Grabbing elements from the DOM to give values to */
const name = document.querySelector("#myName");

const item1 = document.querySelector("#item1");
const item2 = document.querySelector("#item2");
const item3 = document.querySelector("#item3");
const item4 = document.querySelector("#item4");
const item5 = document.querySelector("#item5");
const item6 = document.querySelector("#item6");
const item7 = document.querySelector("#item7");

/* Adding Event listener to populate table on keyup() , ie when any keystroke is made on keyboard */
name.addEventListener("keyup", () => {
    const empty = "";
    const result = name.value;
    item1.textContent = getLength(result);
    item2.textContent = getLowerCase(result);
    item3.textContent = getUpperCase(result);
    item4.textContent = getFirstChar(result);
    item5.textContent = getLastChar(result);
    if (result) {
        item6.textContent = titleCaseStr(result);
    } else {
        item6.textContent = `${empty}`;
    }
    item7.textContent = removeSpace(result);

    if (result === undefined | result === "") {
        return `${empty}`;
    }
});

