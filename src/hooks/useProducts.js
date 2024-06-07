import { getProducts } from '../services/products'
import { useState, useEffect } from 'react'

export function useProducts() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    getProducts().then(setProducts)
  }, [])
  console.log({ products })
  return { products }
}
