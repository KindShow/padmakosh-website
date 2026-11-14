import type {
  ArtistProfile,
  ClassProgramme,
  EventDocument,
  ReusableMediaItem,
  SiteSettings,
  StudioOffering,
  YouTubeVideoAsset,
} from '../types/content';

export const SITE_SETTINGS_FIXTURE: SiteSettings = {
  schoolName: {
    value: 'Padmakosh School of Kathak',
    tier: 'verified',
    sourceNote: 'User-specified institution name; matches existing site and profile title.',
  },
  secondaryBrandName: {
    value: 'Padmakosh Studio',
    tier: 'verified',
    sourceNote: 'Observed in Google Business Profile, supplied introduction, and portfolio PDF.',
  },
  locality: {
    value: 'Bavdhan, Pune, Maharashtra',
    tier: 'verified',
    sourceNote: 'Corroborated across supplied portfolio PDF and Google Business Profile.',
  },
  postalCode: {
    value: '411021',
    tier: 'verified',
    sourceNote: 'Observed on Google Business Profile for Bavdhan, Pune (legacy website showed older postcode).',
  },
  addressConflict: {
    googlePanelVariant:
      'B-501, Lohia Jain Square, S. No. 52/1B, Bavdhan, access NDA-Pashan Road, behind Maratha Mandir, opposite Shinde Pump, Vaidehi Enclave, Pune 411021',
    pdfExtractedVariant: 'B 01, Lohia Jain Square, near LMD Chowk Bavdhan',
    resolutionStatus: 'pending-owner-confirmation',
  },
  phoneConflict: {
    googlePanelDisplay: '096896 15339',
    normalizedCandidate: '+91 96896 15339',
    pdfIncompleteVariant: '+91968961339 (incomplete 9-digit subscriber number in PDF extraction)',
    whatsappConfirmed: false,
    rentalPhoneConfirmed: false,
    resolutionStatus: 'pending-owner-confirmation',
  },
  emailCandidate: {
    value: 'sonalpatil286@gmail.com',
    tier: 'verified',
    sourceNote: 'Directly verified and provided by Guru Sonal Pendse.',
    approvalNote: 'Verified direct email contact for admissions, workshops, and studio bookings.',
  },
  hoursConflictNote:
    'Google Business Profile lists "Open 24 hours", which conflicts with realistic class and studio access schedules. Public class hours and studio access windows are withheld until confirmed by the owner.',
  socialLinks: {
    youtubeChannel: 'https://youtube.com/@padmakosh',
    instagramProfile: 'https://www.instagram.com/padmakosh_studio/',
    facebookProfile: 'https://www.facebook.com/padmakosh',
    googleBusinessProfile: 'https://share.google/MHJFqZ3mmoTXJzTR3',
    legacyWebsite: 'https://www.padmakosh.com/',
  },
  defaultCtaLabel: 'Enquire about Kathak classes',
  studioCtaLabel: 'Enquire about Padmakosh Studio',
};

export const FEATURED_PORTRAIT_KAU_0072: ReusableMediaItem = {
  id: 'photo-kau-0072',
  filename: 'KAU_0072.JPG',
  driveFileId: '1k_Vlp2nwDxdzUdc1PDLLMgxmDu30uQ8_',
  driveUrl: 'https://drive.google.com/file/d/1k_Vlp2nwDxdzUdc1PDLLMgxmDu30uQ8_/view?usp=drivesdk',
  bytes: 2634922,
  mediaType: 'photograph',
  title: 'Vertical Stage Portrait in Teal and Gold (KAU_0072.JPG)',
  altText: {
    value: 'Full-length Kathak artist in a teal and gold stage costume poised against a dark stage backdrop, preserving hand mudras, ghungroo, and full silhouette.',
    tier: 'owner-supplied',
    sourceNote: 'Inspected at full preview size in linked Drive photo folder (2,634,922 bytes).',
    approvalNote: 'Confirm subject identity as Sonal Pendse and confirm photographer credit before final public caption.',
  },
  caption: {
    value: 'Kathak stage presentation — [Placeholder: Confirm subject identity as Sonal Pendse and photographer credit before publication]',
    tier: 'placeholder',
    sourceNote: 'KAU_0072.JPG previewed 10 November 2026.',
  },
  photographerCredit: {
    value: '[Placeholder: Photographer credit pending owner confirmation]',
    tier: 'placeholder',
    sourceNote: 'Not embedded in filename metadata.',
  },
  aspectRatio: '3:4',
  approvedForPublic: false,
  minorConsentRequired: false,
  minorConsentVerified: false,
  reviewNote:
    'Previewed: vertical full-length dancer in teal costume and gold sash on a dark stage; strong profile/editorial candidate. Preserve hands, feet, and costume silhouette; never crop into a tight landscape banner.',
};

