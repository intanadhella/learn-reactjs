import React, { Component } from 'react'

class ButtonSuccess extends Component {
    clicked = (event) => {
        window.alert('terklik')
    }
    render(){
        return (
            <button onClick={this.clicked} >
                Yes
            </button>
        )
    }
}

export default ButtonSuccess