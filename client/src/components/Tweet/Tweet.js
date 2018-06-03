import React from 'react';
import styles from './styles';

const Tweet = ({tweet}) => {
  return (
    <div style={styles.card} className='card'>
      <span>{tweet.user.name} @{tweet.user.screen_name}</span><br/>
      <span>{tweet.text}</span>
    </div>
  );
};

Tweet.propTypes = {

};

export default Tweet;