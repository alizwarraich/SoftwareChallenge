import React from 'react';
import styles from './styles';

class Header extends React.Component {
  render() {
    return (
      <div style={styles.layout}>
        <div style={styles.navItem}>
          <a
            style={styles.anchor}
            href=''
            onClick={e => e.preventDefault()}
          >
            Login
          </a>
        </div>
        <div style={styles.navItem}>
          <a
            style={styles.anchor}
            href=''
            onClick={e => e.preventDefault()}
          >
            Signup
          </a>
        </div>
      </div>
    );
  }
}

export default Header;