export const ARTIST_PROFILE_FIXTURE: ArtistProfile = {
  name: {
    value: 'Sonal Pendse',
    tier: 'verified',
    sourceNote: 'Named in supplied introduction, portfolio PDF, and 2022 YouTube channel introduction.',
  },
  primaryRole: {
    value: 'Kathak Artist, Teacher & Director',
    tier: 'owner-supplied',
    sourceNote: '2022 introduction video description identifies her as director; introduction and portfolio establish teaching and performance work.',
    approvalNote: 'Approve exact public title and whether "Founder" should be added.',
  },
  founderTitleStatus: {
    value: '[Placeholder: Confirm whether "Founder, Padmakosh School of Kathak" is the owner-approved formal title]',
    tier: 'placeholder',
    sourceNote: 'Earlier assistant referred to her as founder without separate documentary proof.',
  },
  guruLineage: {
    value: 'Senior disciple of Guru Shambhavi Dandekar',
    tier: 'owner-supplied',
    sourceNote: 'Supplied introduction identifies senior discipleship under Guru Shambhavi Dandekar (legacy site corroborates with spelling "Shambavi").',
    approvalNote: 'Confirm preferred spelling "Guru Shambhavi Dandekar" with owner.',
  },
  biographyIntro: {
    value:
      'Sonal Pendse is a Pune-based Kathak artist and educator dedicated to classical training, disciplined riyaaz, and expressive stage presentation. At Padmakosh School of Kathak in Bavdhan, she guides students from foundational footwork and taal comprehension through advanced repertoire and live-accompaniment practice.',
    tier: 'owner-supplied',
    sourceNote: 'Drafted in original editorial language from supplied introduction and portfolio.',
    approvalNote: 'Subject to final owner review and sign-off.',
  },
  artisticApproach: {
    value:
      'Rooted in her training as a senior disciple of Guru Shambhavi Dandekar, her teaching balances technical precision in tatkar, chakkar, and taal with sensitivity to abhinaya, Sanskrit poetic text, and musicality.',
    tier: 'owner-supplied',
    sourceNote: 'Synthesized from supplied introduction document.',
  },
  suppliedCredentialsPendingConfirmation: [
    {
      label: 'Doordarshan Graded Artist',
      suppliedText: 'Stated as Doordarshan grade artist in supplied introduction.',
      neededConfirmation: 'Confirm exact Doordarshan grade category and year before displaying as a public credential badge.',
      tier: 'placeholder',
    },
    {
      label: 'Postgraduate Study in Kathak & Sanskrit Degree',
      suppliedText: 'Supplied introduction mentions a degree in Sanskrit and postgraduate study in Kathak.',
      neededConfirmation: 'Confirm exact degree titles, conferring universities, and graduation years.',
      tier: 'placeholder',
    },
    {
      label: 'NET Qualification / Fellowship & Government Scholarship',
      suppliedText: 'Supplied introduction references NET fellowship and a government scholarship.',
      neededConfirmation: 'Confirm official fellowship/scholarship titles and awarding bodies (e.g. UGC / Ministry of Culture).',
      tier: 'placeholder',
    },
    {
      label: 'Teaching & Practice Tenure',
      suppliedText: 'Introduction references "past 12 years" and "100+ students"; legacy site mentions "more than 15 years" of practice.',
      neededConfirmation: 'Provide an explicit founding year for Padmakosh School of Kathak and a dated student/practice milestone rather than undated counters.',
      tier: 'placeholder',
    },
  ],
  suppliedTeachingAffiliationsPendingConfirmation: [
    {
      institution: 'Savitribai Phule Pune University (Pune University)',
      suppliedContext: 'Named in supplied introduction in teaching/academic context.',
      neededConfirmation: 'Confirm exact role (visiting faculty, examiner, contributor), department, and dates.',
      tier: 'placeholder',
    },
    {
      institution: 'MES College',
      suppliedContext: 'Named in supplied introduction in teaching context.',
      neededConfirmation: 'Confirm full college name, exact role, and whether current or past.',
      tier: 'placeholder',
    },
    {
      institution: 'COEP (College of Engineering Pune)',
      suppliedContext: 'Named in supplied introduction in teaching/workshop context.',
      neededConfirmation: 'Confirm exact engagement nature and dates; no institutional logo used.',
      tier: 'placeholder',
    },
    {
      institution: 'Bharati Vidyapeeth',
      suppliedContext: 'Named in supplied introduction in academic/Guru context.',
      neededConfirmation: 'Confirm exact capacity and dates before public listing.',
      tier: 'placeholder',
    },
  ],
  historicalPerformancesCandidateList: [
    {
      title: 'Purana Kila Festival',
      kind: 'festival',
      source: 'sonal portfolio.pdf (July 2024)',
      statusNote: 'Historical festival appearance candidate — confirm year, city, and ensemble/solo credit.',
      tier: 'owner-supplied',
    },
    {
      title: 'Vaikom Dance Festival',
      kind: 'festival',
      source: 'sonal portfolio.pdf (July 2024)',
      statusNote: 'Historical festival appearance candidate — confirm year, organiser, and repertoire.',
      tier: 'owner-supplied',
    },
    {
      title: 'Taal Yaatra',
      kind: 'festival',
      source: 'sonal portfolio.pdf (July 2024)',
      statusNote: 'Historical presentation candidate — confirm date, venue, and role.',
      tier: 'owner-supplied',
    },
    {
      title: 'Kathakotsav',
      kind: 'festival',
      source: 'sonal portfolio.pdf (July 2024)',
      statusNote: 'Historical festival appearance candidate — confirm year and presenting body.',
      tier: 'owner-supplied',
    },
    {
      title: 'Sawantwadi Festival',
      kind: 'festival',
      source: 'sonal portfolio.pdf (July 2024)',
      statusNote: 'Historical festival appearance candidate — confirm year and performance details.',
      tier: 'owner-supplied',
    },
    {
      title: 'Kathak Kirtan',
      kind: 'production',
      source: 'sonal portfolio.pdf (July 2024)',
      statusNote: 'Original/thematic production candidate — confirm premiere year, concept note, and credits.',
      tier: 'owner-supplied',
    },
    {
      title: 'Vyakta',
      kind: 'production',
      source: 'sonal portfolio.pdf (July 2024)',
      statusNote: 'Thematic production candidate — confirm synopsis, collaborators, and approved photos.',
      tier: 'owner-supplied',
    },
    {
      title: 'Abhidha',
      kind: 'production',
      source: 'sonal portfolio.pdf (July 2024)',
      statusNote: 'Thematic production candidate — confirm synopsis, collaborators, and approved photos.',
      tier: 'owner-supplied',
    },
    {
      title: 'Sankraman',
      kind: 'production',
      source: 'sonal portfolio.pdf (July 2024)',
      statusNote: 'Thematic production candidate — confirm synopsis, collaborators, and approved photos.',
      tier: 'owner-supplied',
    },
  ],
  featuredPortrait: FEATURED_PORTRAIT_KAU_0072,
};

