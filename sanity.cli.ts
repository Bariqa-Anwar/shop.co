import { defineCliConfig } from 'sanity/cli';

// Ensure environment variables are loaded
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

// Validate projectId and dataset
if (!projectId || !/^[a-z0-9-]+$/.test(projectId)) {
  throw new Error('Invalid projectId. It can only contain lowercase letters, numbers, and dashes.');
}

if (!dataset) {
  throw new Error('Missing dataset. Please provide a valid dataset name.');
}

export default defineCliConfig({ api: { projectId, dataset } });