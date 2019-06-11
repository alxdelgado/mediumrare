import React, {Component} from 'react';

class Login extends Component {
   constructor(props) {
      super(props);
      this.state = {
         username: '',
         password: ''
      }
   }

   componentDidMount() {
      console.log('Component Has Mounted in Login');
   }

   addUser(e) {
      e.preventDefault();
      let data = {
         username: this.refs.username.value,
         email: this.refs.email.value,
         password: this.refs.password.value
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
         this.props.history.push('/'); // sends you to the home page
      }
      console.log(parsedResponse, 'this is reponse from our express app')
   };

   handleChange = (e) => {
      this.setState({[e.target.name]: e.target.value});
   };

   render() {
      return (
         <div className='userLogin'>
         <h4>Login</h4>
         <form ref="userData">
            <input type='text' ref='username' placeholder='username'/>
            <input type='text' ref='email' placeholder='email'/>
            <input type='text' ref='password' placeholder='password'/>
            <button onClick={this.addUser.bind(this)}>Submit</button>
         </form>
         </div>

      )
   }
};

export default Login;