export const CLASS_PROGRAMMES_FIXTURE: ClassProgramme[] = [
  {
    id: 'prog-foundational',
    title: 'Primary & Foundational Kathak',
    slug: 'primary-foundational-kathak',
    summary: {
      value:
        'Personalized foundational modules for all age groups — introducing anga shuddhi (posture), tatkar, hastamudra (beginning with the blooming lotus Padmakosh gesture), basic chakkar, and Tritaal padhant through weekday and weekend batches.',
      tier: 'verified',
      sourceNote: 'Confirmed by owner; derived from supplied introduction and beginner Tritaal curriculum.',
    },
    coreThemes: [
      {
        value: 'Foundational footwork (tatkar), anga shuddhi, and hastamudra vocabulary',
        tier: 'verified',
        sourceNote: 'Owner-confirmed curriculum.',
      },
      {
        value: 'Introduction to taal, laya, and spoken padhant across weekday & weekend batches',
        tier: 'verified',
        sourceNote: 'Owner-confirmed batch structure for all age groups.',
      },
      {
        value: 'Physical studio classes in Bavdhan + interactive virtual classes for global students',
        tier: 'verified',
        sourceNote: 'Directly confirmed by owner.',
      },
    ],
    unresolvedDetails: {
      ageEligibility: {
        value: 'Open to all age groups with personalized learning modules',
        tier: 'verified',
        sourceNote: 'Confirmed by owner.',
      },
      batchSchedule: {
        value: 'Weekday and weekend batches available',
        tier: 'verified',
        sourceNote: 'Confirmed by owner.',
      },
      deliveryModes: {
        value: 'In-studio Bavdhan classes and interactive virtual classes backed by high-speed Wi-Fi',
        tier: 'verified',
        sourceNote: 'Confirmed by owner.',
      },
      trialPolicy: {
        value: '[Placeholder: Confirm trial/observation class policy and whether a fee applies]',
        tier: 'placeholder',
        sourceNote: 'Do not promise a free trial without owner confirmation.',
      },
      feeStructure: {
        value: '[Placeholder: Confirm whether tuition fees are shared upon enquiry or published per term]',
        tier: 'placeholder',
        sourceNote: 'No fee schedule supplied.',
      },
    },
  },
  {
    id: 'prog-intermediate-riyaaz',
    title: 'Intermediate Repertoire, Guided Riyaaz & Board Certifications',
    slug: 'intermediate-repertoire-guided-riyaaz',
    summary: {
      value:
        'Deepening rhythmic command across diverse taals, toda, tukda, paran, gat nikas, and expressive abhinaya — aligned with twice-yearly certification examinations affiliated with Gandharva Mahavidyalaya and Bharati Vidyapeeth.',
      tier: 'verified',
      sourceNote: 'Directly confirmed by owner (Gandharva Mahavidyalaya & Bharati Vidyapeeth affiliation, exams twice a year).',
    },
    coreThemes: [
      {
        value: 'Affiliated certification exams twice a year (Gandharva Mahavidyalaya & Bharati Vidyapeeth)',
        tier: 'verified',
        sourceNote: 'Confirmed by owner.',
      },
      {
        value: 'Exploration of diverse taals (Tritaal, Jhaptal, Ektal, Pancham Sawari) & disciplined riyaaz',
        tier: 'verified',
        sourceNote: 'Corroborated by channel videos and owner curriculum.',
      },
      {
        value: 'Annual showcase performances, prestigious competitions & expressive abhinaya compositions',
        tier: 'verified',
        sourceNote: 'Confirmed by owner.',
      },
    ],
    unresolvedDetails: {
      ageEligibility: {
        value: 'All age groups progressing through certified examination boards',
        tier: 'verified',
        sourceNote: 'Confirmed by owner.',
      },
      batchSchedule: {
        value: 'Weekday and weekend batch options',
        tier: 'verified',
        sourceNote: 'Confirmed by owner.',
      },
      deliveryModes: {
        value: 'In-person studio training and interactive virtual sessions',
        tier: 'verified',
        sourceNote: 'Confirmed by owner.',
      },
      trialPolicy: {
        value: '[Placeholder: Confirm placement interaction policy]',
        tier: 'placeholder',
        sourceNote: 'Pending owner input.',
      },
      feeStructure: {
        value: '[Placeholder: Confirm fee disclosure preference]',
        tier: 'placeholder',
        sourceNote: 'Pending owner input.',
      },
    },
  },
  {
    id: 'prog-advanced-stage',
    title: 'Solo Performer Mastery, Commercial Stage & Leadership Pathways',
    slug: 'advanced-sadhana-live-music',
    summary: {
      value:
        'Every dancer dreams of becoming a solo performer. Advanced mentorship prepares disciples for solo presentations, choreography productions, regular commercial shows upon attaining mastery, teacher’s training, and studio management opportunities.',
      tier: 'verified',
      sourceNote: 'Directly confirmed by owner.',
    },
    coreThemes: [
      {
        value: 'Dedicated preparation for solo presentations, prestigious competitions & choreography productions',
        tier: 'verified',
        sourceNote: 'Confirmed by owner.',
      },
      {
        value: 'Regular performance opportunities in commercial shows after attaining technical mastery',
        tier: 'verified',
        sourceNote: 'Confirmed by owner.',
      },
      {
        value: 'Teacher’s training, experience opportunities & studio management working pathways',
        tier: 'verified',
        sourceNote: 'Confirmed by owner.',
      },
    ],
    unresolvedDetails: {
      ageEligibility: {
        value: 'Senior disciples & advanced practitioners',
        tier: 'verified',
        sourceNote: 'Confirmed by owner.',
      },
      batchSchedule: {
        value: 'Weekday, weekend, and intensive rehearsal schedules',
        tier: 'verified',
        sourceNote: 'Confirmed by owner.',
      },
      deliveryModes: {
        value: 'In-studio live accompaniment & hybrid masterclasses',
        tier: 'verified',
        sourceNote: 'Confirmed by owner.',
      },
      trialPolicy: {
        value: '[Placeholder: By prior consultation with Guru Sonal Pendse]',
        tier: 'placeholder',
        sourceNote: 'Pending owner input.',
      },
      feeStructure: {
        value: '[Placeholder: Confirm fee disclosure preference]',
        tier: 'placeholder',
        sourceNote: 'Pending owner input.',
      },
    },
  },
];

