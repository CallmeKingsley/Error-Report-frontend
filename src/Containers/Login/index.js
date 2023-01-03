import React, { PureComponent } from 'react'
import History from '../../History'

class  LoginScreen extends PureComponent {

   constructor(props) {
      super(props);
      this.state = {
         password: '',
         name: ''
       };
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleSubmit(event) {
      console.log(this.state)
      History.push('/home')
      event.preventDefault();
   }
 
   handleInputChange(event) {
      const target = event.target;
      const name = target.name;
      const value = target.value

      this.setState({
         [name]: value
       });
   }

   render(){
      const systemHeight = window.innerHeight
      return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
           <div>
               <form style={{display: 'flex', flexDirection: 'column', marginTop: systemHeight / 3}} onSubmit={this.handleSubmit}>
                  <label style={{display: 'flex', flexDirection: 'column',}}>
                     Name:
                     <input style={{ height: 25, width: 300, marginBottom: 10}} type="text" name="name"  onChange={this.handleInputChange}/>
                  </label>
                  <label style={{display: 'flex', flexDirection: 'column',}}>
                     Password:
                     <input style={{ height: 25, width: 300, marginBottom: 20}} type="text" name="password"  onChange={this.handleInputChange}/>
                  </label>
                  <input  style={{ height: 35 , fontSize: 18}} type="submit" value="Submit" />
               </form>
           </div>
        </div>
      )
  }
}
export default LoginScreen