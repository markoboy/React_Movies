import { modalIsOpenedSelector } from '@store/selectors/modalSelectors';
import { moviesStatusSelector } from '@store/selectors/moviesSelectors';
import { connect } from 'react-redux';
import AppContainer from './container';

const mapStateToProps = (state) => ({
  status: moviesStatusSelector(state),
  modalIsOpened: modalIsOpenedSelector(state),
});

export default connect(mapStateToProps)(AppContainer);
