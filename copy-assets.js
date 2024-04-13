const fs = require("fs-extra");

// Copy images
fs.copy("./images", "./dist/images", function (err) {
  if (err) return console.error("Failed to copy images:", err);
  console.log("Images successfully copied to dist/images");
});

// Copy PDF file
fs.copy("./resume.pdf", "./dist/resume.pdf", function (err) {
  if (err) return console.error("Failed to copy PDF:", err);
  console.log("PDF successfully copied to dist");
});
