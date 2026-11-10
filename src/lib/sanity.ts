import { createClient, type SanityClient } from '@sanity/client';
import {
  ARTIST_PROFILE_FIXTURE,
  CLASS_PROGRAMMES_FIXTURE,
  DRIVE_PHOTO_INVENTORY,
  LOCAL_TEST_EVENT_FIXTURES,
  SITE_SETTINGS_FIXTURE,
  STUDIO_OFFERING_FIXTURE,
  YOUTUBE_VIDEO_INVENTORY,
} from '../data/fixtures';
import { evaluateEvent, getApprovedPublicEvents } from './events';
import type { ContentMode, EventDocument } from '../types/content';

export function getContentMode(): ContentMode {
  const raw = import.meta.env?.PUBLIC_CONTENT_MODE || process.env.PUBLIC_CONTENT_MODE || 'local-review';
  return raw === 'production' ? 'production' : 'local-review';
}

export function isIndexingAllowed(): boolean {
  const allowFlag =
    import.meta.env?.PUBLIC_ALLOW_INDEXING || process.env.PUBLIC_ALLOW_INDEXING || 'true';
  return allowFlag !== 'false';
}

export function getSanityClientOrThrow(): SanityClient {
  const projectId =
    import.meta.env?.PUBLIC_SANITY_PROJECT_ID || process.env.PUBLIC_SANITY_PROJECT_ID;
  const dataset =
    import.meta.env?.PUBLIC_SANITY_DATASET || process.env.PUBLIC_SANITY_DATASET || 'production';
  const apiVersion =
    import.meta.env?.PUBLIC_SANITY_API_VERSION ||
    process.env.PUBLIC_SANITY_API_VERSION ||
    '2025-02-01';

  if (!projectId) {
    throw new Error(
      '[Padmakosh CMS Guard] PUBLIC_CONTENT_MODE is set to "production", but PUBLIC_SANITY_PROJECT_ID is missing. Refusing to silently substitute local mock fixtures in production.'
    );
  }

  return createClient({
    projectId,
    dataset,
    apiVersion,
    // Always enforce published perspective for public queries so drafts never leak
    perspective: 'published',
    useCdn: false,
  });
}

/**
 * Loads site data according to the active content mode.
 * - In "local-review" mode: returns local source-backed fixtures with verification metadata.
 * - In "production" mode: queries published Sanity documents and NEVER substitutes fixtures on failure.
 */
export async function loadPadmakoshSiteData(referenceNow: Date = new Date()) {
  const mode = getContentMode();

  if (mode === 'production') {
    const client = getSanityClientOrThrow();
    // In production mode, fetch published documents only and never fall back to fixtures
    const publishedEvents = await client.fetch<EventDocument[]>(
      `*[_type == "event" && approvedForPublic == true && isLocalTestFixture != true]{
        "id": _id,
        title,
        "slug": slug.current,
        category,
        summary,
        body,
        startDateTime,
        endDateTime,
        timezone,
        dateCertainty,
        status,
        attendanceMode,
        venueName,
        venueAddress,
        organiser,
        registrationUrl,
        confirmedOfferSummary,
        "isLocalTestFixture": false,
        "approvedForPublic": approvedForPublic
      }`
    );

    const publicEvents = getApprovedPublicEvents(publishedEvents, referenceNow);

    return {
      mode,
      isLocalReview: false,
      siteSettings: SITE_SETTINGS_FIXTURE,
      artistProfile: ARTIST_PROFILE_FIXTURE,
      classProgrammes: CLASS_PROGRAMMES_FIXTURE,
      studioOffering: STUDIO_OFFERING_FIXTURE,
      publicEvents,
      localTestEventsEvaluated: [],
      youtubeVideos: YOUTUBE_VIDEO_INVENTORY.filter((v) => v.embedVerified && !v.studentConsentPending),
      allYoutubeInventory: YOUTUBE_VIDEO_INVENTORY,
      drivePhotoInventory: DRIVE_PHOTO_INVENTORY,
    };
  }

  // Local review mode:
  // Real approved events remain empty ([] -> triggers honest "Upcoming events will be announced here.")
  // Local test fixtures are evaluated separately for the Asia/Kolkata boundary verification panel.
  const publicEvents = getApprovedPublicEvents(LOCAL_TEST_EVENT_FIXTURES, referenceNow);
  const localTestEventsEvaluated = LOCAL_TEST_EVENT_FIXTURES.map((ev) =>
    evaluateEvent(ev, referenceNow)
  );

  return {
    mode,
    isLocalReview: true,
    siteSettings: SITE_SETTINGS_FIXTURE,
    artistProfile: ARTIST_PROFILE_FIXTURE,
    classProgrammes: CLASS_PROGRAMMES_FIXTURE,
    studioOffering: STUDIO_OFFERING_FIXTURE,
    publicEvents,
    localTestEventsEvaluated,
    youtubeVideos: YOUTUBE_VIDEO_INVENTORY,
    allYoutubeInventory: YOUTUBE_VIDEO_INVENTORY,
    drivePhotoInventory: DRIVE_PHOTO_INVENTORY,
  };
}
