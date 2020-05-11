/* @param {string} name ; this holds for all stringTools.js functions */

export function getLength(name) {
  if (name) {
    var result = name.length;
  } else {
    result = "";
  }
  return `${result}`;
}

export function getLowerCase(name) {
  return name.toLowerCase();
}

export function getUpperCase(name) {
  return name.toUpperCase();
}

export function titleCaseStr(name) {
  let charArr = name.split(" ");
  let myArr = Array();
  for (let i = 0; i < charArr.length; i++) {
    var upper_item = charArr[i].substr(0, 1).toUpperCase();
    var tester = charArr[i].substr(1, charArr[i].length).toLowerCase();
    myArr.push(`${upper_item}${tester}`);
  }
  return myArr.join(" ");
}

export function getFirstChar(name) {
  if (name) {
    var result = name[0];
  } else {
    result = "";
  }
  return `${result}`;
}

export function getLastChar(name) {
  if (name) {
    var result = name[name.length - 1];
  } else {
    result = "";
  }
  return `${result}`;
}

export function removeSpace(name) {
  return name.trim();
}