import withWrapper from '@components/hocs/WithWrapper';
import { setIsOpenedModalCreator } from '@store/action-creators/modalActionCreators';
import {
  setFormActionCreator,
  setFormSelectedMovieCreator,
} from '@store/action-creators/modalFormActionCreators';
import {
  moviesSelector,
  moviesTotalAmountSelector,
} from '@store/selectors/moviesSelectors';
import { memo } from 'react';
import { connect } from 'react-redux';
import ResultListContainer from './container';

const mapStateToProps = (state) => ({
  movies: moviesSelector(state),
  totalAmount: moviesTotalAmountSelector(state),
});

const mapDispatchToProps = {
  setFormSelectedMovie: setFormSelectedMovieCreator,
  setFormAction: setFormActionCreator,
  setIsOpenedModal: setIsOpenedModalCreator,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(memo(withWrapper(ResultListContainer)));
