export function parseDate(date: string): Date {
  if (date === 'present') {
    return new Date();
  }

  const [day, month, year] = date.split('.').map(Number);
  return new Date(year, month - 1, day);
}
