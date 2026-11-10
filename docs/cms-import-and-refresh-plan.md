# Padmakosh School of Kathak — CMS Import, Webhook & Event Freshness Plan

Prepared for a separately authorised Sanity environment. **No external Sanity project or dataset was created or seeded during this local build.**

## 1. Sanity Schema Architecture (`/sanity/schemaTypes`)
- `siteSettings`: Institution names, verified Bavdhan locality (`411021`), and fields for owner-confirmed street address, phone, WhatsApp toggle, email, and studio hours.
- `pageSection`: Ordered editable sections for core pages.
- `artistProfile`: Sonal Pendse biography, approved role title, Guru lineage, and featured portrait reference.
- `classProgramme`: Ordered learning pathways with core themes and optional confirmed schedule/eligibility fields.
- `studioOffering`: Padmakosh Studio floor area, confirmed facilities, and approved uses.
- `event`: Full `Asia/Kolkata` event model with `validateEventChronology` (`endDateTime >= startDateTime`), `dateCertainty` (`confirmed`, `tentative`, `date_tba`), `status` (`scheduled`, `postponed`, `cancelled`), `attendanceMode`, and `approvedForPublic`.
- `galleryItem` & `reusableMedia`: Hotspot/crop enabled image and YouTube records with required `altText`, `publicCredit`, and `approvedForPublic`.
  - **Dataset Privacy Rule:** Public datasets must contain only public-safe fields. Offline student/minor consent records must never be uploaded to Sanity.

## 2. Publishing & Event Time-Freshness Strategy (`Asia/Kolkata`)
Because CMS webhooks only fire when an editor publishes, unpublishes, or deletes a document—and **do not fire automatically when an event’s start or end clock time passes in `Asia/Kolkata`**—production deployment must combine two mechanisms:

1. **Authenticated Sanity Webhook Receiver (On Editor Publish / Unpublish / Delete):**
   - Configure a Sanity webhook on document types `["event", "siteSettings", "artistProfile", "classProgramme", "studioOffering", "galleryItem", "reusableMedia", "pageSection"]`.
   - Filter: `_type in ["event", "siteSettings", "artistProfile", "classProgramme", "studioOffering", "galleryItem", "reusableMedia", "pageSection"]`
   - Secret validation: Verify `sanity-webhook-signature` against server-only `SANITY_WEBHOOK_SECRET`.
   - Action: Queue a site build / cache invalidation with retry backoff and build-failure alerts.
2. **Scheduled Time-Based Refresh (Passage of Time in `Asia/Kolkata`):**
   - **If deployed as a static/prerendered site:** Configure a scheduled cron job (e.g., every 15 minutes or at key `Asia/Kolkata` boundaries including `00:01 IST`) calling the host’s protected build hook (`SCHEDULED_REBUILD_TRIGGER_SECRET`) whenever any published event has a `startDateTime` or `effectiveArchiveAfterInstant` within the past or next 24 hours.
   - **If deployed with server-rendered `/events` routes:** Set `Cache-Control: public, s-maxage=300, stale-while-revalidate=60` so `evaluateEvent(event, new Date())` recomputes `upcoming` -> `ongoing` -> `archived` states and Schema.org `Event` JSON-LD fresh every 5 minutes without requiring an editor action.

## 3. Integration Acceptance Script (For Authorised Test Environment)
Once a Sanity project and staging host are authorised, execute the following acceptance checklist before public launch:
1. **Editor Authentication Check:** Verify unauthenticated users cannot access Studio or read draft documents (`perspective: 'published'`).
2. **Create & Publish Test Workshop:** Authorised editor creates a test workshop in `Asia/Kolkata`, uploads an approved poster via `reusableMedia`, sets `approvedForPublic: true`, and clicks **Publish**.
3. **Verify Webhook Refresh:** Confirm the staging site updates within the expected build/cache window and displays the workshop under Upcoming Events with valid `DanceEvent` JSON-LD.
4. **Edit Time to Ongoing & Past:** Edit `startDateTime` and `endDateTime` to verify transition to `Ongoing Now (Asia/Kolkata)` and then automatic transition to the **Verified Public Event Archive** without manual archival flags.
5. **Unpublish & Removal Verification:** Click **Unpublish** in Sanity Studio and confirm the workshop is removed from the staging site and sitemap.
