# Padmakosh School of Kathak — Asset Manifesto, Operations & Deployment Guide

## 1. Source & Asset Manifest Summary
- **Reference Handoff:** `reference/padmakosh-antigravity-handoff.md` (unchanged)
- **Reference Inventory:** `reference/padmakosh-asset-inventory.md` (unchanged)
- **Code Manifest:** `src/data/fixtures.ts` (`DRIVE_PHOTO_INVENTORY` with all 35 JPEG filenames, byte sizes, and Drive IDs; `YOUTUBE_VIDEO_INVENTORY` with all 7 YouTube video candidates, durations, and credits).
- **Primary Previewed Portrait:** `KAU_0072.JPG` (`2,634,922` bytes, Drive ID `1k_Vlp2nwDxdzUdc1PDLLMgxmDu30uQ8_`) — rendered in a dedicated 3:4 vertical stage frame (`src/components/VerticalStagePortrait.astro`) preserving hands, feet, and teal/gold costume silhouette without hotlinking Google Drive preview URLs.

## 2. Local Commands & Verification
```bash
# Start local development preview server
npm run dev

# Run TypeScript & Astro type checks
npm run check

# Run Asia/Kolkata event boundary, fixture isolation & enquiry validation tests
npm run test:events

# Run production static build check
npm run build
```

## 3. Pre-Launch Checklist & Rollback Plan (For Later Authorised Launch)
1. **Resolve Owner Checklist:** Complete all items in `docs/unresolved-information-checklist.md`.
2. **Export Approved Local Media Derivatives:** Generate responsive AVIF/WebP derivatives of `KAU_0072.JPG` and any other owner-approved photographs into `public/images/approved/` while preserving photographer watermarks and credits.
3. **Configure Server-Only Secrets:** Populate `.env` on the chosen host (`PUBLIC_CONTENT_MODE=production`, `PUBLIC_ALLOW_INDEXING=true`, `PUBLIC_SANITY_PROJECT_ID`, `SANITY_WEBHOOK_SECRET`, `ENQUIRY_PROVIDER_API_KEY`). Verify zero secrets are prefixed with `PUBLIC_`.
4. **Verify Real Enquiry Delivery:** Send a real test enquiry to `sonal@padmakosh.com` and verify failure handling when the provider is unreachable.
5. **Instant Rollback Procedure:** Keep the previous production deployment artifact immutable on the hosting platform so rollback to the prior release or a static maintenance state takes a single atomic alias switch.
