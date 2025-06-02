import Swal from "sweetalert2";

export default Product;

interface Product {
    inventory: number;
    _id: string;
    name: string;
    price: number;
    image: string;
    description: string;
    category: string;
}

// ✅ Function to get wishlist items from localStorage
export const getWishlistItems = (): Product[] => {
    return JSON.parse(localStorage.getItem("wishlist") || "[]");
};

// ✅ Function to add an item to the wishlist
export const addToWishlist = (product: Product) => {
    let wishlist: Product[] = getWishlistItems();

    const exists = wishlist.some((item) => item._id === product._id);
    if (!exists) {
        wishlist.push(product);
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
        Swal.fire({
            title: "Added to Wishlist!",
            text: `${product.name} is out of stock and has been added to your wishlist.`,
            icon: "info",
            timer: 1500,
            showConfirmButton: false,
        });
    }
};

// ✅ Function to remove an item from the wishlist
export const removeFromWishlist = (productId: string) => {
    let wishlist: Product[] = getWishlistItems();
    wishlist = wishlist.filter((item) => item._id !== productId);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
};

// ✅ Updated `addToCart` to handle out-of-stock items
export const addToCart = (product: Product) => {
    if (product.inventory === 0) {
        // ➤ If product is out of stock, add it to the wishlist instead
        addToWishlist(product);
        return;
    }

    const cart: Product[] = JSON.parse(localStorage.getItem("cart") || "[]");

    const existingProductIndex = cart.findIndex((item) => item._id === product._id);

    if (existingProductIndex > -1) {
        cart[existingProductIndex].inventory += 1;
    } else {
        cart.push({ ...product, inventory: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    Swal.fire({
        title: "Added to Cart!",
        text: `${product.name} has been added to your cart.`,
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
    });
};

export const removeFromCart = (productId: string) => {
    let cart: Product[] = JSON.parse(localStorage.getItem("cart") || "[]");
    cart = cart.filter((item) => item._id !== productId);
    localStorage.setItem("cart", JSON.stringify(cart));
};

export const updateCartQuantity = (productId: string, quantity: number) => {
    const cart: Product[] = JSON.parse(localStorage.getItem("cart") || "[]");
    const productIndex = cart.findIndex((item) => item._id === productId);

    if (productIndex > -1) {
        cart[productIndex].inventory = quantity;
        localStorage.setItem("cart", JSON.stringify(cart));
    }
};

export const getCartItems = (): Product[] => {
    return JSON.parse(localStorage.getItem("cart") || "[]");
};
