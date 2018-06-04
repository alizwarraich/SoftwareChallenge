import {connect} from 'react-redux';
import auth from '../../utils/auth';

export const mapStateToProps = () => {
  return {
    isAuthorized: () => {
      return !!auth.getToken();
    },
  };
};

export default connect(
  mapStateToProps
);