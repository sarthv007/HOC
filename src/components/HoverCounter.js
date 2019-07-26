import React, { Component } from 'react'
import withCounter from './withCounter'
class HoverCounter extends Component {
    render() {
        const {count, clickHandler}= this.props
        return (
            <h1 onMouseOver={clickHandler}>
                Clicked {count} times
            </h1>
        )
    }
}

export default withCounter(HoverCounter)
