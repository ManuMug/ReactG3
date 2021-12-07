import React from 'react';
import SmallCard from './SmallCard';

/*  Cada set de datos es un objeto literal */

/* <!-- Movies in DB --> */

let moviesInDB = {
    title: 'Total Products',
    color: 'primary', 
    cuantity: 22,
    icon: "fas fa-gift"
}

/* <!-- Total awards --> */

let totalAwards = {
    title:'Total Users', 
    color:'success', 
    cuantity: '4',
    icon:'fas fa-user'
}

/* <!-- Actors quantity --> */

let actorsQuantity = {
    title:'Total Category' ,
    color:'warning',
    cuantity:'2',
    icon:"fas fa-restroom"
}

let cartProps = [moviesInDB, totalAwards, actorsQuantity];

function ContentRowMovies(){
    return (
    
        <div className="row">
            
            {cartProps.map( (movie, i) => {

                return <SmallCard {...movie} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowMovies;