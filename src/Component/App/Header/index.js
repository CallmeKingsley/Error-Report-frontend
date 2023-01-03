import React, { PureComponent } from 'react'
import History from '../../../History'

class  HeaderComponent extends PureComponent {
   onpressFunc = () =>{
      History.push('/login')
     console.log('i was clicked')
   }

   render(){
      return (
        <div style={{display: 'flex', width: '100%', height: 80, backgroundColor: '#4FBCCB', marginTop: 0, alignItems: 'center', justifyContent: 'space-between'}}>
           <h2 id="pointer" style={{marginLeft: 12, color: '#fff'}}> Nations Photo Lab Error Handler </h2>
           <h3 id="pointer" onClick={() => this.onpressFunc()} style={{marginRight: 12,color: '#fff'}}> Log out</h3>
        </div>
      )
  }
}
export default HeaderComponent