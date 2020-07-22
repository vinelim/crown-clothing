import React from 'react';

import './with-spinner.styles.scss';

const WithSpinner = WrappedComponent => {
    const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
        <div className="with-spinner">
            <div className="with-container"></div>
        </div>
    ) : (
        <WrappedComponent {...otherProps} />
    )
}
    return Spinner;
}

export default WithSpinner;