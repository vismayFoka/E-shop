import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Header() {
  const cart = useSelector((state) => state.cart)

  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">E-Shop</Link>
      <nav className="flex gap-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/products" className="hover:underline">Products</Link>
        <Link to="/cart" className="hover:underline">Cart ({cart.length})</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
      </nav>
    </header>
  )
}
