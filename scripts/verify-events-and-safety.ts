import assert from 'node:assert/strict';
import {
  DRIVE_PHOTO_INVENTORY,
  LOCAL_TEST_EVENT_FIXTURES,
  YOUTUBE_VIDEO_INVENTORY,
} from '../src/data/fixtures.ts';
import {
  evaluateEvent,
  getApprovedPublicEvents,
  validateEventChronology,
} from '../src/lib/events.ts';
import { validateEnquiryPayload } from '../src/lib/enquiry.ts';

console.log('Running Padmakosh verification suite (Asia/Kolkata boundaries, fixtures, enquiry validation)...');

// 1. Verify inventory counts match reference/padmakosh-asset-inventory.md
assert.equal(DRIVE_PHOTO_INVENTORY.length, 35, 'Must catalogue all 35 JPEG files from Drive folder');
assert.equal(YOUTUBE_VIDEO_INVENTORY.length, 7, 'Must catalogue all 7 YouTube video candidates');
const kau0072 = DRIVE_PHOTO_INVENTORY.find((p) => p.filename === 'KAU_0072.JPG');
assert.ok(kau0072 && kau0072.inspectedPreview, 'KAU_0072.JPG must be flagged as inspected preview candidate');

// 2. Verify public events guard excludes all local test fixtures
const referenceNow = new Date('2026-11-10T15:00:00+05:30');
const publicEvents = getApprovedPublicEvents(LOCAL_TEST_EVENT_FIXTURES, referenceNow);
assert.equal(
  publicEvents.activeOrUpcoming.length,
  0,
  'Local test fixtures must NEVER appear in approved public active/upcoming events'
);
assert.equal(
  publicEvents.archived.length,
  0,
  'Local test fixtures must NEVER appear in approved public archive'
);

// 3. Verify Asia/Kolkata event temporal states across all 5 test cases
const evaluatedMap = new Map(
  LOCAL_TEST_EVENT_FIXTURES.map((ev) => [ev.id, evaluateEvent(ev, referenceNow)])
);

assert.equal(evaluatedMap.get('test-event-ongoing-ist')?.temporalState, 'ongoing');
assert.equal(evaluatedMap.get('test-event-upcoming-ist')?.temporalState, 'upcoming');
assert.equal(evaluatedMap.get('test-event-postponed-ist')?.temporalState, 'postponed');
assert.equal(evaluatedMap.get('test-event-cancelled-ist')?.temporalState, 'cancelled');
assert.equal(
  evaluatedMap.get('test-event-missing-end-archived-ist')?.temporalState,
  'archived',
  'Event with missing endDateTime must archive automatically after 23:59:59.999+05:30 of its start date'
);

// 4. Verify Missing-End Policy boundary at 23:59:59+05:30 vs 00:00:01+05:30 next day
const missingEndFixture = LOCAL_TEST_EVENT_FIXTURES.find(
  (e) => e.id === 'test-event-missing-end-archived-ist'
)!;
const duringStartDayIST = evaluateEvent(
  missingEndFixture,
  new Date('2026-10-18T22:15:00+05:30')
);
assert.equal(duringStartDayIST.temporalState, 'ongoing');
const afterStartDayIST = evaluateEvent(
  missingEndFixture,
  new Date('2026-10-19T00:00:05+05:30')
);
assert.equal(afterStartDayIST.temporalState, 'archived');

// 5. Verify chronology validation rejects endDateTime earlier than startDateTime
const invalidChronology = validateEventChronology(
  '2026-12-01T18:00:00+05:30',
  '2026-12-01T16:00:00+05:30',
  'confirmed'
);
assert.equal(invalidChronology.valid, false);

// 6. Verify Enquiry validation rules
const missingReply = validateEnquiryPayload({
  fullName: 'Aarav Kulkarni',
  email: '',
  phone: '',
  category: 'kathak-classes',
  message: 'I would like to enquire about beginner Kathak classes in Bavdhan.',
});
assert.equal(missingReply.valid, false);
assert.ok(missingReply.fieldErrors.replyChannel);

const honeypotTriggered = validateEnquiryPayload({
  fullName: 'Bot User',
  email: 'bot@example.com',
  phone: '',
  category: 'kathak-classes',
  message: 'Automated spam message test here.',
  websiteUrlHoneypot: 'https://spam.example.com',
});
assert.equal(honeypotTriggered.valid, false);

const validClassEnquiry = validateEnquiryPayload({
  fullName: 'Meera Joshi',
  email: 'meera@example.com',
  phone: '+91 98220 12345',
  category: 'kathak-classes',
  message: 'Enquiring about foundational Kathak batches in Bavdhan for my daughter.',
});
assert.equal(validClassEnquiry.valid, true);

console.log('✓ All Padmakosh verification checks passed!');
