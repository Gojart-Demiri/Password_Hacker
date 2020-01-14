import React from 'react'

const Sidebar = (props) => {


    return (<div className='sidebar'>
        <div className='button passwordbut' onClick={props.showPassword}><button type='button'>Generate Password</button></div>
        <div className='specialCharArr'>{props.specialChar && JSON.stringify(props.specialChar)}</div>
        <div className='password'>{props.password && props.password}</div>
        <div className='button hackbut' onClick={props.handleHack}><button type='button'>Hack It!</button></div>
        {props.hacked && <div className='hacked'>{props.hacked}</div> }
        </div>)
}

export default Sidebar