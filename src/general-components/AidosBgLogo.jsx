import React from 'react';

const AidosBgLogo = () => {
    return (
        <img
            style={{
                height:"75%",
                position:"absolute",
                left:"-15%",
                bottom:"12.5%",
                opacity:".5",
                zIndex:-1,
                overflow: "hidden",
            }}
            src="/images/general/aidos-circle-logo.svg"
            alt="aidos logo"
        />
    );
};

export default AidosBgLogo;
