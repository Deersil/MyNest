import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { signInAsync, signUpAsync } from '../store/actions/users';
import Auth from '../components/Auth';

function mapDispatchToProps(dispatch) {
  return {
    signIn: bindActionCreators(signInAsync, dispatch),
    signUp: bindActionCreators(signUpAsync, dispatch),
  };
}
function mapStateToProps(state) {
  return {
    isAuthenticated: state.users.isAuthenticated,
  };
}
export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Auth));
