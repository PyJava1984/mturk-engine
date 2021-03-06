export type DATE_FORMAT = WORKER_DATE_FORMAT | LEGACY_DATE_FORMAT;

export const WORKER_DATE_FORMAT = 'YYYY-MM-DD';
export type WORKER_DATE_FORMAT = typeof WORKER_DATE_FORMAT;

export const CONTACT_DATE_FORMAT = WORKER_DATE_FORMAT;

export const LEGACY_DATE_FORMAT = 'MMDDYYYY';
export type LEGACY_DATE_FORMAT = typeof LEGACY_DATE_FORMAT;

export const HHMMSS_FORMAT = 'HH:mm:ss';

export const MILLISECONDS_IN_ONE_DAY = 86400000;

export const DAYS_IN_WEEK = 7;
export const MONTH_LABELS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
];

/**
 * To be passed in as the argument for moment().format()
 * e.g. 'moment('10022017', 'MMDDYYYY').format('MOMENT_LOCALE')
 * yields 'Monday, October 2nd 2017' when MOMENT_LOCALE === 'dddd, MMMM Do YYYY'
 */
export const MOMENT_LOCALE = 'dddd, MMMM Do YYYY';
