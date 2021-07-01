import {
  MODAL_ADD_TITLE,
  MODAL_DELETE_TITLE,
  MODAL_EDIT_TITLE,
  MODAL_FORM_ADD_ACTION,
  MODAL_FORM_DELETE_ACTION,
  MODAL_FORM_EDIT_ACTION,
} from '@components/features/ModalForm/constants';
import { MovieDetailType } from '@constants/MovieTypes';
import PropTypes from 'prop-types';
import React, { useEffect, useMemo } from 'react';
import { convertToMultiSelectOption, formatMovieData } from '../utils';
import ModalFormBodyComponent from './component';

export default function ModalFormBodyContainer({
  action,
  selectedMovie,
  setModalTitle,
  onSubmit,
}) {
  const [hasDeleteBody, hasFormBody] = useMemo(() => {
    const deleteBody = action === MODAL_FORM_DELETE_ACTION;
    const formBody = [MODAL_FORM_ADD_ACTION, MODAL_FORM_EDIT_ACTION].includes(
      action
    );

    return [deleteBody, formBody];
  }, [action]);

  useEffect(() => {
    switch (action) {
      case MODAL_FORM_ADD_ACTION:
        setModalTitle(MODAL_ADD_TITLE);
        break;

      case MODAL_FORM_EDIT_ACTION:
        setModalTitle(MODAL_EDIT_TITLE);
        break;

      case MODAL_FORM_DELETE_ACTION:
        setModalTitle(MODAL_DELETE_TITLE);
        break;

      default:
        break;
    }
  }, [action]);

  const formattedMovie = useMemo(() => {
    if (selectedMovie) {
      return {
        ...formatMovieData(selectedMovie),
        genres: selectedMovie.genres.map(convertToMultiSelectOption),
      };
    }

    return undefined;
  }, [selectedMovie]);

  return (
    <ModalFormBodyComponent
      hasFormBody={hasFormBody}
      hasDeleteBody={hasDeleteBody}
      formAction={action}
      selectedMovie={formattedMovie}
      onSubmit={onSubmit}
    />
  );
}

ModalFormBodyContainer.defaultProps = {
  selectedMovie: null,
};

ModalFormBodyContainer.propTypes = {
  action: PropTypes.string.isRequired,
  selectedMovie: PropTypes.shape(MovieDetailType),
  setModalTitle: PropTypes.func.isRequired,
};
