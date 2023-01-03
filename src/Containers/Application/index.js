import * as R from 'ramda'
import React, { PureComponent } from 'react'
import { TableHeader, TableBody } from './table'
import Data from '../../AppData.json'
import ApiData from '../../Api.json'
import Pagination from "react-js-pagination";
import UserContext from '../UseContextFile';
import Arrow from './leftArrow.png'
import { Router } from 'react-router-dom'
require("bootstrap/less/bootstrap.less");


function DisplayDetails(data){
      return (
          <div style={{display: 'flex',flexDirection: 'row', marginBottom: 20,borderBottom: `1px solid black`}}>
                  <div style={{display: 'flex', height: 60, width: 200, backgroundColor: '#d47857', justifyContent: 'center', alignItems: 'center'}}>
                     <h3 style={{color: '#000', fontSize: 14, fontWeight: 'bold'}}> {data.data.title}</h3>
                  </div>
                  <div style={{display: 'flex', height: 60, width: 600, backgroundColor: '#4E738A',justifyContent: 'center', alignItems: 'center'}}>
                     <h3 style={{color: '#fff', fontSize: 12}}> {data.data.details}</h3>
                  </div>
         </div>
      )
   }

class  ApplicationErrorScreen extends PureComponent {
   static contextType = UserContext
   constructor(props) {
      super(props);
      this.state = {
         hideTable: false,
         apiCall: true,
         activePage: 5,
         data: {},
         appData: []
       };
   }

   onArrowPress = (data) =>{
      console.log('data pressed', data)
      this.setState({
         hideTable: true,
         apiCall: data.errorType == "api call fail" ? true : false,
         data: data
      })
   }


   handlePageChange = (data) =>{
     console.log('=====>',data)
     this.setState({
      activePage: data
     })
   }

   filterExclude = (data) =>{
      const arrData = Object.entries(data)
      const finalArr = []
      arrData.map(each =>{
         if(each[1] == false){
            finalArr.push(each[0])
         }
      })

      return finalArr
   }
   

   render(){
      console.log(this.state.data)
      const arr = this.filterExclude(this.context.data)
      return (
        <div  style={{display: 'flex', alignItems: 'center', height: window.innerHeight, flexDirection: 'column'}}>
         <div  style={{height: 100}}>
             <h1 style={{marginTop: 20}}> Application Error Screen</h1>
         </div>
        {!this.state.hideTable &&  <TableHeader/>}
          {
            !this.state.hideTable && this.state.appData.map(each =>{
               const item  = each.errorType.split(' ').join('')
               if(R.includes(item, arr)){
                   return null
               }else{
                  return <TableBody data = {each} arrowPressed ={this.onArrowPress}/>
               }
            })
        }
        { !this.state.hideTable && <Pagination
            activePage={this.state.activePage}
            itemsCountPerPage={10}
            totalItemsCount={this.state.appData.length}
            pageRangeDisplayed={5}
            onChange={this.handlePageChange.bind(this)}
         />}
        {
           this.state.hideTable && this.state.apiCall && <div>
            <div id='pointer' style={{ display: 'flex',height: 40, width: 120, backgroundColor: '#4fbccb', justifyContent: 'space-between', alignItems: 'center',flexDirection: 'row'}} onClick ={() => this.setState({hideTable: false})}>
               <div>
                  <img src={Arrow} style ={{ height: 18, width: 18}} alt="Logo"/>
               </div>
               <div>
                  <h3 id='pointer' style={{color: 'black', marginTop: 10,fontWeight: 'bold'}}>
                     back
                  </h3>
               </div>
            </div>
              <DisplayDetails data ={{title: 'Date', details: this.state.data.dateCreated}}/>
              <DisplayDetails data ={{title: 'Call', details: this.state.data.url}}/>
              <DisplayDetails data ={{title: 'payload', details: this.state.data.payload}}/>
              <DisplayDetails data ={{title: 'functionName', details: this.state.data.functionName}}/>
              <DisplayDetails data ={{title: 'method', details: this.state.data.method}}/>
              <DisplayDetails data ={{title: 'platForm', details: this.state.data.platform}}/>
              <DisplayDetails data ={{title: 'isFatal', details: this.state.data.isFatal}}/>
              <DisplayDetails data ={{title: 'reason', details: this.state.data.cause}}/>
              <DisplayDetails data ={{title: 'userId', details: this.state.data.userId}}/>
              <DisplayDetails data ={{title: 'version', details: this.state.data.version}}/>
              <DisplayDetails data ={{title: 'build', details: this.state.data.build}}/>
              <DisplayDetails data ={{title: 'Error Message', details: this.state.data.errorMessage}}/>
              <DisplayDetails data ={{title: 'resolveby', details: this.state.data.resolveby}}/>
           </div>
           
        }

         {
           this.state.hideTable && !this.state.apiCall && <div>
              <div id='pointer' style={{ display: 'flex', height: 40, width: 120, backgroundColor: '#4fbccb', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}} onClick ={() => this.setState({hideTable: false})}>
               <div>
                        <img src={Arrow} style ={{ height: 18, width: 18}} alt="Logo"/>
               </div>
               <div>
                  <h3 id='pointer' style={{color: 'black', marginTop: 10,fontWeight: 'bold'}}>
                     back
                  </h3>
               </div>
              </div>
              <DisplayDetails data ={{title: 'Date', details: this.state.data.dateCreated}}/>
              <DisplayDetails data ={{title: 'Error Message', details: this.state.data.errorMessage}}/>
              <DisplayDetails data ={{title: 'isFatal', details: this.state.data.isFatal}}/>
              <DisplayDetails data ={{title: 'platForm', details: this.state.data.platform}}/>
              <DisplayDetails data ={{title: 'userId', details: this.state.data.userId}}/>
              <DisplayDetails data ={{title: 'version', details: this.state.data.version}}/>
              <DisplayDetails data ={{title: 'build', details: this.state.data.build}}/>
              <DisplayDetails data ={{title: 'resolveby', details: this.state.data.resolveby}}/>
           </div>    
        }
        </div>
      )
  }

  componentDidMount() {
   fetch('https://error-report-station.herokuapp.com/api/error/getErrors')
   .then((response) => response.json())
   .then(data => {
       this.setState({ appData: data.errors });
   });
} 
}
export default ApplicationErrorScreen