import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { initHotelsAsync } from '../store/actions/hotels';
import Dashboard from '../components/Dashboard';

function mapDispatchToProps(dispatch) {
  return {
    initHotels: bindActionCreators(initHotelsAsync, dispatch),
  };
}
function mapStateToProps(state) {
  return {
    hotels: state.hotels.list,
  };
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard));
