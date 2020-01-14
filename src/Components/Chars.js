import React from 'react';
import Char from './Char';

const Chars = (props) => {
    const { chars, handleAvailableSpecialChar } = props

    const GenerateCharacters = chars.map((char) => {
       return <Char handleAvalibleChar={handleAvailableSpecialChar} char={char} />
    })
    return (<div className='charContainer'>
            {GenerateCharacters}
            </div>)
}

export default Chars;