export const STUDIO_OFFERING_FIXTURE: StudioOffering = {
  title: {
    value: 'Padmakosh Studio — Home to Padmakosh School of Kathak',
    tier: 'verified',
    sourceNote: 'Owner motto and portfolio PDF.',
  },
  distinctPositioningNote:
    'Padmakosh Studio is home to Padmakosh School of Kathak in Bavdhan, Pune — equipped with a 750 sq. ft. air-conditioned floor, high-speed Wi-Fi connectivity, and video projection facilities for training, rehearsals, and creative gatherings.',
  statedAreaSqFt: {
    value: 'Approx. 750 sq. ft. studio floor',
    tier: 'owner-supplied',
    sourceNote: 'Stated in sonal portfolio.pdf and corroborated in Instagram search snippet; reconfirm current usable floor dimensions before launch.',
  },
  statedAmenities: [
    {
      value: 'High-definition video projection facilities & high-speed Wi-Fi for seamless virtual and hybrid classes',
      tier: 'verified',
      sourceNote: 'Directly confirmed by owner.',
    },
    {
      value: 'Air-conditioned 750 sq. ft. practice and rehearsal hall',
      tier: 'owner-supplied',
      sourceNote: 'sonal portfolio.pdf.',
    },
    {
      value: 'Professional audio / sound system & curated studio interiors',
      tier: 'owner-supplied',
      sourceNote: 'sonal portfolio.pdf.',
    },
    {
      value: 'Parking access in Lohia Jain Square / Bavdhan vicinity',
      tier: 'owner-supplied',
      sourceNote: 'Mentioned in Google Business Profile description.',
    },
  ],
  creativeUses: [
    {
      value: 'Classical dance rehearsals,baithaks, and intimate lecture-demonstrations',
      tier: 'owner-supplied',
      sourceNote: 'Portfolio PDF and studio introduction video.',
    },
    {
      value: 'Music & movement workshops, photo/video shoots, and studio rental enquiries',
      tier: 'owner-supplied',
      sourceNote: 'Google Business Profile and Instagram snippet — confirm current rental availability, booking rules, and hourly terms.',
    },
  ],
  danceMovementTherapyNote: {
    suppliedClaim:
      'Supplied portfolio PDF and materials mention dance movement therapy and reference a certification involving International Dance Council / UNESCO Paris.',
    governanceRule:
      'Held for owner and documentation review. Do not present this as UNESCO institutional accreditation or as a clinical/medical therapy service. Confirm whether non-Kathak movement sessions should appear on the school website and approve exact wording.',
    status: 'held-pending-owner-and-documentation-review',
  },
};

/**
 * Real approved public events:
 * Handoff rule: "None is verified as upcoming... If no events are approved, show 'Upcoming events will be announced here.'"
 * Therefore, all real public events start empty (`[]`), and our local test fixtures are strictly flagged
 * with `isLocalTestFixture: true` and `approvedForPublic: false` so we can verify Asia/Kolkata boundaries
 * without ever leaking mock events to public output or Schema.org JSON-LD.
 */
export const LOCAL_TEST_EVENT_FIXTURES: EventDocument[] = [
  {
    id: 'test-event-ongoing-ist',
    title: '[LOCAL TEST FIXTURE] Kartik Riyaaz & Padhant Intensive (Ongoing in Asia/Kolkata)',
    slug: 'test-kartik-riyaaz-ongoing',
    category: 'workshop',
    summary:
      'Local test fixture verifying an event currently in progress on 10 November 2026 in Asia/Kolkata (+05:30).',
    body: [
      'This entry exists exclusively in local review mode to demonstrate how an ongoing event in Asia/Kolkata is badged and ordered.',
      'It is blocked from production builds, sitemap generation, and Schema.org Event JSON-LD.',
    ],
    startDateTime: '2026-11-10T10:00:00+05:30',
    endDateTime: '2026-11-10T19:30:00+05:30',
    timezone: 'Asia/Kolkata',
    dateCertainty: 'confirmed',
    status: 'scheduled',
    attendanceMode: 'in_person',
    venueName: 'Padmakosh Studio (Local Test Fixture)',
    venueAddress: 'Bavdhan, Pune 411021 [Unit pending confirmation]',
    organiser: 'Padmakosh School of Kathak',
    isLocalTestFixture: true,
    approvedForPublic: false,
  },
  {
    id: 'test-event-upcoming-ist',
    title: '[LOCAL TEST FIXTURE] Margashirsha Taal & Abhinaya Baithak (Upcoming)',
    slug: 'test-margashirsha-baithak-upcoming',
    category: 'showcase',
    summary:
      'Local test fixture verifying future date formatting in Asia/Kolkata and confirmed offer/registration display.',
    body: [
      'Demonstrates an upcoming studio showcase scheduled after the current Asia/Kolkata timestamp.',
      'Never rendered as a real event unless an authorised editor publishes a real verified event in Sanity.',
    ],
    startDateTime: '2026-12-12T17:30:00+05:30',
    endDateTime: '2026-12-12T20:00:00+05:30',
    timezone: 'Asia/Kolkata',
    dateCertainty: 'confirmed',
    status: 'scheduled',
    attendanceMode: 'in_person',
    venueName: 'Padmakosh Studio (Local Test Fixture)',
    venueAddress: 'Bavdhan, Pune 411021',
    organiser: 'Padmakosh School of Kathak',
    confirmedOfferSummary: 'Prior registration required (Test Fixture)',
    isLocalTestFixture: true,
    approvedForPublic: false,
  },
  {
    id: 'test-event-postponed-ist',
    title: '[LOCAL TEST FIXTURE] Guest Tabla & Lahara Accompaniment Workshop (Postponed)',
    slug: 'test-guest-tabla-workshop-postponed',
    category: 'workshop',
    summary:
      'Local test fixture verifying graceful handling of a postponed event without fabricating a replacement date.',
    body: [
      'Verifies the handoff requirement: support cancelled/postponed events and unknown dates without fabricated replacements.',
    ],
    startDateTime: '2026-11-22T11:00:00+05:30',
    endDateTime: '2026-11-22T14:00:00+05:30',
    timezone: 'Asia/Kolkata',
    dateCertainty: 'tentative',
    status: 'postponed',
    attendanceMode: 'in_person',
    venueName: 'Padmakosh Studio (Local Test Fixture)',
    venueAddress: 'Bavdhan, Pune 411021',
    organiser: 'Padmakosh School of Kathak',
    isLocalTestFixture: true,
    approvedForPublic: false,
  },
  {
    id: 'test-event-cancelled-ist',
    title: '[LOCAL TEST FIXTURE] Evening Lecture-Demonstration on Sanskrit Kavita (Cancelled)',
    slug: 'test-sanskrit-kavita-cancelled',
    category: 'lecture-demonstration',
    summary:
      'Local test fixture verifying clear Cancelled badge display and removal of registration CTAs.',
    body: [
      'Verifies that cancelled events remain transparent to visitors who bookmarked the link while disabling registration actions.',
    ],
    startDateTime: '2026-11-28T18:00:00+05:30',
    endDateTime: '2026-11-28T19:30:00+05:30',
    timezone: 'Asia/Kolkata',
    dateCertainty: 'confirmed',
    status: 'cancelled',
    attendanceMode: 'hybrid',
    venueName: 'Padmakosh Studio (Local Test Fixture)',
    venueAddress: 'Bavdhan, Pune 411021',
    organiser: 'Padmakosh School of Kathak',
    isLocalTestFixture: true,
    approvedForPublic: false,
  },
  {
    id: 'test-event-missing-end-archived-ist',
    title: '[LOCAL TEST FIXTURE] Sharad Ritu Solo & Group Presentation (Auto-Archived via Missing-End Policy)',
    slug: 'test-sharad-ritu-archived',
    category: 'performance',
    summary:
      'Local test fixture verifying that an event with a past startDateTime and null endDateTime automatically archives after 23:59:59.999 IST of its start date.',
    body: [
      'Demonstrates the explicit missing-end policy: no fake end clock time is invented, and the event moves to the archive automatically once its start calendar day in Asia/Kolkata concludes.',
    ],
    startDateTime: '2026-10-18T18:30:00+05:30',
    endDateTime: null,
    timezone: 'Asia/Kolkata',
    dateCertainty: 'confirmed',
    status: 'scheduled',
    attendanceMode: 'in_person',
    venueName: 'Pune Auditorium (Local Test Fixture)',
    venueAddress: 'Pune, Maharashtra',
    organiser: 'Padmakosh School of Kathak',
    isLocalTestFixture: true,
    approvedForPublic: false,
  },
];

