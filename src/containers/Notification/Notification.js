import Modal from '@components/Modal';
import { ERROR_STATUS } from '@constants/StatusTypes';
import { moviesErrorSelector, moviesStatusSelector, moviesSuccessSelector } from '@store/selectors/moviesSelectors';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import ErrorNotification from './ErrorNotification';
import SuccessNotification from './SuccessNotification';

function Notification({
  error,
  success,
  status,
}) {
  const [isOpened, setIsOpened] = useState(false);

  const [modalBody, setModalBody] = useState(null);

  useEffect(() => {
    setModalBody(
      status === ERROR_STATUS
        ? <ErrorNotification message={error?.message} title={error?.title} />
        : <SuccessNotification message={success?.message} title={success?.title} />
    );

    setIsOpened(!!success || !!error);
  }, [success, error, status]);

  return (
    <>
      {isOpened && (
        <Modal
          onCloseTrigger={() => setIsOpened(false)}
          body={modalBody}
        />
      )}
    </>
  );
}

const mapStateToProps = (state) => ({
  error: moviesErrorSelector(state),
  success: moviesSuccessSelector(state),
  status: moviesStatusSelector(state),
});

export default connect(mapStateToProps)(Notification);
