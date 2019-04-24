const tags = [ ['{', '}'], ['[', ']'], ['(', ')'] ];

const buildHash = (tags, indexed) => tags.reduce((last, pair) => { last[pair[indexed]] = true; return last; }, {});

const openingHash = buildHash(tags, 0);
const closingHash = buildHash(tags, 1);

const isOpeningTag = (tag) => openingHash.hasOwnProperty(tag);
const isClosingTag = (tag) => closingHash.hasOwnProperty(tag);

const tagMatches = (top, closingTag) => tags.find((pairTags) => pairTags[0] === top && pairTags[1] === closingTag);

const isBalanced = (str) => {
  if (typeof str !== 'string' || !Boolean(str)) {
    return false;
  }

  const letters = str.split('');
  const limit = letters.length;
  const stack = [];

  for(var i = 0; i < limit; i++) {
    const letter = letters[i];
    if (isOpeningTag(letter)) {
      stack.push(letter);
      continue;
    }

    if (!Boolean(stack.length)) {
      return false;
    }

    const top = stack.pop();

    if (!tagMatches(top, letter)) {
      return false;
    }
  }

  return !Boolean(stack.length);
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

console.log(isBalanced(""));
console.log(isBalanced());
console.log('test0',isBalanced(test0));
console.log('test1',isBalanced(test1));
console.log('test2',isBalanced(test2));
console.log('test3',isBalanced(test3));
console.log('test4',isBalanced(test4));
console.log('test5',isBalanced(test5));
console.log('test6',isBalanced(test6));
console.log('test7',isBalanced(test7));
console.log("start_other", isBalanced(true));
console.log(isBalanced(false));
console.log(isBalanced(1.0));
console.log(isBalanced(1));
console.log(isBalanced({}));
console.log("end_other", isBalanced(NaN));
console.log(isBalanced(special_test));