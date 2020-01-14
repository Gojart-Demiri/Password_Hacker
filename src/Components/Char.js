import React from 'react';

class Char extends React.Component {
    state = {
        active: false
    }

    handleClick = () => {
        console.log('Works')
        this.setState({ active: !this.state.active})
        this.props.handleAvalibleChar(this.props.char, this.state.active)
    }

    render() {
        const activeOrNot = this.state.active ? 'handleActive' : ''
        return (<div onClick={this.handleClick} className={`char ${activeOrNot}`}>
            {this.props.char}
            </div>)
    }
}

export default Char;