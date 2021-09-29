import { Component } from 'react'
import Button from 'react-bootstrap/Button'
import LoginForm from './LoginForm.js'

export default class LoginButton extends Component {
  constructor(props){
    super(props);
    this.state = {showForm: false}
  }
  loginClick = () => {
    this.setState({
      showForm: true,
    })
  }
  render() {
    /* TODO: Render a button with label 'Log In'. When the button is clicked then show LoginForm instead */
    if(this.state.showForm){
      return <LoginForm onLogin={this.props.onLogin}/>
    }
    else{
      return <Button onClick={this.loginClick}>Login</Button>
    }
  }
}