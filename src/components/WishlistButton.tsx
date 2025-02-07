"use client";
import { useWishlist } from "@/context/WishlistContext";
import Swal from "sweetalert2";

interface Product {
  _id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  inventory: number;
}

interface WishlistButtonProps {
  product: Product;
}

const WishlistButton: React.FC<WishlistButtonProps> = ({ product }) => {
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
  
  const isWishlisted = wishlist.some((item) => item._id === product._id);

  const handleWishlistClick = () => {
    if (isWishlisted) {
      removeFromWishlist(product._id);
      Swal.fire({
        title: "Removed from Wishlist",
        text: `${product.name} has been removed.`,
        icon: "warning",
        timer: 1500,
        showConfirmButton: false,
      });
    } else {
      addToWishlist(product);
      Swal.fire({
        title: "Added to Wishlist",
        text: `${product.name} has been added!`,
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });
    }
  };

  return (
    <button
      className={`px-4 py-2 rounded-lg text-white font-semibold ${
        isWishlisted ? "bg-red-500" : "bg-blue-500"
      }`}
      onClick={handleWishlistClick}
    >
      {isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
    </button>
  );
};

export default WishlistButton;