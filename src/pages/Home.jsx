import Footer from '../components/Footer'
import ProductCard from '../components/ProductCard'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Home() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products?limit=6')
      .then(res => setProducts(res.data))
  }, [])

  return (
    <div>
      <section className="bg-gray-100 text-center py-10">
        <h1 className="text-3xl font-bold">Welcome to MyShop</h1>
        <p className="text-gray-600">Find the best products here</p>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Footer />
    </div>
  )
}
