import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
     <div>Hello React!</div>
    )
  }
}

ReactDOM.render(<App/>,document.getElementById('root'));


