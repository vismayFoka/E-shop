import { useState, useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import axios from 'axios'

export default function ProductListing() {
  const [products, setProducts] = useState([])
  const [category, setCategory] = useState('all')

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => setProducts(res.data))
  }, [])

  const filtered = category === 'all' ? products : products.filter(p => p.category === category)

  return (
    <div className="p-4">
      <select onChange={e => setCategory(e.target.value)} className="mb-4 p-2 border">
        <option value="all">All</option>
        <option value="men's clothing">Men</option>
        <option value="women's clothing">Women</option>
        <option value="electronics">Electronics</option>
      </select>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filtered.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
