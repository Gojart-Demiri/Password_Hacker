const availableChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

const specialChar = ['$', '*']

const AUX = (start, end) => {
  const RES = [];
  for (let index = start; index < end; index++) {
    RES.push(index);
  }
  return RES;
};
const CHARS = [
  ...AUX(32, 48),
  ...AUX(58, 65),
  ...AUX(91, 97),
  ...AUX(123, 127)
];
const ALL_CHARS = CHARS.map(el => String.fromCharCode(el));


const createPass = (arr) => {
  const password = [];
  for (let i = 0; i < 4; i++) {
    const randomNum = Math.floor(Math.random() * arr.length);
    // console.log('random', randomNum)
    // console.log('result', arr[randomNum])
    password.push(arr[randomNum])
  }
  return password.join("")
}

const generatePermutations = (arr) => {
  const resultArr = []
  arr.map((char) => {
    arr.map((char2) => {
      arr.map((char3) => {
        arr.map((char4) => {
          resultArr.push([String(char) + String(char2) + String(char3) + String(char4)])
        })
      })
    })
  })
  return resultArr;
}

const compareFunction = (passState, permutations) => {
  let result = "";
  permutations.map((element) => element == passState ? result = element[0].toString() :  null)
  return result;
}


export { availableChar, specialChar, ALL_CHARS, createPass, generatePermutations, compareFunction };

/* 
const compareFunction = (passState, permutations) => {
  let result = "";
  permutations.map((element) => {
    if (element[0] == passState) {
      result = element[0].toString();
    }
  });
  return result;
} */