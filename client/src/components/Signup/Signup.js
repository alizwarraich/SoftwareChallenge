import React from 'react';
import styles from './styles';

class Signup extends React.Component {

  constructor(props) {
    super(props);

    this.handleSignup = this.handleSignup.bind(this);
  }

  handleSignup(e) {
    e.preventDefault();

    const
      email = this.refs.email,
      password = this.refs.password,
      confirmPassword = this.refs.confirmPassword;

    this.props.signup(email.value, password.value, confirmPassword.value);
    email.value = '';
    password.value = '';
    confirmPassword.value = '';
  }

  render() {
    return (
      <div style={styles.layout}>
        <div style={styles.formLayout}>
          <p>Signup to Covfefe</p>
          <form onSubmit={this.handleSignup}>
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
              type='password'
              placeholder='Confirm password'
              ref='confirmPassword'
            />
            <input
              type='submit'
              className='btn'
              value='signup'
              style={styles.submitInput}
              onClick={this.handleSignup}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;