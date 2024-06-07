import { Header } from './components/Header.jsx'
import { Products } from './components/Products.jsx'
import { useProducts } from './hooks/useProducts.js'
import { useFilters } from './hooks/useFilters.js'
import { Cart } from './components/Cart.jsx'
import { CartProvider } from './context/cart.jsx'
// import { products as mockProducts } from './mocks/products.json'
// import { useState } from 'react'

function App() {
  const { products } = useProducts()
  //const [products] = useState(mockProducts)
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(products)

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
    </CartProvider>
  )
}

export default App
