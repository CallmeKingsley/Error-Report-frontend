import React, { PureComponent } from 'react'

class  UnitTestScreen extends PureComponent {

   render(){
      return (
        <div  style={{backgroundColor: 'red',display: 'flex', justifyContent: 'center', alignItems: 'center', height: window.innerHeight}}>
           <h1> Unit Test Screen</h1>
        </div>
      )
  }
}
export default UnitTestScreen