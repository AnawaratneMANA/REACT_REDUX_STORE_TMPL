import React from "react";

const ProductComponent = ({products}) => {
    return (
        <div className="four column wide">
            <div className="ui link card">
                <div className="card">
                    <div className="image">
                        <div className="content">
                            <div className="header">
                                {products.title}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductComponent;
