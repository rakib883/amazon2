import { Audio } from 'react-loader-spinner'
import React from 'react';

const Loader = () => {
    return (
        <div>
            <Audio
                height="80"
                width="80"
                color="green"
                ariaLabel="loading"/>
        </div>
    );
};

export default Loader;