import React, {Component} from 'react';

class Login extends Component {
   constructor(props) {
      super(props);
      this.state = {
         username: '',
         password: ''
      }
   }

   handleSubmit = async (e) => {
      e.preventDefault();
      const loginResponse = await fetch('http://localhost:3001/mediumrare_database', {
         method: 'POST',
         credentials: 'include',
         body: JSON.stringify(this.state),
         headers: {
            'Content-Type': 'application/json'
         }
      });
      const parsedResponse = await loginResponse.json();
      if(parsedResponse.data === 'login successful') {
         // switch our route
         this.props.history.push('/');
      }
      console.log(parsedResponse, 'this is reponse from our express app')
   };

   handleChange = (e) => {
      this.setState({[e.target.name]: e.target.value});
   };

   render() {
      return (
         <div className="userLogIn">
         <h4>Login</h4> 
         <input
            onClick={this.handleSubmit}
            type="submit"
            value="Sign In"
         />
         </div>

      )
   }
};

export default Login;
