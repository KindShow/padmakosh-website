/**
 * Sanity Schema: Reusable Media (`reusableMedia`)
 * Enforces:
 * - Image hotspot/crop
 * - Required alt text, caption, and public photographer credit
 * - Explicit publication clearance boolean (`approvedForPublic`)
 * - Strict privacy rule: never store private student/minor consent documents or personal data in public Sanity datasets.
 */

export const reusableMediaSchema = {
  name: 'reusableMedia',
  title: 'Reusable Media Asset',
  type: 'document',
  description:
    'IMPORTANT PRIVACY RULE: Public Sanity datasets are world-readable even if a field is hidden in Studio. Store only public-safe captions and credits here. Keep signed student/minor consent forms and private source evidence in private offline school records.',
  fields: [
    {
      name: 'title',
      title: 'Internal Asset Title',
      type: 'string',
      description: 'Editor label (e.g. "KAU_0072 — Vertical Teal & Gold Stage Portrait").',
      validation: (Rule: any) => Rule.required().min(3).max(140),
    },
    {
      name: 'originalFilename',
      title: 'Original Source Filename',
      type: 'string',
      description: 'Retain original camera/archive filename for traceability (e.g. KAU_0072.JPG).',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'mediaType',
      title: 'Media Type',
      type: 'string',
      options: {
        list: [
          { title: 'Photograph (Optimized Derivative)', value: 'photograph' },
          { title: 'Curated YouTube Embed', value: 'youtube' },
        ],
        layout: 'radio',
      },
      initialValue: 'photograph',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Photograph File (Hotspot & Crop Enabled)',
      type: 'image',
      description:
        'Upload optimized derivative of an approved photograph. Do not remove photographer watermarks. For vertical portraits like KAU_0072.JPG, preserve hands, feet, and full silhouette.',
      options: {
        hotspot: true,
      },
      hidden: ({ document }: any) => document?.mediaType === 'youtube',
    },
    {
      name: 'youtubeId',
      title: 'YouTube Video ID',
      type: 'string',
      description: '11-character YouTube ID (e.g. QYmQGNO4dW8).',
      hidden: ({ document }: any) => document?.mediaType !== 'youtube',
    },
    {
      name: 'altText',
      title: 'Accessible Alt Text (Required)',
      type: 'string',
      description:
        'Describe the visual content clearly for screen-reader users. Confirm pictured individuals before naming them.',
      validation: (Rule: any) => Rule.required().min(10).max(260),
    },
    {
      name: 'caption',
      title: 'Public Caption',
      type: 'text',
      rows: 2,
      description: 'Publicly visible caption displayed beneath the image or video.',
    },
    {
      name: 'publicCredit',
      title: 'Public Photographer / Production Credit',
      type: 'string',
      description: 'Public attribution line (e.g. "Photography: [Confirmed Name]" or video credits).',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'approvedForPublic',
      title: 'Cleared for Public Website Display',
      type: 'boolean',
      description:
        'Check ONLY after subject identity, photographer credit, and offline student/minor publication permissions have been verified.',
      initialValue: false,
      validation: (Rule: any) => Rule.required(),
    },
  ],
};
