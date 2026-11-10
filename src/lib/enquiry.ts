/**
 * Enquiry validation and local delivery stub logic.
 * Rules enforced from handoff:
 * - Collects name, valid reply channel (email or phone), category, and message.
 * - Never asks for a child's full date of birth or sensitive personal records.
 * - Default category is "kathak-classes" ("Enquire about Kathak classes"), with a distinct
 *   "studio-space" ("Padmakosh Studio enquiry") category.
 * - Never claims success if delivery fails.
 * - In local mode, uses an explicitly labelled local delivery stub and sends nothing externally.
 */

export type EnquiryCategory =
  | 'kathak-classes'
  | 'studio-space'
  | 'performance-collaboration'
  | 'general';

export interface EnquirySubmissionPayload {
  fullName: string;
  email: string;
  phone: string;
  category: EnquiryCategory;
  message: string;
  /** Honeypot field — must remain empty */
  websiteUrlHoneypot?: string;
}

export interface EnquiryValidationResult {
  valid: boolean;
  fieldErrors: Partial<Record<keyof EnquirySubmissionPayload | 'replyChannel', string>>;
  sanitized?: {
    fullName: string;
    email: string;
    phone: string;
    category: EnquiryCategory;
    message: string;
  };
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_REGEX = /^[+\d][\d\s()-]{7,18}$/;

const VALID_CATEGORIES: EnquiryCategory[] = [
  'kathak-classes',
  'studio-space',
  'performance-collaboration',
  'general',
];

export function validateEnquiryPayload(
  input: Partial<EnquirySubmissionPayload>
): EnquiryValidationResult {
  const fieldErrors: EnquiryValidationResult['fieldErrors'] = {};

  // Spam honeypot check
  if (input.websiteUrlHoneypot && input.websiteUrlHoneypot.trim().length > 0) {
    return {
      valid: false,
      fieldErrors: {
        websiteUrlHoneypot: 'Automated submission rejected.',
      },
    };
  }

  const fullName = (input.fullName ?? '').trim();
  const email = (input.email ?? '').trim();
  const phone = (input.phone ?? '').trim();
  const category = (input.category ?? 'kathak-classes') as EnquiryCategory;
  const message = (input.message ?? '').trim();

  if (fullName.length < 2) {
    fieldErrors.fullName = 'Please enter your name (at least 2 characters).';
  } else if (fullName.length > 120) {
    fieldErrors.fullName = 'Name must be under 120 characters.';
  }

  const hasEmail = email.length > 0;
  const hasPhone = phone.length > 0;

  if (!hasEmail && !hasPhone) {
    fieldErrors.replyChannel =
      'Please provide either a valid email address or a phone number so Padmakosh can reply.';
  } else {
    if (hasEmail && !EMAIL_REGEX.test(email)) {
      fieldErrors.email = 'Please enter a valid email address (for example, name@example.com).';
    }
    if (hasPhone && !PHONE_REGEX.test(phone)) {
      fieldErrors.phone =
        'Please enter a valid 8–15 digit phone number (with optional country code).';
    }
  }

  if (!VALID_CATEGORIES.includes(category)) {
    fieldErrors.category = 'Please choose a valid enquiry category.';
  }

  if (message.length < 15) {
    fieldErrors.message =
      'Please share a brief message (at least 15 characters) about your interest or question.';
  } else if (message.length > 2500) {
    fieldErrors.message = 'Please keep your message under 2,500 characters.';
  }

  const valid = Object.keys(fieldErrors).length === 0;

  return {
    valid,
    fieldErrors,
    sanitized: valid
      ? {
          fullName,
          email,
          phone,
          category,
          message,
        }
      : undefined,
  };
}
