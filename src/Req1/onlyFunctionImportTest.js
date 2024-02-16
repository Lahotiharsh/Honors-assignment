import { isLeap } from "./dateUtil.js";

const leapYear = 2024;
const nonLeapYear = 2019;

console.log(leapYear, "is Leap Year ? : ", isLeap(leapYear));
console.log(nonLeapYear, "is Leap Year ? : ", isLeap(nonLeapYear));
