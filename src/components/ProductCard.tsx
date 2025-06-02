import { useWishlist } from "@/context/WishlistContext";
import { addToCart } from "@/app/actions/actions";

const ProductCard = ({ product }: { product: { id: string; title: string; price: number; image: string; } }) => {
  const { addToWishlist } = useWishlist();

  const formattedProduct = {
    _id: product.id,               
    name: product.title,           
    price: product.price,
    image: product.image,
    description: "No description", 
    category: "Unknown",           
    inventory: 10,              
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>${product.price}</p>
      <button onClick={() => addToCart(formattedProduct)}>Add to Cart</button>
      <button onClick={() => addToWishlist(formattedProduct)}>Add to Wishlist</button>
    </div>
  );
};

export default ProductCard;