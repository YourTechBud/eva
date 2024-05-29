import { describe, expect, it } from 'vitest';

import { checkDate, formatDate } from './date';

describe('formatDate', () => {
  it('formats a date as dd-mm-yyyy', () => {
    const date = new Date(2024, 4, 28); // Note: months are zero-indexed in JavaScript
    const formattedDate = formatDate(date);
    expect(formattedDate).toBe('28-05-2024');
  });

  it('adds leading zeros to single-digit days', () => {
    const date = new Date(2024, 0, 8);
    const formattedDate = formatDate(date);
    expect(formattedDate).toBe('08-01-2024');
  });

  it('adds leading zeros to single-digit months', () => {
    const date = new Date(2024, 8, 10);
    const formattedDate = formatDate(date);
    expect(formattedDate).toBe('10-09-2024');
  });

  it('handles leap year dates correctly', () => {
    const date = new Date(2024, 1, 29);
    const formattedDate = formatDate(date);
    expect(formattedDate).toBe('29-02-2024');
  });
});


describe('checkDate', () => {
  it('returns "Today" for today\'s date', () => {
    const today = new Date().toISOString();
    expect(checkDate(today)).toBe('Today');
  });

  it('returns "Tomorrow" for tomorrow\'s date', () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    expect(checkDate(tomorrow.toISOString())).toBe('Tomorrow');
  });

  it('returns "Yesterday" for yesterday\'s date', () => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    expect(checkDate(yesterday.toISOString())).toBe('Yesterday');
  });

  it('returns "Next Week" for a date within next week', () => {
    const nextWeek = new Date();
    nextWeek.setDate(nextWeek.getDate() + (5 - nextWeek.getDay()) + 7);
    expect(checkDate(nextWeek.toISOString())).toBe('Next Week');
  });

  it('returns "Last Week" for a date within last week', () => {
    const lastWeek = new Date();
    lastWeek.setDate(lastWeek.getDate() - lastWeek.getDay() - 7);
    expect(checkDate(lastWeek.toISOString())).toBe('Last Week');
  });

  it('returns formatted date for dates not today, tomorrow, next week, or last week', () => {
    const randomDate = new Date(2024, 0, 15); // A random date that doesn't match any of the above conditions
    expect(checkDate(randomDate.toISOString())).toBe(formatDate(randomDate));
  });
});