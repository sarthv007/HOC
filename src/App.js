import React from 'react'
import CounterTow from './components/CounterTow';
import HoverCounter from './components/HoverCounter';
import Counter from './components/Counter' 
class App extends React.Component {
  render() {
    return (
      <div>
        {
        /*<CounterTow />
        <HoverCounter /> */
        }
      <center>
      <Counter render={ (count,clickHandler) => ( 
          <CounterTow count={count} clickHandler={clickHandler} /> 
      )} 
      />
      <Counter render={ (count,clickHandler) =>(
        <HoverCounter count={count} clickHandler={clickHandler} />
      )} 
      />  
      </center>
      </div>
    )
  }
}
export default App