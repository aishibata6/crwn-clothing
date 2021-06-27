import React from "react";
// use withRouter component to pass history props, which is usually only available in Homepage. Menu-item will now return history
import { withRouter } from "react-router-dom";
import "./menu-item.styles.scss"; 

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match })=> {
    // dynamically add className "size" if it exists in state
    const menuItemClass = size ? `${size} menu-item` : "menu-item"; 
    return (
    <div 
    className={menuItemClass}
    onClick={()=> history.push(`${match.url}${linkUrl}`)}
    >
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
    

export default withRouter(MenuItem);