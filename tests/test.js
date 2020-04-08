import importAsString from "../index.js";
const test = importAsString("./test.txt");

if (typeof test !== "string") {
  throw new Error("Test failed: expected return value to be a string");
}

if (test !== "test") {
  throw new Error("Test failed: expected return value to be 'test'");
}

console.info("All tests passed!");
