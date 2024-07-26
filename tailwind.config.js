import defaultTheme from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";
import fs from "fs";
import path from "path";

const content = ["./index.html"];
const srcDir = path.resolve(__dirname, "src");
const excludeDir = path.resolve(srcDir, "components/layout");

function getContentPaths(dir, excludeDir) {
  let paths = [];

  function walk(directory) {
    const files = fs.readdirSync(directory, { withFileTypes: true });
    for (const file of files) {
      const fullPath = path.join(directory, file.name);
      if (file.isDirectory()) {
        if (fullPath !== excludeDir) {
          walk(fullPath);
        }
      } else if (/\.(js|ts|jsx|tsx)$/.test(file.name)) {
        paths.push(fullPath);
      }
    }
  }

  walk(dir);
  return paths;
}

content.push(...getContentPaths(srcDir, excludeDir));

export default {
  content,
  theme: {
    extend: {
      // Set font family
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      // Set theme colors (Required config!)
      colors: {
        primary: colors.blue,
        secondary: colors.slate,
      },
    },
  },
  // Add plugins
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
