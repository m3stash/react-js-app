import React from 'react';
import ReactDOM from 'react-dom';
import './Spinner.scss';

const Spinner = (): JSX.Element => ReactDOM.createPortal(<div className="spinner">Spinner....</div>, document.body);

export default Spinner;
