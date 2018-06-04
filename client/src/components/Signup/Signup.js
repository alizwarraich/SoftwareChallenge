import React from 'react';
import styles from './styles';

const Signup = () => {
  return (
    <div style={styles.layout}>
      <div style={styles.formLayout}>
        <p>Signup to Covfefe</p>
        <form>
          <input type='email' placeholder='Email'/>
          <input type='password' placeholder='Password'/>
          <input type='password' placeholder='Confirm password'/>
          <input
            type='submit'
            className='btn'
            value='signup'
            style={styles.submitInput}
          />
        </form>
      </div>
    </div>
  );
};

export default Signup;