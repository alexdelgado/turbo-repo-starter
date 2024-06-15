import type { Config } from "tailwindcss";
import sharedConfig from "@packages/tailwind/tailwind.config";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {},
  plugins: [],
  presets: [sharedConfig],
};

export default config;