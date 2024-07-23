// Function to format a date as 'dd-mm-yyyy'
export function formatDate(date: Date) {
  const day = date.getDate();
  const month = date.getMonth() + 1; // Months are zero-indexed
  const year = date.getFullYear();

  // Add leading zeros to day and month if necessary
  const dayString = day < 10 ? '0' + day : day;
  const monthString = month < 10 ? '0' + month : month;

  return `${dayString}-${monthString}-${year}`;
}

// Function to check if a date is today or tomorrow, accepting an RFC 3339 date string
export function checkDate(rfc3339String: string) {
  // Parse the RFC 3339 date string into a Date object
  const inputDate = new Date(rfc3339String);
  inputDate.setHours(0, 0, 0, 0); // Reset time to midnight for accurate comparison

  // Get today's date with the time set to midnight
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Get tomorrow's date by adding one day to today's date
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  // Get this Saturday's date
  const thisSaturday = new Date(today);
  thisSaturday.setDate(today.getDate() + (6 - today.getDay()));

  // Get next week's date by getting the date of next friday
  const nextFriday = new Date(today);
  nextFriday.setDate(today.getDate() + (5 - today.getDay()) + 7);

  // Get yesterday's date by subtracting one day from today's date
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  // Get last Sunday's date
  const lastSunday = new Date(today);
  lastSunday.setDate(today.getDate() - today.getDay());

  // Get last Monday's date
  const lastWeek = new Date(today);
  lastWeek.setDate(today.getDate() - today.getDay() - 7);

  if (inputDate.getTime() === today.getTime()) {
    return 'Today';
  } else if (inputDate.getTime() >= yesterday.getTime() && inputDate < today) {
    return 'Yesterday';
  } else if (inputDate.getTime() === tomorrow.getTime()) {
    return 'Tomorrow';
  } else if (inputDate > tomorrow && inputDate <= thisSaturday) {
    return 'This Week';
  } else if (inputDate > thisSaturday && inputDate <= nextFriday) {
    return 'Next Week';
  } else if (inputDate >= lastSunday && inputDate < yesterday) {
    return 'Earlier This Week';
  } else if (inputDate >= lastWeek && inputDate < lastSunday) {
    return 'Last Week';
  } else {
    return formatDate(inputDate); // Return formatted date if not today, tomorrow, next week, or last week
  }
}

// Function to get the difference in days between today and a given date, accepting an RFC 3339 date string
export function getDifferenceInDays(rfc3339String: string) {
  // Parse the RFC 3339 date string into a Date object
  const inputDate = new Date(rfc3339String);
  inputDate.setHours(0, 0, 0, 0); // Reset time to midnight for accurate comparison

  // Get today's date with the time set to midnight
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Calculate the difference in days between the two dates
  const differenceInTime = inputDate.getTime() - today.getTime();
  const differenceInDays = differenceInTime / (1000 * 3600 * 24);

  return differenceInDays;
}

// Format the day in the format - `January 10th, 2022`
export function formatDay(rfc3339String: string) {
  const date = new Date(rfc3339String);

  const nth = (day: number) => {
    if (day > 3 && day < 21) return 'th';
    switch (day % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  };

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  return `${monthNames[monthIndex]} ${day}${nth(day)}, ${year}`;
}

// Fomat the time in the format - `10:00 AM`
export function formatTime(rfc3339String: string) {
  const date = new Date(rfc3339String);

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = hours % 12 || 12; // The hour '0' should be '12'

  return `${formattedHours}:${minutes.toString().padStart(2, '0')} ${ampm}`;
}
