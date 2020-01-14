import React from 'react';
import './App.css';
import { availableChar, specialChar, ALL_CHARS, createPass, generatePermutations, compareFunction } from '../src/lib/permutation';
import Chars from './Components/Chars';
import Sidebar from './Components/Sidebar';


class App extends React.Component {

  state = {
    availableChar,
    specialCharactersArr: [],
    specialCharForSideBar: [],
    permutations: [],
    password: '',
    hacked: ''
  }

  handleAvailableSpecialChar = (char, active) => {
    console.log(char)
    /* active ? this.state.specialCharactersArr.push(char) : this.state.specialCharactersArr.filter((char) => !this.state.specialCharactersArr) */
    if (!active) {
      this.state.specialCharactersArr.push(char)
    } else {
      const index = this.state.specialCharactersArr.indexOf(char)
      this.state.specialCharactersArr.splice(index, 1)
    }
    console.log('special', this.state.specialCharactersArr)
    this.setState({ specialCharForSideBar: this.state.specialCharactersArr })
  }

  showPassword = () => {
    const allChar = [...this.state.availableChar, ...this.state.specialCharactersArr]
    const password = createPass(allChar)
    const permutations = generatePermutations(allChar)
    this.setState({ password,
                    permutations})
    }

  handleHack = () => {
    const compareison = compareFunction(this.state.password, this.state.permutations)
    console.log(compareison)
    this.setState({ hacked: compareison })
  }


  render() { 
     return (<div>
        <Chars handleAvailableSpecialChar={this.handleAvailableSpecialChar} chars={ALL_CHARS} />
        <Sidebar specialChar={this.state.specialCharForSideBar} showPassword={this.showPassword} password={this.state.password} handleHack={this.handleHack} hacked={this.state.hacked} />
      </div>)
}
}


export default App;