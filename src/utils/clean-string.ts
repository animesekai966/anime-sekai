export function cleanString(input: string): string {
  const trimmedString = String(input).trim();
  const cleanedString = trimmedString.replace(/\s\s+/g, ' ');
  return cleanedString;
}

export function extractEpisodeNumber(input: string) {
  // Define a regular expression pattern to match all numbers
  const regex = /\d+/g;

  // Use the match method to find all matches of the pattern in the input string
  const matches = input.match(regex);

  // If matches are found, return the last number as a number, else return null
  if (matches && matches.length > 0) {
    return parseInt(matches[matches.length - 1]);
  } else {
    return null;
  }
}
