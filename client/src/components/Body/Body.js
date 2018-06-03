import React from 'react';
import styles from './styles';

class Body extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.searchTweets(this.refs.searchString.value);
    this.refs.searchString.value = '';
  }

  render() {
    const {tweets} = this.props;

    return (
      <div style={styles.layout}>
        <div style={styles.formLayout}>
          <form onSubmit={this.handleSubmit}>
            <p>Search tweets</p>
            <div style={styles.inputLayout}>
              <input
                ref='searchString'
                style={styles.textInput}
                type='text'
                placeholder={'Search for tweets'}
              />
            </div>
            <div style={styles.inputLayout}>
              <input
                onClick={this.handleSubmit}
                style={styles.submitInput}
                className='btn'
                type='submit'
              />
            </div>
          </form>
        </div>
        <div style={styles.resultLayout}>
          {
            tweets.map((tweet, i) => (
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