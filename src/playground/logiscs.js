/* import React from 'react';
import './App.css';
import { availableChar, specialChar, ALL_CHARS } from '../src/lib/permutation';

class App extends React.Component {

  // console.log(availableChar)
  // console.log(ALL_CHARS)

  combinedArr = [...availableChar, ...specialChar]
  // console.log('comb', combinedArr)

  generatePermutations = (arr) => {
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

// console.log('permutations', generatePermutations(combinedArr))


  createPass = (arr) => {
    const password = [];
  for (let i = 0; i < 4; i++) {
      const randomNum = Math.floor(Math.random() * arr.length);
      // console.log('random', randomNum)
      // console.log('result', arr[randomNum])
      password.push(arr[randomNum])
  }
      return password.join("")
  }

  console.log('pass', createPass(combinedArr))

  compareFunction = (arr) => {
    // const generatePermutationArr = generatePermutations(arr)
    console.log('generatedarr', generatePermutations(arr))
    const randomPass = createPass(arr)
    generatePermutations(arr).map((element) => {
      return element[0].toString() === randomPass ? console.log('answer', randomPass) : ''
      })
  }

  compareFunction(combinedArr);

  return (<div>
    Test
    </div>)

  }
}

export default App;
 */