import React from 'react';

import './error-boundary.styles.scss';

class ErrorBoundary extends React.Component {
    constructor(){
        super();

        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        // process the error
        return { hasError: true }
    }

    componentDidCatch(error, info) {
        console.log(error);
    }

    render() {
        if(this.state.hasError) {
            return (
            <div className="error-container">
                <div className="error-image">
                    <div className="error-heading">
                        <h3>Sorry this page is not on the map</h3>
                        <span className="error-text">
                        You told your friends you weren’t bringing your phone, to try and experience what travel was like back in the day. You bought a map and a bottle of water and carried your camera for the money shot. But the map was from 2005 and the landscape had changed. So here you are, in the middle of a large field, that the map continues to claim is a local grocer.
                        </span>
                    </div>
                </div>
            </div>
            )
        } 
            return this.props.children;
    }
}

export default ErrorBoundary;