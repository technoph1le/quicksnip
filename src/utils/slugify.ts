export function slugify(string: string, separator: string = "-") {
  return string
    .toString() // Cast to string (optional)
    .toLowerCase() // Convert the string to lowercase letters
    .trim() // Remove whitespace from both sides of a string (optional)
    .replace(/\s+/g, separator) // Replace spaces with {separator}
    .replace(/[^\w-]+/g, "") // Remove all non-word chars
    .replace(/_/g, separator) // Replace _ with {separator}
    .replace(/--+/g, separator) // Replace multiple - with single {separator}
    .replace(/-$/g, ""); // Remove trailing -
}

export function reverseSlugify(s: string, separator: string = "-") {
  return s
    .split(separator)
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join(" ")
    .trim();
}
