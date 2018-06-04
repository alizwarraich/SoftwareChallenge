import React from 'react';
import styles from './styles';

class Header extends React.Component {
  render() {
    return (
      <div style={styles.layout}>
        <div style={styles.navItem}>
          <a
            style={styles.anchor}
            href='/'
            // onClick={e => e.preventDefault()}
          >
            Tweet Covfefier
          </a>
        </div>
        <div style={styles.navItemRight}>
          <a
            style={styles.anchor}
            href='/login'
            // onClick={e => e.preventDefault()}
          >
            Login
          </a>
        </div>
        <div style={styles.navItemRight}>
          <a
            style={styles.anchor}
            href='/signup'
            // onClick={e => e.preventDefault()}
          >
            Signup
          </a>
        </div>
      </div>
    );
  }
}

export default Header;