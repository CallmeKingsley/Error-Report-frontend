import React, { PureComponent } from 'react'

class  ErrorInformationScreen extends PureComponent {

   render(){
      return (
        <div style={{backgroundColor: 'red',display: 'flex', justifyContent: 'center', alignItems: 'center', height: window.innerHeight}}>
           <h1> Error Information Screen</h1>
        </div>
      )
  }
}
export default ErrorInformationScreen