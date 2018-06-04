import React from 'react';
import styles from './styles';
import Tweet from '../Tweet';
import Loading from '../Loading';

class Search extends React.Component {

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
    const {tweets, isLoading} = this.props;

    return (
      <div style={styles.layout}>
        <div style={styles.formLayout}>
          <form onSubmit={this.handleSubmit}>
            <p>Tweet covfefier</p>
            <div style={styles.inputLayout}>
              <input
                ref='searchString'
                style={styles.textInput}
                type='text'
                placeholder='Enter keyword(s) to covfefy'
              />
            </div>
            <div style={styles.inputLayout}>
              <input
                onClick={this.handleSubmit}
                style={styles.submitInput}
                className='btn'
                type='submit'
                value='Search'
              />
            </div>
          </form>
        </div>
        <div style={styles.resultLayout}>
          {(
            !isLoading && tweets.map((tweet, i) => (
              <Tweet key={`tweet-${i}`} tweet={tweet}/>
            ))
          ) || (isLoading && <Loading/>)}
        </div>
      </div>
    );
  }
}

export default Search;