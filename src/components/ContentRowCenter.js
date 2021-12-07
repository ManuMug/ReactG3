import React from 'react';
import LastProduct from './LastProduct';
import SaleProduct from './SaleProduct';

function ContentRowCenter(){
   
    
    return (
        <div className="row">
            
            {/*<!-- Last Movie in DB -->*/}
            <LastProduct />
            {/*<!-- End content row last movie in Data Base -->*/}

            {/*<!-- SALE PRODUCT-->*/}
            <SaleProduct />
            
           
        </div>
    )
}

export default ContentRowCenter;