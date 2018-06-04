import React from 'react';
import styles from './styles';

const Login = () => {
  return (
    <div style={styles.layout}>
      <div style={styles.formLayout}>
        <p>Login to Covfefe</p>
        <form>
          <input type='email' placeholder='Email'/>
          <input type='password' placeholder='Password'/>
          <input
            type='submit'
            className='btn'
            value='login'
            style={styles.submitInput}
          />
        </form>
      </div>
    </div>
  );
};

export default Login;