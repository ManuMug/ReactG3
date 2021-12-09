import React from 'react';
import { useState, useEffect } from 'react'
/* SE PODRIA MANDAR PROPS DESDE CONTENTROWCENTER */
function SaleProduct(){
          const [products, setProducts] = useState([])
          const getProducts = async () => {
            await fetch('http://localhost:3020/api/products/7') //! arreglar lógica
              .then((response) => response.json())
              .then((data) => setProducts(data))
          }
          useEffect(() => {
            getProducts()
          }, [])

    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Sale Product: {products.productName}</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={products.pathImg} alt={products.productName}/>
                    </div>
                    <p>{products.description}</p>
                </div>
            </div>
        </div>
    )
}

export default SaleProduct;

/* Filtra por precio  */