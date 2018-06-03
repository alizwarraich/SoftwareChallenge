import React from 'react';
import styles from './styles';

const results = [{
  twitText: 'Tweet #1',
  poster: '@imranariffin',
}, {
  twitText: 'Tweet #2',
  poster: '@whynot',
}, {
  twitText: 'Tweet #3',
  poster: '@skyisthelimit',
}];

class Body extends React.Component {
  render() {
    return (
      <div style={styles.layout}>
        <div style={styles.formLayout}>
          <form>
            <p>Search tweets</p>
            <div style={styles.inputLayout}>
              <input
                style={styles.textInput}
                type='text'
                placeholder={'Search for tweets'}
              />
            </div>
            <div style={styles.inputLayout}>
              <input
                style={styles.submitInput}
                className='btn'
                type='submit'
              />
            </div>
          </form>
        </div>
        <div style={styles.resultLayout}>
          {
            results.map((tweet, i) => (
              <div key={i} style={styles.card} className='card'>
                <span>{tweet.twitText}</span>
                <span>{tweet.poster}</span>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

export default Body;