import * as dateUtil from "./dateUtil.js";

const leapYear = 2024;
const nonLeapYear = 2019;

console.log(leapYear, "is Leap Year ? : ", dateUtil.isLeap(leapYear));
console.log(nonLeapYear, "is Leap Year ? : ", dateUtil.isLeap(nonLeapYear));
