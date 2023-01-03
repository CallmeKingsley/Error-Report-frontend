import React, { PureComponent } from 'react'
import HeaderComponent from '../../../Component/App/Header'
import SideComponent from '../../../Component/App/Side'
import "./styles.css"
class  ComponentFrame extends PureComponent {

   render(){
      return (
         <div style={{}}>
            <div style={{backgroundColor: 'blue'}} >
                 <HeaderComponent/>
            </div>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <div style={{backgroundColor: 'yellow'}}>
                   <SideComponent/>
                </div>
                <div style={{ width: '100%'}}>
                    {
                       this.props.children
                    }
                </div>
            </div>

         </div>
      )
  }
}
export default ComponentFrame