import { setIsOpenedModalCreator } from '@store/action-creators/modalActionCreators';
import { setFormActionCreator } from '@store/action-creators/modalFormActionCreators';
import { memo } from 'react';
import { connect } from 'react-redux';
import HeaderAddActionButtonContainer from './container';

const mapDispatchToProps = {
  setFormAction: setFormActionCreator,
  setIsOpenedModal: setIsOpenedModalCreator,
};

const HeaderAddActionButton = connect(
  null,
  mapDispatchToProps
)(memo(HeaderAddActionButtonContainer));

export default HeaderAddActionButton;
