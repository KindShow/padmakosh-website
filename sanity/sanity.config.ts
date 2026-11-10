/**
 * Sanity Studio Configuration Blueprint for Padmakosh School of Kathak
 * Prepared for local inspection and future connection to an authorised Sanity project/dataset.
 * Do NOT seed or publish records into a live Sanity dataset until authorised.
 */
import { schemaTypes } from './schemaTypes';

export const padmakoshSanityConfig = {
  name: 'padmakosh-school-of-kathak-studio',
  title: 'Padmakosh School of Kathak — CMS Studio',
  projectId: process.env.PUBLIC_SANITY_PROJECT_ID || 'UNCONFIGURED_LOCAL_ONLY',
  dataset: process.env.PUBLIC_SANITY_DATASET || 'production',
  schema: {
    types: schemaTypes,
  },
  securityNotes: {
    requireAuthenticatedEditors: true,
    publicQueryPerspective: 'published',
    draftLeakPrevention:
      'Public site queries strictly set perspective: "published" and filter approvedForPublic == true.',
  },
};

export default padmakoshSanityConfig;
