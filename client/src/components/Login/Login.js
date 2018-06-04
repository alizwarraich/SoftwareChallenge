import React from 'react';
import styles from './styles';

class Login extends React.Component {

  constructor(props) {
    super(props);

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(e) {
    e.preventDefault();

    const
      email = this.refs.email,
      password = this.refs.password;

    this.props.login(email.value, password.value);
    email.value = '';
    password.value = '';
  }

  render() {
    return (
      <div style={styles.layout}>
        <div style={styles.formLayout}>
          <p>Login to Covfefe</p>
          <form onSubmit={this.handleLogin} method='POST'>
            <input
              type='email'
              placeholder='Email'
              ref='email'
            />
            <input
              type='password'
              placeholder='Password'
              ref='password'
            />
            <input
              type='submit'
              className='btn'
              value='login'
              style={styles.submitInput}
              onClick={this.handleLogin}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Login;