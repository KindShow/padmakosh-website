import type {
  ComputedEventTemporalState,
  EventDocument,
} from '../types/content';

export const EVENT_TIMEZONE = 'Asia/Kolkata' as const;

/**
 * Explicit Documented Missing-End Policy:
 * When an editor publishes an event with a startDateTime in Asia/Kolkata but no endDateTime:
 * 1. The UI displays the start date/time only and never fabricates an end clock time.
 * 2. For lifecycle/archiving calculation, the event is treated as active through the end
 *    of its start calendar day in Asia/Kolkata (23:59:59.999+05:30). Once the reference
 *    instant passes 23:59:59.999+05:30 of that calendar date in Asia/Kolkata, the event
 *    automatically transitions to 'archived'.
 */
export const MISSING_END_POLICY_DESCRIPTION =
  'If endDateTime is omitted, no end clock time is fabricated for display; for automatic archiving, the event expires at 23:59:59.999 Asia/Kolkata (IST) on its start calendar date.';

export interface EvaluatedEvent {
  event: EventDocument;
  temporalState: ComputedEventTemporalState;
  isValidChronology: boolean;
  validationError?: string;
  formattedDateRangeIST: string;
  effectiveArchiveAfterInstant: string | null;
}

/**
 * Returns the YYYY-MM-DD calendar date in Asia/Kolkata for a given Date.
 */
export function getKolkataCalendarDate(date: Date): string {
  const formatter = new Intl.DateTimeFormat('en-CA', {
    timeZone: EVENT_TIMEZONE,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
  return formatter.format(date);
}

/**
 * Computes the end-of-day instant (23:59:59.999+05:30) in Asia/Kolkata for a given start instant.
 */
export function getEndOfKolkataDayInstant(startInstant: Date): Date {
  const ymd = getKolkataCalendarDate(startInstant);
  return new Date(`${ymd}T23:59:59.999+05:30`);
}

/**
 * Validates that endDateTime is not earlier than startDateTime.
 */
export function validateEventChronology(
  startDateTime: string | null,
  endDateTime: string | null,
  dateCertainty: EventDocument['dateCertainty']
): { valid: boolean; error?: string } {
  if (dateCertainty === 'date_tba') {
    return { valid: true };
  }
  if (!startDateTime) {
    return {
      valid: false,
      error: 'Start date/time is required unless dateCertainty is set to "date_tba".',
    };
  }
  const startMs = Date.parse(startDateTime);
  if (Number.isNaN(startMs)) {
    return { valid: false, error: `Invalid startDateTime ISO string: ${startDateTime}` };
  }
  if (endDateTime) {
    const endMs = Date.parse(endDateTime);
    if (Number.isNaN(endMs)) {
      return { valid: false, error: `Invalid endDateTime ISO string: ${endDateTime}` };
    }
    if (endMs < startMs) {
      return {
        valid: false,
        error: 'Event endDateTime must be after or equal to startDateTime.',
      };
    }
  }
  return { valid: true };
}

/**
 * Formats an event's start/end in Asia/Kolkata without inventing missing times.
 */
export function formatEventDateRangeIST(event: EventDocument): string {
  if (event.dateCertainty === 'date_tba' || !event.startDateTime) {
    return 'Date to be announced (Asia/Kolkata)';
  }

  const start = new Date(event.startDateTime);
  if (Number.isNaN(start.getTime())) {
    return 'Date pending verification';
  }

  const dateFormatter = new Intl.DateTimeFormat('en-IN', {
    timeZone: EVENT_TIMEZONE,
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  const timeFormatter = new Intl.DateTimeFormat('en-IN', {
    timeZone: EVENT_TIMEZONE,
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });

  const startDateLabel = dateFormatter.format(start);
  const startTimeLabel = timeFormatter.format(start);

  if (!event.endDateTime) {
    return `${startDateLabel} · Starts ${startTimeLabel} IST (End time not specified)`;
  }

  const end = new Date(event.endDateTime);
  if (Number.isNaN(end.getTime())) {
    return `${startDateLabel} · Starts ${startTimeLabel} IST`;
  }

  const sameKolkataDay = getKolkataCalendarDate(start) === getKolkataCalendarDate(end);
  const endTimeLabel = timeFormatter.format(end);

  if (sameKolkataDay) {
    return `${startDateLabel} · ${startTimeLabel} – ${endTimeLabel} IST`;
  }

  const endDateLabel = dateFormatter.format(end);
  return `${startDateLabel}, ${startTimeLabel} – ${endDateLabel}, ${endTimeLabel} IST`;
}

/**
 * Evaluates an event's temporal state relative to `referenceNow` in Asia/Kolkata.
 */
export function evaluateEvent(
  event: EventDocument,
  referenceNow: Date = new Date()
): EvaluatedEvent {
  const chronology = validateEventChronology(
    event.startDateTime,
    event.endDateTime,
    event.dateCertainty
  );

  const formattedDateRangeIST = formatEventDateRangeIST(event);

  if (event.status === 'cancelled') {
    return {
      event,
      temporalState: 'cancelled',
      isValidChronology: chronology.valid,
      validationError: chronology.error,
      formattedDateRangeIST,
      effectiveArchiveAfterInstant: event.endDateTime,
    };
  }

  if (event.status === 'postponed') {
    return {
      event,
      temporalState: 'postponed',
      isValidChronology: chronology.valid,
      validationError: chronology.error,
      formattedDateRangeIST,
      effectiveArchiveAfterInstant: event.endDateTime,
    };
  }

  if (event.dateCertainty === 'date_tba' || !event.startDateTime) {
    return {
      event,
      temporalState: 'date_tba',
      isValidChronology: chronology.valid,
      validationError: chronology.error,
      formattedDateRangeIST,
      effectiveArchiveAfterInstant: null,
    };
  }

  const startInstant = new Date(event.startDateTime);
  const effectiveEndInstant = event.endDateTime
    ? new Date(event.endDateTime)
    : getEndOfKolkataDayInstant(startInstant);

  const nowMs = referenceNow.getTime();
  const startMs = startInstant.getTime();
  const endMs = effectiveEndInstant.getTime();

  let temporalState: ComputedEventTemporalState;
  if (nowMs < startMs) {
    temporalState = 'upcoming';
  } else if (nowMs <= endMs) {
    temporalState = 'ongoing';
  } else {
    temporalState = 'archived';
  }

  return {
    event,
    temporalState,
    isValidChronology: chronology.valid,
    validationError: chronology.error,
    formattedDateRangeIST,
    effectiveArchiveAfterInstant: effectiveEndInstant.toISOString(),
  };
}

/**
 * Filters a list of events into public approved events only (excluding all local test fixtures).
 */
export function getApprovedPublicEvents(
  events: EventDocument[],
  referenceNow: Date = new Date()
): {
  activeOrUpcoming: EvaluatedEvent[];
  archived: EvaluatedEvent[];
} {
  const approved = events
    .filter((ev) => !ev.isLocalTestFixture && ev.approvedForPublic)
    .map((ev) => evaluateEvent(ev, referenceNow))
    .filter((ev) => ev.isValidChronology);

  const activeOrUpcoming = approved.filter(
    (item) =>
      item.temporalState === 'ongoing' ||
      item.temporalState === 'upcoming' ||
      item.temporalState === 'postponed' ||
      item.temporalState === 'cancelled' ||
      item.temporalState === 'date_tba'
  );

  const archived = approved.filter((item) => item.temporalState === 'archived');

  return { activeOrUpcoming, archived };
}
