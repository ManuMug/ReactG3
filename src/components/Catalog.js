import React from 'react';


function Catalog({products = []}) {
    
    return (
    
        <div>
             {
                Array.isArray(products.data) && products.data.map((product, index) =>
                    <h2 key={index}>{product.productName}</h2>
                    )
            }

        </div>
    )
}

export default Catalog;