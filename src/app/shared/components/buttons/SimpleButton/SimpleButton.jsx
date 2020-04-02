import React from 'react';
import PropTypes from 'prop-types';
import './SimpleButton.css';

function SimpleButton(props) {
  const { buttonName } = props;
  return <button type="button">{buttonName}</button>;
}

export default SimpleButton;

SimpleButton.propTypes = {
  buttonName: PropTypes.string.isRequired,
};
