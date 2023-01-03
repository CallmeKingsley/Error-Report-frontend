import React, { PureComponent } from 'react'
import "../../../Containers/Naviagtion/Frame/styles.css"
import { Link } from 'react-router-dom'
import History from '../../../History'
import Refresh from './refresh.png'
function EachSelection(props){
   var ItemStyle = {}
   if(props.location == props.highLight){
      ItemStyle = {marginLeft: 12,color:'#D47857'}
   }else{
      ItemStyle = {marginLeft: 12,color: '#fff'}
   }
   if(props.location == 'refresh'){
      return(
         <div style={{ height: 70, display: 'flex', alignItems: 'flex-end',  borderBottom: `2px solid black`, flexDirection: 'row'}}>
            <h3 id="pointer" style={ItemStyle} onClick ={() =>{}}>{props.name} </h3>
            <img src={Refresh} style ={{ height: 25, widows: 25, color: '#ffff', marginLeft: 12, marginBottom: 10}} alt="Logo"/>
            {/* <Link style={{marginLeft: 12, marginBottom: 5, color: '#fff'}}  to={`/${props.location}`}>
               {props.name}
            </Link> */}
         </div>
      )
   }
   return(
      <div style={{ height: 70, display: 'flex', alignItems: 'flex-end',  borderBottom: `2px solid black`}}>
         <h3 id="pointer" style={ItemStyle} onClick ={() =>props.pressFunc(props)}>{props.name} </h3>
         {/* <Link style={{marginLeft: 12, marginBottom: 5, color: '#fff'}}  to={`/${props.location}`}>
            {props.name}
         </Link> */}
      </div>
   )
}

class  SideComponent extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         itemToHightLight: History.location.pathname.substring(1)
       };
   }

   menuItemPressedFunc = (props) =>{
     // console.log('item pressed',props)
      this.setState({
         itemToHightLight: props.location
      })
      History.push(`/${props.location}`)
   }

   render(){
      return (
        <div style={{ width: 300, height: window.innerHeight, backgroundColor: '#4A4B4C' }}>
           <EachSelection name = {'Home (Report)'} location ={'home'} pressFunc = {this.menuItemPressedFunc} highLight ={this.state.itemToHightLight}/>
           <EachSelection name = {'Application Errors'} location ={'application'} pressFunc = {this.menuItemPressedFunc} highLight ={this.state.itemToHightLight}/>
           {/* <EachSelection name = {'Unit Test Report'} location ={'unitTest'} pressFunc = {this.menuItemPressedFunc} highLight ={this.state.itemToHightLight}/> */}
           <EachSelection name = {'Toggle Errors'} location ={'toggle'} pressFunc = {this.menuItemPressedFunc} highLight ={this.state.itemToHightLight}/>
           {/* <EachSelection name = {'Error Information'} location ={'information'} pressFunc = {this.menuItemPressedFunc} highLight ={this.state.itemToHightLight}/>   */}
           <EachSelection name = {'Refresh'} location ={'refresh'} pressFunc = {this.menuItemPressedFunc} highLight ={this.state.itemToHightLight}/>
        </div>
      )
  }
}
export default SideComponent


/**
 * <Route path='/login' exact strict component={LoginScreenComponent} />
          <ProtectedRoute path='/home' exact strict component={ HomeScreenComponent } />
          <ProtectedRoute path='/application' exact component={ApplicationScreenComponent} />
          <ProtectedRoute path='/toggle' exact component={ErrorToggleScreenComponent} />
          <ProtectedRoute path='/information' component={ErrorInformationScreenComponent} />
          <ProtectedRoute path='/unitTest' exact component={UnitTestScreenComponent} />
          <ProtectedRoute exact path='/' component={HomeScreenComponent} />
          <Route path='**' render={() => <div>404</div>} />
 */