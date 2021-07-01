import React from 'react';
import "./custom-button.styles.scss";

// passing in children to get the value of button
const CustomButton = ( {children, ...otherProps } ) => (
    <button className="custom-button" {...otherProps} >
        {children}
    </button>
);

export default CustomButton;


