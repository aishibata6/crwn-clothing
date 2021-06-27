import React from "react";
import "./product-item.styles.scss";

const ProductItem = ( { id, name, price, imageUrl } ) => (
    <div className="collection-item">
        <div className="image" style={{backgroundImage: `url(${imageUrl})`}}></div>
        <div className="collection-footer">
                <span className="name">{ name }</span>
                <span className="price">{ price }</span>
            </div>
    </div>
)

export default ProductItem;
