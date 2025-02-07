"use client";
import { useWishlist } from "@/context/WishlistContext";
import { FaTrashAlt } from "react-icons/fa"; // Trash icon for remove button

const WishlistPage = () => {
  const { wishlist, removeFromWishlist } = useWishlist(); // Access wishlist and remove function

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Wishlist Header */}
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Your Wishlist</h1>

      {/* If wishlist is empty */}
      {wishlist.length === 0 ? (
        <div className="text-center text-gray-500">
          <p>Your wishlist is empty. Add items to your wishlist to see them here!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Iterate over wishlist items */}
          {wishlist.map((product) => (
            <div
              key={product._id}
              className="border border-gray-200 rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover rounded-md mb-4"
              />

              {/* Product Info */}
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h2>
              <p className="text-gray-600 text-sm mb-2">{product.description}</p>
              <p className="text-lg font-semibold text-gray-900 mb-4">${product.price}</p>

              {/* Remove Button */}
              <button
                onClick={() => removeFromWishlist(product._id)}
                className="bg-red-500 text-white px-4 py-2 rounded-md flex items-center justify-center hover:bg-red-600 transition-colors"
              >
                <FaTrashAlt className="mr-2" /> Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
