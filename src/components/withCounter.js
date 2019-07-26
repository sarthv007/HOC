import React, { Component } from 'react'

const withCounter = WrappedComponent => {
    class withCounter extends React.Component{
        constructor(props) {
            super(props)
        
            this.state = {
                 count:0
            }
        }
        
        clickHandler = () =>{
            this.setState(prevState=>{
                return { 
                    count:prevState.count+1 
                }
            });
        }

        render(){
            return (
                <WrappedComponent count={this.state.count} clickHandler={this.clickHandler} />
            )
        }
    }
    return withCounter
}
export default withCounter