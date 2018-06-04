import {connect} from 'react-redux';
import auth from '../../utils/auth';

export const mapStateToProps = () => {
  return {
    isAuthorized: () => !!auth.getToken(),
  };
};

export const mapDispatchToProps = () => ({});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
);
