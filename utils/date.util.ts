/**
 * Produces a string representation in SS-ISO 8601 format (yyyy-mm-dd).
 * @param date The date that will be converted to string format.
 * @returns A string formatted date.
 */
export const toDateString = (date: Date): string => {
  const year = date.getFullYear();
  const month = toTwoDigitString(date.getMonth());
  const dateNumber = toTwoDigitString(date.getDate() + 1);

  return `${year}-${month}-${dateNumber}`;
};

const toTwoDigitString = (num: number): string =>
  `${num < 10 ? "0" : ""}${num}`;
