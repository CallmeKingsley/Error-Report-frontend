import React, { PureComponent, useState } from 'react'
import {
    Router,
    Switch,
    Route
  } from 'react-router-dom'
import LoginScreen from '../Login'
import HomeScreen from '../Home'
import ApplicationErrorScreen from '../Application'
import ErrorInformationScreen from '../ErrorInfo'
import ErrorToggleScreen from '../Toggle'
import UnitTestScreen from '../UnitTest'
import { ProtectedRoute } from './ProtectedRoute'
import History from '../../History'
import ComponentFrame from './Frame'
import { UserProvider } from '../UseContextFile'
class  HomeScreenComponent extends PureComponent {
  render(){
    return(
      < ComponentFrame>
         <HomeScreen/> 
      </ComponentFrame>
    )
  }
}


class  ApplicationScreenComponent extends PureComponent {
  render(){
    return(
      < ComponentFrame>
         <ApplicationErrorScreen/> 
      </ComponentFrame>
    )
  }
}

class  ErrorToggleScreenComponent extends PureComponent {
  render(){
    return(
      < ComponentFrame>
         <ErrorToggleScreen/> 
      </ComponentFrame>
    )
  }
}
 
class ErrorInformationScreenComponent extends PureComponent {
  render(){
    return(
      < ComponentFrame>
         <ErrorInformationScreen/> 
      </ComponentFrame>
    )
  }
}

class UnitTestScreenComponent extends PureComponent {
  render(){
    return(
      < ComponentFrame>
         <UnitTestScreen/> 
      </ComponentFrame>
    )
  }
}

// class  NavigationScreen extends PureComponent {
//   constructor(props) {
//     super(props);
//     this.state = {
//        appCallError: false,
//        NativeRelated: false,
//        JavascriptRelated: false
//      };
//   }
//    render(){
//       return (
//         <Router history={History} >
//           <UserContext.Provider value={this.state}>
//             <Switch>
//               <Route path='/login' exact strict component={LoginScreen} />
//               <ProtectedRoute path='/home' exact strict component={ HomeScreenComponent } />
//               <ProtectedRoute path='/application' exact component={ApplicationScreenComponent} />
//               <ProtectedRoute path='/toggle' exact component={ErrorToggleScreenComponent} />
//               <ProtectedRoute path='/information' component={ErrorInformationScreenComponent} />
//               <ProtectedRoute path='/unitTest' exact component={UnitTestScreenComponent} />
//               <ProtectedRoute exact path='/' component={HomeScreenComponent} />
//               <Route path='**' render={() => <div>404</div>} />
//             </Switch>
//           </UserContext.Provider>
//       </Router>
//       )
//   }
// }

const  NavigationScreen  = () =>{
    return (
      <Router history={History} >
        <UserProvider>
          <Switch>
            <Route path='/login' exact strict component={LoginScreen} />
            <ProtectedRoute path='/home' exact strict  component={ HomeScreenComponent } />
            <ProtectedRoute path='/application' exact component={ApplicationScreenComponent} />
            <ProtectedRoute path='/toggle' exact component={ErrorToggleScreenComponent} />
            <ProtectedRoute path='/information' component={ErrorInformationScreenComponent} />
            <ProtectedRoute path='/unitTest' exact component={UnitTestScreenComponent} />
            <ProtectedRoute exact path='/' component={HomeScreenComponent} />
            <Route path='**' render={() => <div>404</div>} />
          </Switch>
        </UserProvider>
      </Router>
    )
}


export default NavigationScreen