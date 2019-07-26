import React, { Component } from 'react'

class Counter extends React.Component{
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
            return this.props.render(this.state.count,this.clickHandler)
        }
    }
export default Counter