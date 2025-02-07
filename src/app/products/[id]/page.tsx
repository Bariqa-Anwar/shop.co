import { notFound } from "next/navigation";
import { getProductById, getProductsByCategory, searchProducts } from "@/sanity/lib/client";
import Link from "next/link";
import CartButton from "@/components/CartButton"; 
import WishlistButton from "@/components/WishlistButton";

// Define ProductPageProps interface with searchParams and params
interface ProductPageProps {
  params: { id: string }; // Product ID from the URL
  searchParams: { category?: string; search?: string }; // Search or category filtering params
}

export default async function ProductPage({ params, searchParams }: ProductPageProps) {
  // Await searchParams to resolve
  const { category, search } = searchParams;

  // Fetch product by ID (server-side fetch)
  const product = await getProductById(params.id);

  if (!product) {
    return notFound(); // Handle the case where the product isn't found
  }

  // Fetch products by category (server-side fetch)
  const productsByCategory = category
    ? await getProductsByCategory(category, params.id)
    : [];

  // Fetch search suggestions (server-side fetch)
  const searchSuggestions = search
    ? await searchProducts(search)
    : [];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Display search suggestions if available */}
      {searchSuggestions.length > 0 && (
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Search Suggestions:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {searchSuggestions.map((suggestion) => (
              <Link key={suggestion._id} href={`/products/${suggestion._id}`}>
                <div className="bg-white rounded-lg shadow-lg p-4 hover:scale-105 transform transition duration-300">
                  <img
                    className="w-full h-64 object-cover rounded-t-lg mb-4"
                    src={suggestion.image}
                    alt={suggestion.name}
                  />
                  <p className="text-center text-lg font-semibold">{suggestion.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Display the product details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex justify-center">
          <img className="w-full max-w-md h-auto object-cover rounded-lg shadow-lg" src={product.image} alt={product.name} />
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-lg text-gray-600 mb-4">{product.description}</p>
          <p className="text-xl font-semibold text-green-600 mb-4">${product.price}</p>
          <p className="text-sm text-gray-500 mb-6">Category: {product.category}</p>
        </div>

        {/* Cart and Wishlist buttons */}
        <div className="mt-4">
          <CartButton product={product} />
        </div>
        <div className="mt-3">
        <WishlistButton product={product} />
        </div>
      </div>

      {/* Show products by category if a category is selected */}
      {productsByCategory.length > 0 && (
        <div className="mt-16">
          <h3 className="text-xl font-semibold mb-4">Other products in {product.category}:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {productsByCategory.map((categoryProduct) => (
              <Link key={categoryProduct._id} href={`/products/${categoryProduct._id}`}>
                <div className="bg-white rounded-lg shadow-lg p-4 hover:scale-105 transform transition duration-300">
                  <img
                    className="w-full h-64 object-cover rounded-t-lg mb-4"
                    src={categoryProduct.image}
                    alt={categoryProduct.name}
                  />
                  <p className="text-center text-lg font-semibold">{categoryProduct.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
