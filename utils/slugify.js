function slugify(string) {
  return string
    .toLowerCase() // Convert the string to lowercase
    .replace(/[^\w\s-]/g, "") // Remove non-alphanumeric characters except for spaces and dashes
    .trim() // Remove leading and trailing whitespace
    .replace(/[\s-]+/g, "-") // Replace spaces and repeated dashes with a single dash
    .replace(/^-+|-+$/g, ""); // Remove any leading or trailing dashes
}

module.exports = slugify;
