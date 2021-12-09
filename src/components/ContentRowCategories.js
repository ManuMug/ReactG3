import React from 'react'
import SmallCard from './SmallCard'
import { useEffect, useState } from 'react'

function ContentRowCategories() {
  //! ingresar por props products y users
  const [products, setProducts] = useState([])
  const [users, setUsers] = useState([])

  const getUsers = async () => {
    await fetch('http://localhost:3020/api/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
  }
  useEffect(() => {
    getUsers()
  }, [])

  const getProducts = async () => {
    await fetch('http://localhost:3020/api/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
  }
  useEffect(() => {
    getProducts()
  }, [])

  let productCount = {
    title: 'Total of Products',
    color: 'primary',
    cuantity: products.count,
    icon: 'fas fa-gift',
  }

  /* <!-- Total awards --> */

  let userCount = {
    title: 'Total of Users',
    color: 'success',
    cuantity: users.count,
    icon: 'fas fa-user',
  }

  /* <!-- Actors quantity --> */

  let CategoryCount = {
    title: 'Total of Categories',
    color: 'warning',
    cuantity: products.count, //! agregar total de categorías products.countByCategory.length
    icon: 'fas fa-restroom',
  }

  let cartProps = [productCount, userCount, CategoryCount]

  return (
    <div className="row">
      {cartProps.map((carts, i) => {
        return <SmallCard {...carts} key={i} />
      })}
    </div>
  )
}

export default ContentRowCategories
