const isBalancedString = s => {
  let str = s;
  if (charType(str) !== "string" || str.length === 0) {
    return false;
  }
  let arrFromS = str.split("");
  let stack = [];

  for (let index = 0; index < arrFromS.length; index++) {
    if (isParanthesis(arrFromS[index])) {
      if (isOpenParenthesis(arrFromS[index])) {
        addItemStack(stack, arrFromS[index]);
      } else {
        if (stackLength(stack) === 0) {
          return false;
        }
        let lastItem = removeItemStack(stack);
        if (!matches(lastItem, arrFromS[index])) {
          return false;
        }
      }
    } else {
      return false;
    }
  }
  return stackLength(stack) === 0 ? true : false;
};

const charType = a => {
  return typeof a;
};

const sampleArrString = () => {
  return [["{", "}"], ["[", "]"], ["(", ")"]];
};

const stackLength = a => {
  return a.length;
};
const addItemStack = (a, b) => {
  return a.push(b);
};
const removeItemStack = a => {
  return a.pop();
};

const isParanthesis = a => {
  let brakes = "{}[]()";
  return brakes.indexOf(a) > -1 ? true : false;
};
const isOpenParenthesis = a => {
  let sampleArr = sampleArrString();
  for (let index = 0; index < sampleArr.length; index++) {
    if (sampleArr[index][0] === a) {
      return true;
    }
  }
  return false;
};
const matches = (a, b) => {
  let sampleArr = sampleArrString();
  for (let index = 0; index < sampleArr.length; index++) {
    if (sampleArr[index][0] === a && sampleArr[index][1] === b) {
      return true;
    }
  }
  return false;
};

let test0 = "[({})]"; // true
let test1 = "[({})"; // False
let test2 = "([)]"; // false
let test3 = "[[[[[[[[{{{{{{{{((((()))))}}}}}}}}]]]]]]]]"; // true
let test4 = "[({"; // False
let test5 = "()"; // true
let test6 = "()1"; // true
let test7 = "[[[[[[[[{{{{{{{{((((()))))}}}}}}}}]]]]]]]]544"; // true

let special_test = "[()()]"; // true

console.log(isBalancedString(""));
console.log(isBalancedString());
console.log('test0',isBalancedString(test0));
console.log('test1',isBalancedString(test1));
console.log('test2',isBalancedString(test2));
console.log('test3',isBalancedString(test3));
console.log('test4',isBalancedString(test4));
console.log('test5',isBalancedString(test5));
console.log('test6',isBalancedString(test6));
console.log('test7',isBalancedString(test7));
console.log("start_other", isBalancedString(true));
console.log(isBalancedString(false));
console.log(isBalancedString(1.0));
console.log(isBalancedString(1));
console.log(isBalancedString({}));
console.log("end_other", isBalancedString(NaN));
console.log(isBalancedString(special_test));
