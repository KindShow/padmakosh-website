export const siteSettingsSchema = {
  name: 'siteSettings',
  title: 'Site Settings & Contact Configuration',
  type: 'document',
  fields: [
    {
      name: 'schoolName',
      title: 'Primary Institution Name',
      type: 'string',
      initialValue: 'Padmakosh School of Kathak',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'secondaryBrandName',
      title: 'Studio Space Name',
      type: 'string',
      initialValue: 'Padmakosh Studio',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'locality',
      title: 'Verified Locality',
      type: 'string',
      initialValue: 'Bavdhan, Pune, Maharashtra',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'postalCode',
      title: 'Postal Code',
      type: 'string',
      initialValue: '411021',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'confirmedStreetAddress',
      title: 'Owner-Confirmed Full Street Address',
      type: 'text',
      rows: 3,
      description:
        'Leave blank until B-501 (Google Panel) vs. B 01 (Portfolio PDF) conflict is resolved with the owner.',
    },
    {
      name: 'confirmedClassPhone',
      title: 'Confirmed Class Enquiry Phone Number',
      type: 'string',
      description: 'Populate only after owner confirms +91 96896 15339 and call/WhatsApp preference.',
    },
    {
      name: 'whatsappEnabled',
      title: 'Enable WhatsApp Click-to-Chat Link',
      type: 'boolean',
      initialValue: false,
      description: 'Never enable by assumption.',
    },
    {
      name: 'confirmedPublicEmail',
      title: 'Confirmed Public Contact Email',
      type: 'string',
      initialValue: 'sonal@padmakosh.com',
    },
    {
      name: 'confirmedStudioHours',
      title: 'Confirmed Class & Studio Access Hours',
      type: 'string',
      description: 'Never copy "Open 24 hours" from the Google Business Profile.',
    },
  ],
};

export const artistProfileSchema = {
  name: 'artistProfile',
  title: 'Artist / Guru Profile (Sonal Pendse)',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Artist Name',
      type: 'string',
      initialValue: 'Sonal Pendse',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'approvedRoleTitle',
      title: 'Owner-Approved Public Role / Title',
      type: 'string',
      initialValue: 'Kathak Artist, Teacher & Director',
      description: 'Add "Founder" only after explicit owner confirmation.',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'guruLineage',
      title: 'Guru Lineage Statement',
      type: 'string',
      initialValue: 'Senior disciple of Guru Shambhavi Dandekar',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'shortBiography',
      title: 'Approved Biography Copy',
      type: 'array',
      of: [{ type: 'text' }],
      validation: (Rule: any) => Rule.required().min(1),
    },
    {
      name: 'featuredPortrait',
      title: 'Featured Stage Portrait',
      type: 'reference',
      to: [{ type: 'reusableMedia' }],
    },
  ],
};

export const classProgrammeSchema = {
  name: 'classProgramme',
  title: 'Kathak Class Programme',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Programme Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'orderRank',
      title: 'Display Order',
      type: 'number',
      validation: (Rule: any) => Rule.required().min(1),
    },
    {
      name: 'summary',
      title: 'Programme Summary',
      type: 'text',
      rows: 3,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'coreThemes',
      title: 'Learning Themes',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule: any) => Rule.required().min(1),
    },
    {
      name: 'confirmedScheduleText',
      title: 'Confirmed Batch Schedule (Optional)',
      type: 'string',
      description: 'Leave blank until owner provides current batch days and times.',
    },
    {
      name: 'confirmedEligibilityText',
      title: 'Confirmed Age / Prior Training Eligibility (Optional)',
      type: 'string',
    },
  ],
};

export const studioOfferingSchema = {
  name: 'studioOffering',
  title: 'Padmakosh Studio Space Offering',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Section Heading',
      type: 'string',
      initialValue: 'Padmakosh Studio — Space for Practice, Rehearsals & Creative Gatherings',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'statedAreaSqFt',
      title: 'Confirmed Studio Floor Area',
      type: 'string',
      initialValue: 'Approx. 750 sq. ft.',
    },
    {
      name: 'amenities',
      title: 'Confirmed Studio Facilities',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'creativeUses',
      title: 'Approved Studio Uses',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
};

export const galleryItemSchema = {
  name: 'galleryItem',
  title: 'Gallery Entry',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Gallery Entry Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'orderRank',
      title: 'Display Order',
      type: 'number',
      validation: (Rule: any) => Rule.required().min(1),
    },
    {
      name: 'category',
      title: 'Gallery Category',
      type: 'string',
      options: {
        list: [
          { title: 'Introduction & Studio', value: 'introduction' },
          { title: 'Stage Performance', value: 'performance' },
          { title: 'Classical Taal Repertoire', value: 'repertoire' },
          { title: 'Student Learning Journey', value: 'student-journey' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'mediaAsset',
      title: 'Reusable Media Asset',
      type: 'reference',
      to: [{ type: 'reusableMedia' }],
      validation: (Rule: any) => Rule.required(),
    },
  ],
};

export const pageSectionSchema = {
  name: 'pageSection',
  title: 'Editable Page / Home Section',
  type: 'document',
  fields: [
    {
      name: 'pageKey',
      title: 'Target Page',
      type: 'string',
      options: {
        list: [
          { title: 'Home', value: 'home' },
          { title: 'About Padmakosh', value: 'about' },
          { title: 'Sonal Pendse', value: 'sonal-pendse' },
          { title: 'Kathak Classes', value: 'classes' },
          { title: 'Padmakosh Studio', value: 'studio' },
          { title: 'Contact', value: 'contact' },
          { title: 'Privacy Notice', value: 'privacy' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'sectionOrder',
      title: 'Section Order (1, 2, 3...)',
      type: 'number',
      validation: (Rule: any) => Rule.required().min(1),
    },
    {
      name: 'kicker',
      title: 'Section Eyebrow / Kicker',
      type: 'string',
    },
    {
      name: 'heading',
      title: 'Section Heading',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'bodyParagraphs',
      title: 'Body Copy Paragraphs',
      type: 'array',
      of: [{ type: 'text' }],
    },
  ],
};
