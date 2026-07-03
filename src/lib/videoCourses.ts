/**
 * Curated, exact YouTube course/playlist URLs, keyed by program `slug`.
 *
 * When a program has an entry here, the "Video Tutorials" section links straight
 * to this real, popular course instead of a YouTube search. Only add URLs that
 * have been verified to exist and match the skill (found via web search, not
 * guessed) — a wrong id would be a dead link.
 *
 * Anything not listed falls back to a scoped YouTube search.
 */
export const VIDEO_COURSES: Record<string, string> = {
  // --- Software / Web ---
  "programming-fundamentals":
    "https://www.youtube.com/playlist?list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg",
  "frontend-development-html-css-js":
    "https://www.youtube.com/playlist?list=PLLhBy6YSIT0By3_QPZLqSVQXVMzdRBFY0",
  "react-js":
    "https://www.youtube.com/playlist?list=PLfyWdpsiUiPCQzWk1YV0vi-0arAzXm_1B",
  "full-stack-development":
    "https://www.youtube.com/playlist?list=PLEiEAq2VkUULCC3eEATL4zzuapTjmo1Z_",
  "databases-sql":
    "https://www.youtube.com/playlist?list=PL9ooVrP1hQOG6DQnOD6ujdCEchaqADfCU",
  "backend-development-node-python-java":
    "https://www.youtube.com/playlist?list=PLS1QulWo1RIaarXd0t4lcCcUR5zHtrvO-",
  "cloud-platforms-aws-azure-gcp":
    "https://www.youtube.com/playlist?list=PLEiEAq2VkUULlNtIFhEQHo8gacvme35rz",
  "mobile-app-development-android-ios":
    "https://www.youtube.com/playlist?list=PL6Q9UqV2Sf1gHCHOKYLDofElSvxtRRXOR",
  "machine-learning":
    "https://www.youtube.com/playlist?list=PLoROMvodv4rMiGQp3WXShtMGgzqpfVfbU",
  "cybersecurity-and-ethical-hacking":
    "https://www.youtube.com/playlist?list=PLjVLYmrlmjGea8U9nphmCHGK_v6p_wq-R",
  "data-visualization-tableau-power-bi":
    "https://www.youtube.com/playlist?list=PLoyECfvEFOjaMKFbBSKSmnOpEcXqqRegW",

  // --- Design / Media ---
  "graphic-design-photoshop-illustrator":
    "https://www.youtube.com/playlist?list=PLzj7TwUeMQ3imveARryiga5eIixLj6hyn",
  "ui-ux-design-figma-xd":
    "https://www.youtube.com/playlist?list=PLAuhtuZXN8i9UkYbDHBOAKusxpWvSrbjD",
  "video-editing-premiere-fcp":
    "https://www.youtube.com/playlist?list=PLqlMosMle4ydWf5Xeip5W11V9WAWVBkaO",

  // --- Business / Office ---
  "microsoft-office-word-excel-powerpoint":
    "https://www.youtube.com/playlist?list=PL6C5hFez6-2Kar-ahv0MI2bxCDaMfo2o2",
  "social-media-marketing":
    "https://www.youtube.com/playlist?list=PLEiEAq2VkUUJupNSQGmZIX_hIYnBV6Dna",
  "accounting-and-bookkeeping":
    "https://www.youtube.com/playlist?list=PLzxaJ3AlBeikctMaEsDLraoxn5PpM7qbt",

  // --- ITI ---
  "copa-computer-operator-and-programming-assistant":
    "https://www.youtube.com/playlist?list=PLYXqvGkM2BRho1qae_XwE1PXOgChhkSH7",
};

export const curatedVideoUrl = (slug: string | undefined): string | undefined =>
  slug ? VIDEO_COURSES[slug] : undefined;
