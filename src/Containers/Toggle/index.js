import React, { PureComponent } from 'react'
import SwitchToggle from './ToggleSwitch'
import UserContext from '../UseContextFile';

class  ErrorToggleScreen extends PureComponent {
   static contextType = UserContext
   constructor(props) {
      super(props);
      this.state = {
          appCall: true,
          appReturn: true,
          nativeError: true,
          JSError: true

       };
   }

   onNewsletterChange(checked){
      
   const {setUser } = this.context
   const {data, ID} = checked
      setUser({
         location: ID,
         value: data
      })
   }

   TableHeader = () =>{
      return(
         <div style={{display: 'flex', flexDirection: 'row', width: 800, backgroundColor: '#4E738A', justifyContent: 'space-between',}}>
            <div style={{ width: 220, height: 60,display: 'flex', backgroundColor: '', justifyContent: 'center', alignItems: 'center'}}>
               <h3 style={{color: '#fff'}}>Error Type</h3>
            </div>
            <div style={{ width: 120, height: 60,display: 'flex', backgroundColor: '#4E738A',justifyContent: 'center', alignItems: 'center'}}>
               <h3  style={{color: '#fff'}}>Status</h3>
            </div>
         </div>
      )
   }


   TableBody = ({name, status, id}) =>{
      return(
         <div style={{display: 'flex', flexDirection: 'row', width: 800, backgroundColor: '#e6e7e8', justifyContent: 'space-between',borderBottom: `1px solid black`}}>
            <div style={{ width: 220, height: 60,display: 'flex', backgroundColor: '#e6e7e8', justifyContent: 'center', alignItems: 'center'}}>
               <h3 style={{color: '#000', fontSize: 18}}>{name}</h3>
            </div>
            <div style={{ width: 120, height: 60,display: 'flex',backgroundColor: '#e6e7e8',justifyContent: 'center', alignItems: 'center'}}>
               <SwitchToggle
                  id={id}
                  checked={status}
                  onChange={(data) =>this.onNewsletterChange({status: status,data: data, ID:id})}
               />
            </div>
         </div>
      )
   }


   render(){
      return (
         <div  style={{display: 'flex', alignItems: 'center', height: window.innerHeight, flexDirection: 'column'}}>
         <div  style={{height: 100}}>
             <h1 style={{marginTop: 20}}> Toggle Error</h1>
         </div>
           {this.TableHeader()}
           {this.TableBody({name: "Api Call Fail", status: this.context.data.apicallfail, id: 'apicallfail'})}
           {this.TableBody({name: "Native related", status: this.context.data.nativerelated,id: 'nativerelated'})}
           {this.TableBody({name: "Javascript related", status: this.context.data.javascriptrelated,id: 'javascriptrelated'})}
           {this.TableBody({name: "api return error",  status: this.context.data.apireturnerror,id: 'apireturnerror'})}
        </div>

      )
  }
}
export default ErrorToggleScreen