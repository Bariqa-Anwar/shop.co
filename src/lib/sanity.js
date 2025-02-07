import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'your-project-id', // Replace with your Sanity project ID
  dataset: 'production', // Replace with your dataset name
  apiVersion: '2023-05-03', // Use the current date or the latest API version
  useCdn: true, // Set to `false` if you want to ensure fresh data
});