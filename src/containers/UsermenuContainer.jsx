import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { signOut } from '../store/actions/users';
import Usermenu from '../components/Navbar/Usermenu';

function mapDispatchToProps(dispatch) {
  return {
    signOut: bindActionCreators(signOut, dispatch),
  };
}
function mapStateToProps(state) {
  return {
    firstName: state.users.fistName,
    lastName: state.users.lastName,
  };
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Usermenu));
