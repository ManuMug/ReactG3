import SmallCard from './SmallCard'

function ContentRowCategories({ products, users, categ }) {
  console.log(products)

  let productCount = {
    title: 'Total of Prods',
    color: 'primary',
    cuantity: 1 /* products.count */,
    icon: 'fas fa-gift',
  }

  let userCount = {
    title: 'Total of Users',
    color: 'success',
    cuantity: 1 /* users.count */,
    icon: 'fas fa-user',
  }

  let CategoryCount = {
    title: 'Total of Categories',
    color: 'warning',
    cuantity: 'un numero' /* products.countByCategory.length */,
    icon: 'fas fa-restroom',
  }

  let cartProps = [productCount, userCount, CategoryCount]

  console.log(/* prods.countByCategory.length */)

  return (
    <div className="row">
      {cartProps.map((carts, i) => {
        return <SmallCard {...carts} key={i} />
      })}
    </div>
  )
}

export default ContentRowCategories
