import { reusableMediaSchema } from './reusableMedia';
import { eventSchema } from './event';
import {
  artistProfileSchema,
  classProgrammeSchema,
  galleryItemSchema,
  pageSectionSchema,
  siteSettingsSchema,
  studioOfferingSchema,
} from './coreSchemas';

export const schemaTypes = [
  siteSettingsSchema,
  pageSectionSchema,
  artistProfileSchema,
  classProgrammeSchema,
  studioOfferingSchema,
  eventSchema,
  galleryItemSchema,
  reusableMediaSchema,
];
