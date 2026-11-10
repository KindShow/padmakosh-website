import { validateEventChronology } from '../../src/lib/events';

/**
 * Sanity Schema: Event & Workshop (`event`)
 * Enforces:
 * - Asia/Kolkata (IST) editor guidance & unambiguous ISO instants
 * - Custom validation that endDateTime >= startDateTime
 * - Support for scheduled, postponed, cancelled, and date_tba without fabricated replacement dates
 * - Guard against local test fixtures leaking into public queries
 */
export const eventSchema = {
  name: 'event',
  title: 'Event / Workshop',
  type: 'document',
  description:
    'All event dates are displayed in Asia/Kolkata (IST, UTC+05:30). Events automatically transition to the archive after their end instant (or after 23:59:59.999 IST of the start day if endDateTime is omitted).',
  fields: [
    {
      name: 'title',
      title: 'Event Title',
      type: 'string',
      validation: (Rule: any) => Rule.required().min(4).max(160),
    },
    {
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        isUnique: (value: string, context: any) => context.defaultIsUnique(value, context),
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Event Category',
      type: 'string',
      options: {
        list: [
          { title: 'Stage Performance', value: 'performance' },
          { title: 'Workshop / Intensive', value: 'workshop' },
          { title: 'Studio Baithak / Student Showcase', value: 'showcase' },
          { title: 'Lecture-Demonstration', value: 'lecture-demonstration' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'status',
      title: 'Event Lifecycle Status',
      type: 'string',
      description: 'Use "Postponed" or "Cancelled" rather than deleting announced events or inventing placeholder dates.',
      options: {
        list: [
          { title: 'Scheduled', value: 'scheduled' },
          { title: 'Postponed (New Date TBA)', value: 'postponed' },
          { title: 'Cancelled', value: 'cancelled' },
        ],
        layout: 'radio',
      },
      initialValue: 'scheduled',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'dateCertainty',
      title: 'Date Certainty',
      type: 'string',
      options: {
        list: [
          { title: 'Confirmed Date & Time (Asia/Kolkata)', value: 'confirmed' },
          { title: 'Tentative Date', value: 'tentative' },
          { title: 'Date To Be Announced (TBA)', value: 'date_tba' },
        ],
      },
      initialValue: 'confirmed',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'startDateTime',
      title: 'Start Date & Time (Asia/Kolkata IST)',
      type: 'datetime',
      description:
        'Enter time in Asia/Kolkata (+05:30). Required unless Date Certainty is set to "Date To Be Announced".',
      validation: (Rule: any) =>
        Rule.custom((startDateTime: string | undefined, context: any) => {
          const doc = context.document;
          const check = validateEventChronology(
            startDateTime || null,
            doc?.endDateTime || null,
            doc?.dateCertainty || 'confirmed'
          );
          return check.valid ? true : check.error;
        }),
    },
    {
      name: 'endDateTime',
      title: 'End Date & Time (Asia/Kolkata IST)',
      type: 'datetime',
      description:
        'Must be after Start Date & Time. Documented policy if left blank: no end time is invented on the page, and the event archives after 23:59:59.999 Asia/Kolkata on its start calendar date.',
      validation: (Rule: any) =>
        Rule.custom((endDateTime: string | undefined, context: any) => {
          const doc = context.document;
          const check = validateEventChronology(
            doc?.startDateTime || null,
            endDateTime || null,
            doc?.dateCertainty || 'confirmed'
          );
          return check.valid ? true : check.error;
        }),
    },
    {
      name: 'timezone',
      title: 'Display Timezone',
      type: 'string',
      initialValue: 'Asia/Kolkata',
      readOnly: true,
    },
    {
      name: 'attendanceMode',
      title: 'Attendance Mode',
      type: 'string',
      options: {
        list: [
          { title: 'In-Person', value: 'in_person' },
          { title: 'Online', value: 'online' },
          { title: 'Hybrid (In-Person + Online)', value: 'hybrid' },
        ],
      },
      initialValue: 'in_person',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'venueName',
      title: 'Venue Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'venueAddress',
      title: 'Venue Address / Locality',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'organiser',
      title: 'Organiser / Presenting Institution',
      type: 'string',
      initialValue: 'Padmakosh School of Kathak',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'summary',
      title: 'Short Summary',
      type: 'text',
      rows: 3,
      validation: (Rule: any) => Rule.required().min(15).max(320),
    },
    {
      name: 'body',
      title: 'Full Event Description Paragraphs',
      type: 'array',
      of: [{ type: 'text' }],
      validation: (Rule: any) => Rule.required().min(1),
    },
    {
      name: 'posterMedia',
      title: 'Approved Poster / Event Image',
      type: 'reference',
      to: [{ type: 'reusableMedia' }],
    },
    {
      name: 'registrationUrl',
      title: 'Confirmed External Registration URL (Optional)',
      type: 'url',
    },
    {
      name: 'confirmedOfferSummary',
      title: 'Explicitly Confirmed Entry / Registration Note (Optional)',
      type: 'string',
      description: 'Never invent fees or ticket prices. Populate only when explicitly approved by the owner.',
    },
    {
      name: 'approvedForPublic',
      title: 'Approved for Public Website & Structured Data',
      type: 'boolean',
      description: 'Keep unchecked for test workshops or unconfirmed historical archive entries.',
      initialValue: false,
      validation: (Rule: any) => Rule.required(),
    },
  ],
};
