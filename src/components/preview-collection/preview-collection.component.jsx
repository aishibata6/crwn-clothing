import React from "react";
import ProductItem from "../product-item/product-item.compnent";
import "./preview-collection.styles.scss"; 


const PreviewCollection = ( { title, items } ) => (
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
                {
                    items
                    .filter((item, index) => index < 4)
                    .map( ({id, ...otherItemProps}) => (
                        <ProductItem key={id} { ...otherItemProps} />
                    ))
                }
        </div>
    </div>
); 

export default PreviewCollection;