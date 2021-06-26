import React from "react";
import "./menu-item.styles.scss"; 

const MenuItem = ({ title, imageUrl, size })=> {
    // dynamically add className "size" if it exists in state
    const menuItemClass = size ? `${size} menu-item` : "menu-item"; 

    return (
    <div 
    className={menuItemClass}>
        <div 
            className="background-img"
            style={{ backgroundImage: `url(${imageUrl})`}}
        ></div>
            <div className="content">
                <h1 className="title">{ title.toUpperCase() }</h1>
                <span className="subtitle">Shop Now</span>
            </div>
    </div>
); 
}
    

export default MenuItem;