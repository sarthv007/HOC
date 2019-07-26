import React, { Component } from 'react'
import withCounter from './withCounter'
class CounterTow extends Component {
    
    render() {
        const {count,clickHandler}= this.props
        return (
            <button onClick={clickHandler}>
                Clicked {count} times
            </button>
        )
    }
}

export default withCounter(CounterTow)
