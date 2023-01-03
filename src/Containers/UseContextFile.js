import React, { Component } from 'react'

const UserContext = React.createContext()

class UserProvider extends Component {
  // Context state
  state = {
    apicallfail: true,
    nativerelated: true,
    javascriptrelated: true,
    apireturnerror: true
  }

  // Method to update state
  setUser = (info) => {
    //this.setState((prevState) => ({ user }))
    console.log('i was here', info)
    this.setState({
        [info.location]: info.value
    })
  }

  render() {
    const { children } = this.props
    const data = this.state
    const { setUser } = this

    return (
      <UserContext.Provider
        value={{
          data,
          setUser,
        }}
      >
        {children}
      </UserContext.Provider>
    )
  }
}

export default UserContext
export { UserProvider }
