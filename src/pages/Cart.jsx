import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cart.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center border-b py-2"
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-20 h-20 object-contain"
          />
          <div className="flex-1">
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-gray-600 text-sm mt-1">Price: ${item.price}</p>
            <p className="text-gray-600 text-sm">Qty: {item.quantity || 1}</p>
          </div>
          <button
            onClick={() => dispatch(removeFromCart(item.id))}
            className="text-red-500 hover:text-red-700 transition font-semibold"
          >
            Remove ❌
          </button>
        </div>
      ))}
      <div className="mt-8 border-t pt-4 text-right">
        <h3 className="text-2xl font-bold text-gray-800">
          Total: ${total?.toFixed(2)}
        </h3>
        <button className="mt-4 bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600 transition">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}
