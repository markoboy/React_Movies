import { setIsOpenedModalCreator } from '@store/action-creators/modalActionCreators';
import { setFormActionCreator } from '@store/action-creators/modalFormActionCreators';
import { memo } from 'react';
import { connect } from 'react-redux';
import SiteHeaderNavContainer from './container';

const mapDispatchToProps = {
  setFormAction: setFormActionCreator,
  setIsOpenedModal: setIsOpenedModalCreator,
};

export default connect(null, mapDispatchToProps)(memo(SiteHeaderNavContainer));
