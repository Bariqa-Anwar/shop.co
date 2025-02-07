import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "../env";

// Define the Product Type
export interface Product {
  _id: string;
  name: string;
  price: number;
  description: string; // Ensures it's always a string
  category: string;
  image: string;
}

// Create the Sanity client
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if using ISR or tag-based revalidation
});

export async function getProductById(id: string) {
  console.log("Fetching product with ID:", id); 

  const query = `*[_type == "product" && _id == $id][0] {
    _id,
    name,
    price,
    description,
    category,
    "image": image.asset->url
  }`;

  const product = await client.fetch(query, { id });

  console.log("Fetched product:", product); 

  return product;
}


// Fetch products by category (excluding the current product)
export async function getProductsByCategory(category: string, excludeId?: string): Promise<Product[]> {
  const query = `*[_type == "product" && category == $category && _id != $excludeId] {
    _id,
    name,
    price,
    "image": image.asset->url
  }`;

  return await client.fetch<Product[]>(query, { category, excludeId: excludeId || "" });
}

// Search products by name
export async function searchProducts(searchTerm: string): Promise<Product[]> {
  const searchQuery = `*[_type == "product" && name match $searchTerm] {
    _id,
    name,
    price,
    "image": image.asset->url
  }`;

  return await client.fetch<Product[]>(searchQuery, { searchTerm: `${searchTerm}*` });
}

// Fetch all products for dynamic pages
export async function getAllProducts(): Promise<Product[]> {
  const query = `*[_type == "product"] | order(_createdAt desc) {
    _id,
    name,
    price,
    category,
    "image": image.asset->url
  }`;

  return await client.fetch<Product[]>(query);
}
