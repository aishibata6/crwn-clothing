import React from 'react';
import "./custom-button.styles.scss";

// passing in children to get the value of button
// conditionally render button with different styling
const CustomButton = ( {children, isGoogleSignIn, ...otherProps } ) => (
    <button className={`${isGoogleSignIn ? "google-sign-in": "" } custom-button`} 
    {...otherProps} >
        {children}
    </button>
);

export default CustomButton;


