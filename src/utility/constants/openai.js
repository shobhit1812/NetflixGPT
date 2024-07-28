import OpenAI from "openai";

export const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPEN_API_KEY,
  organization: "org-nGbQ8xPHAs38TLaeSmqzhkbx",
  dangerouslyAllowBrowser: true,
});
