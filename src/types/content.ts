/**
 * Shared Content & Schema Types for Padmakosh School of Kathak
 * Preserves the strict distinction between:
 * - "verified": Observed across corroborated sources and cleared for public display
 * - "owner-supplied": Present in supplied introduction/portfolio, pending final owner editorial sign-off
 * - "placeholder": Missing or conflicting business detail; visible in local review mode, suppressed in production
 */

export type EvidenceTier = 'verified' | 'owner-supplied' | 'placeholder';

export type ContentMode = 'local-review' | 'production';

export interface SourcedClaim<T = string> {
  value: T;
  tier: EvidenceTier;
  sourceNote: string;
  approvalNote?: string;
}

export interface ReusableMediaItem {
  id: string;
  filename: string;
  driveFileId?: string;
  driveUrl?: string;
  bytes?: number;
  mediaType: 'photograph' | 'video';
  title: string;
  altText: SourcedClaim<string>;
  caption?: SourcedClaim<string>;
  photographerCredit?: SourcedClaim<string>;
  aspectRatio: '3:4' | '4:5' | '16:9' | '1:1';
  approvedForPublic: boolean;
  minorConsentRequired: boolean;
  minorConsentVerified: boolean;
  reviewNote: string;
  localDerivativePath?: string;
}

export interface YouTubeVideoAsset {
  id: string;
  youtubeId: string;
  url: string;
  title: string;
  sourceTitleInChannel: string;
  duration: string;
  publishedDate?: string;
  category: 'introduction' | 'performance' | 'student-journey' | 'repertoire' | 'experimental' | 'testimonial';
  credits: string[];
  descriptionSummary: string;
  embedVerified: boolean;
  captionsVerified: boolean;
  studentConsentPending: boolean;
  tier: EvidenceTier;
  proposedPlacement: string;
}

export interface SiteSettings {
  schoolName: SourcedClaim<string>;
  secondaryBrandName: SourcedClaim<string>;
  locality: SourcedClaim<string>;
  postalCode: SourcedClaim<string>;
  addressConflict: {
    googlePanelVariant: string;
    pdfExtractedVariant: string;
    resolutionStatus: 'pending-owner-confirmation' | 'confirmed';
    confirmedAddress?: string;
  };
  phoneConflict: {
    googlePanelDisplay: string;
    normalizedCandidate: string;
    pdfIncompleteVariant: string;
    whatsappConfirmed: boolean;
    rentalPhoneConfirmed: boolean;
    resolutionStatus: 'pending-owner-confirmation' | 'confirmed';
  };
  emailCandidate: SourcedClaim<string>;
  hoursConflictNote: string;
  socialLinks: {
    youtubeChannel: string;
    instagramProfile: string;
    facebookProfile?: string;
    googleBusinessProfile: string;
    legacyWebsite: string;
  };
  defaultCtaLabel: string;
  studioCtaLabel: string;
}

export interface ArtistProfile {
  name: SourcedClaim<string>;
  primaryRole: SourcedClaim<string>;
  founderTitleStatus: SourcedClaim<string>;
  guruLineage: SourcedClaim<string>;
  biographyIntro: SourcedClaim<string>;
  artisticApproach: SourcedClaim<string>;
  suppliedCredentialsPendingConfirmation: Array<{
    label: string;
    suppliedText: string;
    neededConfirmation: string;
    tier: EvidenceTier;
  }>;
  suppliedTeachingAffiliationsPendingConfirmation: Array<{
    institution: string;
    suppliedContext: string;
    neededConfirmation: string;
    tier: EvidenceTier;
  }>;
  historicalPerformancesCandidateList: Array<{
    title: string;
    kind: 'festival' | 'production';
    source: string;
    statusNote: string;
    tier: EvidenceTier;
  }>;
  featuredPortrait: ReusableMediaItem;
}

export interface ClassProgramme {
  id: string;
  title: string;
  slug: string;
  summary: SourcedClaim<string>;
  coreThemes: Array<SourcedClaim<string>>;
  unresolvedDetails: {
    ageEligibility: SourcedClaim<string>;
    batchSchedule: SourcedClaim<string>;
    deliveryModes: SourcedClaim<string>;
    trialPolicy: SourcedClaim<string>;
    feeStructure: SourcedClaim<string>;
  };
}

export interface StudioOffering {
  title: SourcedClaim<string>;
  distinctPositioningNote: string;
  statedAreaSqFt: SourcedClaim<string>;
  statedAmenities: Array<SourcedClaim<string>>;
  creativeUses: Array<SourcedClaim<string>>;
  danceMovementTherapyNote: {
    suppliedClaim: string;
    governanceRule: string;
    status: 'held-pending-owner-and-documentation-review';
  };
}

export type EventDateCertainty = 'confirmed' | 'tentative' | 'date_tba';
export type EventLifecycleStatus = 'scheduled' | 'postponed' | 'cancelled';
export type EventAttendanceMode = 'in_person' | 'online' | 'hybrid';
export type ComputedEventTemporalState =
  | 'upcoming'
  | 'ongoing'
  | 'archived'
  | 'postponed'
  | 'cancelled'
  | 'date_tba';

export interface EventDocument {
  id: string;
  title: string;
  slug: string;
  category: 'performance' | 'workshop' | 'showcase' | 'lecture-demonstration';
  summary: string;
  body: string[];
  /** ISO 8601 instant (e.g. 2026-12-05T18:00:00+05:30). Null only when dateCertainty === 'date_tba' */
  startDateTime: string | null;
  /** ISO 8601 instant. Must be >= startDateTime when present. */
  endDateTime: string | null;
  timezone: 'Asia/Kolkata';
  dateCertainty: EventDateCertainty;
  status: EventLifecycleStatus;
  attendanceMode: EventAttendanceMode;
  venueName: string;
  venueAddress: string;
  organiser: string;
  registrationUrl?: string;
  confirmedOfferSummary?: string;
  posterMedia?: ReusableMediaItem;
  /** Critical guard: local test fixtures MUST have isLocalTestFixture: true and approvedForPublic: false */
  isLocalTestFixture: boolean;
  approvedForPublic: boolean;
}
