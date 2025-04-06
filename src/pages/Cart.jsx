import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 md:px-10">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-bold mb-6 border-b pb-4">🛒 Your Cart</h2>
        
        {cart.length === 0 ? (
                  <p className="text-gray-600 text-lg">Your cart is empty.</p>
                ) : (
                  <>
                    <div className="space-y-6">
                      {cart.map((item) => (
                        <div
                          key={item.id}
                          className="flex flex-col md:flex-row items-center justify-between gap-6 border-b pb-4"
                        >
                          {/* Optional: Add product image */}
                          <img
                            src={item.image || 'https://via.placeholder.com/80'}
                            alt={item.title}
                            className="w-20 h-20 object-contain"
                          />
        
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold">{item.title}</h3>
                            <p className="text-gray-600 text-sm mt-1">
                              Price: ${item.price}
                            </p>
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
                    </div>
        
                    {/* Total Section */}
                    <div className="mt-8 border-t pt-4 text-right">
                      <h3 className="text-2xl font-bold text-gray-800">
                        Total: ${total?.toFixed(2)}
                      </h3>
                      <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
                        Proceed to Checkout
                      </button>
                    </div>
                  </>
                )}
      
      </div>
    </div>
  );
}
