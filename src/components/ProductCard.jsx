import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/cartSlice'

export default function ProductCard({ product }) {
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    dispatch(addToCart(product))
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition">
      <Link to={`/products/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="h-48 w-full object-contain mb-4"
        />
        <h2 className="text-lg font-semibold mb-2">{product.title.slice(0, 50)}...</h2>
        <p className="text-blue-600 font-bold mb-2">${product.price}</p>
      </Link>
      <button
        onClick={handleAddToCart}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
      >
        Add to Cart
      </button>
    </div>
  )
}
