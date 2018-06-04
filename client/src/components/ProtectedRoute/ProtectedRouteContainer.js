import {connect} from 'react-redux';

export const mapStateToProps = () => {
  return {
    isAuthorized: () => {
      return true;
    },
  };
};

export default connect(
  mapStateToProps
);