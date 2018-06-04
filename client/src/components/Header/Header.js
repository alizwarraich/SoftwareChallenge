import React from 'react';
import styles from './styles';

class Header extends React.Component {
  render() {

    const {isAuthorized} = this.props;

    return (
      <div style={styles.layout}>
        <div style={styles.navItem}>
          <a
            style={styles.anchor}
            href='/'
          >
            Tweet Covfefier
          </a>
        </div>
        {!isAuthorized() && <div style={styles.navItemRight}>
          <a
            style={styles.anchor}
            href='/login'
          >
            Login
          </a>
        </div>}
        {!isAuthorized() && <div style={styles.navItemRight}>
          <a
            style={styles.anchor}
            href='/signup'
          >
            Signup
          </a>
        </div>}
        {isAuthorized() && <div style={styles.navItemRight}>
          <a
            style={styles.anchor}
            href='/logout'
            onClick={(e) => {e.preventDefault();console.log('logout!')}}
          >
            Logout
          </a>
        </div>}
        </div>
    );
  }
}

export default Header;