export const YOUTUBE_VIDEO_INVENTORY: YouTubeVideoAsset[] = [
  {
    id: 'yt-studio-intro',
    youtubeId: 'QYmQGNO4dW8',
    url: 'https://www.youtube.com/watch?v=QYmQGNO4dW8',
    title: 'Padmakosh Studio and Padmakosh School of Kathak — An Introduction',
    sourceTitleInChannel: 'Padmakosh Studio and Padmakosh school of kathak—an introduction',
    duration: '3:36',
    publishedDate: '13 August 2022',
    category: 'introduction',
    credits: [
      'Concept & Director: Sonal Pendse',
      'Cinematography, Editing & Direction: Soham Godbole',
      'Vocals: Mrunmayee Phatak',
      'Audio Recording: Pancham Studio Pune',
    ],
    descriptionSummary:
      'Primary introduction candidate presenting the vision of Padmakosh Studio and Padmakosh School of Kathak in Bavdhan, Pune.',
    embedVerified: false,
    captionsVerified: false,
    studentConsentPending: true,
    tier: 'verified',
    proposedPlacement: 'Home page & About page (Click-to-load embed with full credits and YouTube fallback link)',
  },
  {
    id: 'yt-taaltrayee',
    youtubeId: 'PLpr2XgYwzU',
    url: 'https://www.youtube.com/watch?v=PLpr2XgYwzU',
    title: 'Taaltrayee',
    sourceTitleInChannel: 'Taaltrayee',
    duration: '5:12',
    category: 'performance',
    credits: ['Padmakosh YouTube Channel (@padmakosh) — confirm individual performer and accompanist credits'],
    descriptionSummary: 'Rhythmic exploration across three taals from the @padmakosh official YouTube channel.',
    embedVerified: false,
    captionsVerified: false,
    studentConsentPending: true,
    tier: 'verified',
    proposedPlacement: 'Gallery & Sonal Pendse repertoire section',
  },
  {
    id: 'yt-sriranga-vitthal',
    youtubeId: 'mo_H8sOErrs',
    url: 'https://www.youtube.com/watch?v=mo_H8sOErrs',
    title: 'Sriranga Vitthal — Bhajan',
    sourceTitleInChannel: 'Sriranga Vitthal- Bhajan',
    duration: '8:40',
    category: 'performance',
    credits: ['Padmakosh YouTube Channel (@padmakosh) — confirm composer, vocal, and dancer credits'],
    descriptionSummary: 'Devotional bhajan abhinaya and nritta presentation.',
    embedVerified: false,
    captionsVerified: false,
    studentConsentPending: true,
    tier: 'verified',
    proposedPlacement: 'Gallery — Devotional & Abhinaya Repertoire',
  },
  {
    id: 'yt-tritaal-beginners',
    youtubeId: 'mPL7LvIHyhE',
    url: 'https://www.youtube.com/watch?v=mPL7LvIHyhE',
    title: 'Tritaal by First Year Students / Beginners',
    sourceTitleInChannel: 'Tritaal by first year students/beginners',
    duration: '12:43',
    category: 'student-journey',
    credits: ['Padmakosh School of Kathak students — hold embedded display until student/guardian permissions are verified'],
    descriptionSummary: 'First-year students demonstrating foundational Tritaal training and padhant.',
    embedVerified: false,
    captionsVerified: false,
    studentConsentPending: true,
    tier: 'verified',
    proposedPlacement: 'Kathak Classes & Gallery (Requires explicit student/minor display permission verification)',
  },
  {
    id: 'yt-pancham-sawari',
    youtubeId: 'bC9zC1WHrB4',
    url: 'https://www.youtube.com/watch?v=bC9zC1WHrB4',
    title: 'Taal Prastuti — Pancham Sawari',
    sourceTitleInChannel: 'Taal prastuti - Pancham Sawari',
    duration: '14:39',
    category: 'repertoire',
    credits: ['Padmakosh YouTube Channel (@padmakosh) — confirm ensemble and musician credits'],
    descriptionSummary: 'Extended presentation in the 15-matra Pancham Sawari taal.',
    embedVerified: false,
    captionsVerified: false,
    studentConsentPending: true,
    tier: 'verified',
    proposedPlacement: 'Gallery — Classical Taal Repertoire',
  },
  {
    id: 'yt-darbari-dhun',
    youtubeId: 'deSbUJaFI8k',
    url: 'https://www.youtube.com/watch?v=deSbUJaFI8k',
    title: 'Darbari Dhun',
    sourceTitleInChannel: 'Darbari Dhun',
    duration: '5:44',
    category: 'performance',
    credits: ['Padmakosh YouTube Channel (@padmakosh) — confirm performers and music rights'],
    descriptionSummary: 'Choreographic presentation set to Darbari Dhun.',
    embedVerified: false,
    captionsVerified: false,
    studentConsentPending: true,
    tier: 'verified',
    proposedPlacement: 'Gallery — Performance Highlights',
  },
  {
    id: 'yt-pied-piper',
    youtubeId: 'K_oscyyNeDc',
    url: 'https://www.youtube.com/watch?v=K_oscyyNeDc',
    title: 'A Tale of Pied Piper — New Approach in Kathak [Source title: "A tale of pide piper - New approach in KATHAK"]',
    sourceTitleInChannel: 'A tale of pide piper - New approach in KATHAK',
    duration: '8:36',
    category: 'experimental',
    credits: ['Padmakosh YouTube Channel (@padmakosh) — confirm final display title spelling and student permissions'],
    descriptionSummary: 'Narrative storytelling experiment using Kathak vocabulary; source spelling retained in metadata pending owner display title approval.',
    embedVerified: false,
    captionsVerified: false,
    studentConsentPending: true,
    tier: 'verified',
    proposedPlacement: 'Gallery — Experimental Storytelling',
  },
  {
    id: 'yt-amruta-studio-praise',
    youtubeId: 't4W3TjxpATs',
    url: 'https://youtube.com/shorts/t4W3TjxpATs',
    title: 'A Soulful Praise for Our Soulful Space',
    sourceTitleInChannel: 'A soulful praise for our soulful space !',
    duration: '0:58',
    publishedDate: '2024',
    category: 'testimonial',
    credits: ['Kathak Artist: Amruta Paranjape Gogate', 'Padmakosh Studio, Bavdhan, Pune'],
    descriptionSummary:
      'Accomplished Kathak artist and fellow colleague Amruta Paranjape Gogate praises the serene ambiance, wooden flooring, and riyaaz atmosphere of Padmakosh Studio in Bavdhan.',
    embedVerified: true,
    captionsVerified: false,
    studentConsentPending: false,
    tier: 'verified',
    proposedPlacement: 'Padmakosh Studio Page Testimonial Section',
  },
];

