import React from 'react';


function Catalog({products = []}) {
    
    return (
    
        <div class=" contenedor-catalog">
             {
                Array.isArray(products.data) && products.data.map((product, index) =>
             
                
                    <div class="card-catalog">   
                          <h5 class="card-title">
                            {product.productName}
                            </h5>
                        <img src={product.pathImg} class="card-img-top" alt="imagen de zapatillas"/> 
                        <div class="card-body">                       
                            <p class="card-text"><strong>Price</strong>  $ {product.price} </p>
                            <p class="card-text"><strong>Brand</strong>  {product.brand} </p>
                        </div>
                    </div>
                
            
                    )
            }

        </div>
    )
}

export default Catalog;


