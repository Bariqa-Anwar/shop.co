import imageUrlBuilder from '@sanity/image-url';
import { client } from '../sanity/lib/client'; // Adjust the path if needed

const builder = imageUrlBuilder(client);

// Define the type for the source parameter
type ImageSource = {
  asset: {
    _ref: string;
    _type: 'reference';
  };
};

// Function to generate image URLs
export function urlFor(source: ImageSource) {
  return builder.image(source);
}