export interface DrivePhotoInventoryEntry {
  filename: string;
  bytes: number;
  driveId: string;
  driveUrl: string;
  inspectedPreview: boolean;
  reviewStatus: string;
}

export const DRIVE_PHOTO_INVENTORY: DrivePhotoInventoryEntry[] = [
  { filename: 'KAU_6121.JPG', bytes: 5345657, driveId: '1k6yO_cvVNSWB1hV5uri0wytrXpMcC3LE', driveUrl: 'https://drive.google.com/file/d/1k6yO_cvVNSWB1hV5uri0wytrXpMcC3LE/view?usp=drivesdk', inspectedPreview: false, reviewStatus: 'Metadata inventoried; inspect composition, dimensions, identity and rights before selection.' },
  { filename: 'KAU_6116.JPG', bytes: 1471358, driveId: '1Tu0ImWXcG_esTsQFAqDTQEYt5yAofcHH', driveUrl: 'https://drive.google.com/file/d/1Tu0ImWXcG_esTsQFAqDTQEYt5yAofcHH/view?usp=drivesdk', inspectedPreview: false, reviewStatus: 'Metadata inventoried; inspect composition, dimensions, identity and rights before selection.' },
  { filename: 'KAU_6234.JPG', bytes: 1801874, driveId: '1svIBGN-cHsTZlfFn2sgNVJ5YnnYdW5dL', driveUrl: 'https://drive.google.com/file/d/1svIBGN-cHsTZlfFn2sgNVJ5YnnYdW5dL/view?usp=drivesdk', inspectedPreview: false, reviewStatus: 'Metadata inventoried; inspect composition, dimensions, identity and rights before selection.' },
  { filename: 'KAU_6131.JPG', bytes: 1686522, driveId: '1wHHfb4mlGAIEGj34QQx2wM8Nw4ZYC0Ir', driveUrl: 'https://drive.google.com/file/d/1wHHfb4mlGAIEGj34QQx2wM8Nw4ZYC0Ir/view?usp=drivesdk', inspectedPreview: false, reviewStatus: 'Metadata inventoried; inspect composition, dimensions, identity and rights before selection.' },
  { filename: 'KAU_6237.JPG', bytes: 950754, driveId: '1FgTljTcWi5Z8AWI95y69V28Q-Y9KMdmO', driveUrl: 'https://drive.google.com/file/d/1FgTljTcWi5Z8AWI95y69V28Q-Y9KMdmO/view?usp=drivesdk', inspectedPreview: false, reviewStatus: 'Metadata inventoried; inspect composition, dimensions, identity and rights before selection.' },
  { filename: 'KAU_8551.JPG', bytes: 4539392, driveId: '1Y-vcQI8rRkr7JFxRyMQ7teWjhZvvSLhh', driveUrl: 'https://drive.google.com/file/d/1Y-vcQI8rRkr7JFxRyMQ7teWjhZvvSLhh/view?usp=drivesdk', inspectedPreview: false, reviewStatus: 'Metadata inventoried; inspect composition, dimensions, identity and rights before selection.' },
  { filename: 'KAU_0258.JPG', bytes: 1644008, driveId: '1Li6_wgv5aAlptUTxCVpz_Z8JhudF6zBg', driveUrl: 'https://drive.google.com/file/d/1Li6_wgv5aAlptUTxCVpz_Z8JhudF6zBg/view?usp=drivesdk', inspectedPreview: false, reviewStatus: 'Metadata inventoried; inspect composition, dimensions, identity and rights before selection.' },
  { filename: 'KAU_0235.JPG', bytes: 2944755, driveId: '10CwMSaqIjTz5urOsOw48i1Rj0YEeJlXX', driveUrl: 'https://drive.google.com/file/d/10CwMSaqIjTz5urOsOw48i1Rj0YEeJlXX/view?usp=drivesdk', inspectedPreview: false, reviewStatus: 'Metadata inventoried; inspect composition, dimensions, identity and rights before selection.' },
  { filename: 'KAU_0205.JPG', bytes: 1348186, driveId: '1ibs1Mk_errwlXQO7Kd_NpUC7FlkMOF_T', driveUrl: 'https://drive.google.com/file/d/1ibs1Mk_errwlXQO7Kd_NpUC7FlkMOF_T/view?usp=drivesdk', inspectedPreview: false, reviewStatus: 'Metadata inventoried; inspect composition, dimensions, identity and rights before selection.' },
  { filename: 'KAU_0159.JPG', bytes: 2635177, driveId: '1-JtipXTqho2DPpoWdBirSoKZuCpFQnLA', driveUrl: 'https://drive.google.com/file/d/1-JtipXTqho2DPpoWdBirSoKZuCpFQnLA/view?usp=drivesdk', inspectedPreview: false, reviewStatus: 'Metadata inventoried; inspect composition, dimensions, identity and rights before selection.' },
  { filename: 'KAU_0072.JPG', bytes: 2634922, driveId: '1k_Vlp2nwDxdzUdc1PDLLMgxmDu30uQ8_', driveUrl: 'https://drive.google.com/file/d/1k_Vlp2nwDxdzUdc1PDLLMgxmDu30uQ8_/view?usp=drivesdk', inspectedPreview: true, reviewStatus: 'Previewed: vertical full-length dancer, teal costume and gold sash on a dark stage; strong profile / editorial candidate. Confirm identity and photographer credit; avoid tight landscape cropping.' },
  { filename: 'KAU_9480.JPG', bytes: 4876367, driveId: '1hYUZ8UFFEKDDNwQC8eiTNbKMmywJBC2S', driveUrl: 'https://drive.google.com/file/d/1hYUZ8UFFEKDDNwQC8eiTNbKMmywJBC2S/view?usp=drivesdk', inspectedPreview: false, reviewStatus: 'Metadata inventoried; inspect composition, dimensions, identity and rights before selection.' },
  { filename: 'KAU_8970.JPG', bytes: 7295535, driveId: '1Y8arq9_o_vMU7-YKnEao15IOEEmQhAhL', driveUrl: 'https://drive.google.com/file/d/1Y8arq9_o_vMU7-YKnEao15IOEEmQhAhL/view?usp=drivesdk', inspectedPreview: false, reviewStatus: 'Metadata inventoried; inspect composition, dimensions, identity and rights before selection.' },
  { filename: 'KAU_8912.JPG', bytes: 3631546, driveId: '1YJ0wE9i6cw0Op35KZaG6f7HjVnMcO0BP', driveUrl: 'https://drive.google.com/file/d/1YJ0wE9i6cw0Op35KZaG6f7HjVnMcO0BP/view?usp=drivesdk', inspectedPreview: false, reviewStatus: 'Metadata inventoried; inspect composition, dimensions, identity and rights before selection.' },
  { filename: 'KAU_8836.JPG', bytes: 6116238, driveId: '122JOYKViT09ckPg_0mbFzuIEKdMYp_57', driveUrl: 'https://drive.google.com/file/d/122JOYKViT09ckPg_0mbFzuIEKdMYp_57/view?usp=drivesdk', inspectedPreview: false, reviewStatus: 'Metadata inventoried; inspect composition, dimensions, identity and rights before selection.' },
  { filename: 'KAU_8144.JPG', bytes: 2437961, driveId: '1A_-B1fXXT9PYB_S0tsyUqxslpmIk22D5', driveUrl: 'https://drive.google.com/file/d/1A_-B1fXXT9PYB_S0tsyUqxslpmIk22D5/view?usp=drivesdk', inspectedPreview: false, reviewStatus: 'Metadata inventoried; inspect composition, dimensions, identity and rights before selection.' },
  { filename: 'KAU_6262.JPG', bytes: 1529371, driveId: '1ivrLtsA0qBll_uvh6UrYe8R-woDIReDi', driveUrl: 'https://drive.google.com/file/d/1ivrLtsA0qBll_uvh6UrYe8R-woDIReDi/view?usp=drivesdk', inspectedPreview: false, reviewStatus: 'Metadata inventoried; inspect composition, dimensions, identity and rights before selection.' },
  { filename: 'KAU_6211.JPG', bytes: 3867322, driveId: '1q0ZR-EooYBXc7kp0CH5nJVIgi0iubpkG', driveUrl: 'https://drive.google.com/file/d/1q0ZR-EooYBXc7kp0CH5nJVIgi0iubpkG/view?usp=drivesdk', inspectedPreview: false, reviewStatus: 'Metadata inventoried; inspect composition, dimensions, identity and rights before selection.' },
  { filename: 'KAU_6201.JPG', bytes: 3120783, driveId: '1ow0taLDjiWXiXOWI4zB36Hk3mtOXVE8V', driveUrl: 'https://drive.google.com/file/d/1ow0taLDjiWXiXOWI4zB36Hk3mtOXVE8V/view?usp=drivesdk', inspectedPreview: false, reviewStatus: 'Metadata inventoried; inspect composition, dimensions, identity and rights before selection.' },
  { filename: 'KAU_6179.JPG', bytes: 2643208, driveId: '1JR0OO5rlsnAbzvWz92mmKvJ6gF_Icr0G', driveUrl: 'https://drive.google.com/file/d/1JR0OO5rlsnAbzvWz92mmKvJ6gF_Icr0G/view?usp=drivesdk', inspectedPreview: false, reviewStatus: 'Metadata inventoried; inspect composition, dimensions, identity and rights before selection.' },
  { filename: 'KAU_6176.JPG', bytes: 3469430, driveId: '1A9D3sEnfy8tBbPRctGmFvUS9-7e0bKuD', driveUrl: 'https://drive.google.com/file/d/1A9D3sEnfy8tBbPRctGmFvUS9-7e0bKuD/view?usp=drivesdk', inspectedPreview: false, reviewStatus: 'Metadata inventoried; inspect composition, dimensions, identity and rights before selection.' },
  { filename: 'KAU_6171.JPG', bytes: 1281875, driveId: '1p4L3DYczEdVoeciYb2xY6dNEw1kBObEg', driveUrl: 'https://drive.google.com/file/d/1p4L3DYczEdVoeciYb2xY6dNEw1kBObEg/view?usp=drivesdk', inspectedPreview: false, reviewStatus: 'Metadata inventoried; inspect composition, dimensions, identity and rights before selection.' },
  { filename: 'KAU_6168.JPG', bytes: 4673856, driveId: '1NHIgx1vef6uJtK61IKTJxkB1BlL2MSdR', driveUrl: 'https://drive.google.com/file/d/1NHIgx1vef6uJtK61IKTJxkB1BlL2MSdR/view?usp=drivesdk', inspectedPreview: false, reviewStatus: 'Metadata inventoried; inspect composition, dimensions, identity and rights before selection.' },
  { filename: 'KAU_6151.JPG', bytes: 2444927, driveId: '1ZejwmWeFQR1_4wEE7SU-x9I71hluD2gC', driveUrl: 'https://drive.google.com/file/d/1ZejwmWeFQR1_4wEE7SU-x9I71hluD2gC/view?usp=drivesdk', inspectedPreview: false, reviewStatus: 'Metadata inventoried; inspect composition, dimensions, identity and rights before selection.' },
  { filename: 'KAU_6135.JPG', bytes: 5565232, driveId: '1JrMmWKpX0mKItic0sEgalOd24pwC2D43', driveUrl: 'https://drive.google.com/file/d/1JrMmWKpX0mKItic0sEgalOd24pwC2D43/view?usp=drivesdk', inspectedPreview: false, reviewStatus: 'Metadata inventoried; inspect composition, dimensions, identity and rights before selection.' },
  { filename: 'KAU_6133.JPG', bytes: 1479203, driveId: '1UjHSieGWeZMrQ6_efNc8RTvluSad8GgQ', driveUrl: 'https://drive.google.com/file/d/1UjHSieGWeZMrQ6_efNc8RTvluSad8GgQ/view?usp=drivesdk', inspectedPreview: false, reviewStatus: 'Metadata inventoried; inspect composition, dimensions, identity and rights before selection.' },
  { filename: 'KAU_6125.JPG', bytes: 1657453, driveId: '102vHyAsopreIHWd15R9eKFiLC3A5TiO4', driveUrl: 'https://drive.google.com/file/d/102vHyAsopreIHWd15R9eKFiLC3A5TiO4/view?usp=drivesdk', inspectedPreview: false, reviewStatus: 'Metadata inventoried; inspect composition, dimensions, identity and rights before selection.' },
  { filename: 'KAU_6129.JPG', bytes: 2199084, driveId: '16v9uP4SUzzLOSShA_podMnPnLLdlBmK-', driveUrl: 'https://drive.google.com/file/d/16v9uP4SUzzLOSShA_podMnPnLLdlBmK-/view?usp=drivesdk', inspectedPreview: false, reviewStatus: 'Metadata inventoried; inspect composition, dimensions, identity and rights before selection.' },
  { filename: 'KAU_6120.JPG', bytes: 1552140, driveId: '1X9Kvg4dTxW0JSFNcr-DfBTmdzKD_lJoS', driveUrl: 'https://drive.google.com/file/d/1X9Kvg4dTxW0JSFNcr-DfBTmdzKD_lJoS/view?usp=drivesdk', inspectedPreview: false, reviewStatus: 'Metadata inventoried; inspect composition, dimensions, identity and rights before selection.' },
  { filename: 'KAU_6186.JPG', bytes: 1838085, driveId: '1Q9n13ZB_z3fvcE8EqlVbuTNcswIJBHBe', driveUrl: 'https://drive.google.com/file/d/1Q9n13ZB_z3fvcE8EqlVbuTNcswIJBHBe/view?usp=drivesdk', inspectedPreview: false, reviewStatus: 'Metadata inventoried; inspect composition, dimensions, identity and rights before selection.' },
  { filename: 'KAU_6183.JPG', bytes: 2735248, driveId: '16XNgVtNLKFvfXPFQNZbUIIa3NifaXoxk', driveUrl: 'https://drive.google.com/file/d/16XNgVtNLKFvfXPFQNZbUIIa3NifaXoxk/view?usp=drivesdk', inspectedPreview: false, reviewStatus: 'Metadata inventoried; inspect composition, dimensions, identity and rights before selection.' },
  { filename: 'KAU_6227.JPG', bytes: 930996, driveId: '1HGpx0sUv7OjiWM9h05ZMiIxJraGEvDuL', driveUrl: 'https://drive.google.com/file/d/1HGpx0sUv7OjiWM9h05ZMiIxJraGEvDuL/view?usp=drivesdk', inspectedPreview: false, reviewStatus: 'Metadata inventoried; inspect composition, dimensions, identity and rights before selection.' },
  { filename: 'KAU_6119.JPG', bytes: 1443101, driveId: '1MOiwF1d2Pv3--EzccoTNfaP6B46C_U0H', driveUrl: 'https://drive.google.com/file/d/1MOiwF1d2Pv3--EzccoTNfaP6B46C_U0H/view?usp=drivesdk', inspectedPreview: false, reviewStatus: 'Metadata inventoried; inspect composition, dimensions, identity and rights before selection.' },
  { filename: 'KAU_6112.JPG', bytes: 1613891, driveId: '1HqRntDplFfn45QGsOfNjfsG2tKaUFwpz', driveUrl: 'https://drive.google.com/file/d/1HqRntDplFfn45QGsOfNjfsG2tKaUFwpz/view?usp=drivesdk', inspectedPreview: false, reviewStatus: 'Metadata inventoried; inspect composition, dimensions, identity and rights before selection.' },
  { filename: 'KAU_6108.JPG', bytes: 3071695, driveId: '1rB6JywiUdwVS5azQk1bGmL8OwjYVEvy5', driveUrl: 'https://drive.google.com/file/d/1rB6JywiUdwVS5azQk1bGmL8OwjYVEvy5/view?usp=drivesdk', inspectedPreview: false, reviewStatus: 'Metadata inventoried; inspect composition, dimensions, identity and rights before selection.' },
];
