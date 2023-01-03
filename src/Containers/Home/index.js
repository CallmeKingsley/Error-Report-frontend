import React, { PureComponent } from 'react'

class  HomeScreen extends PureComponent {

   render(){
      return (
        <div style={{backgroundColor: '#f6f6f6',display: 'flex', justifyContent: 'center',  height: window.innerHeight}}>
           <h1> Home (Report)</h1>
        </div>
      )
  }
}
export default HomeScreen