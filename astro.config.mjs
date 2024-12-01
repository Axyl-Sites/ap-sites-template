import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import react from "@astrojs/react";

export default defineConfig({
  site: "https://axylprojects.dev/",
  base: "/",
  integrations: [
    starlight({
      title: "Axyl Projects",
      description: "Axyl Projects, a new Development soloution.",
      components: {
        TableOfContents: "./src/components/TOC.astro",
        PageTitle: "./src/components/CustomPageTitle.astro",
      },
      logo: {
        light: "/src/assets/gold.png",
        dark: "/src/assets/gold.png",
      },
      customCss: process.env.NO_GRADIENTS
        ? ["./src/styles/_global.css"]
        : ["./src/styles/landing.css", "./src/styles/_global.css"],
      social: {
        github: "https://github.com/Axyl-Projects",
        twitter: "https://x.com/@axylprojects",
        discord: "https://discord.gg/J7R7sEZcn9",
        youtube: "https://youtube.com/@axylprojects",
        twitch: "https://twitch.tv/axylprojects",
        blueSky: "https://bsky.app/profile/awfixer.me",
        patreon: "https://patreon.com/axylprojects",
        reddit: "https://reddit.com/r/Axyl",
      },
      editLink: {
        baseUrl: "https://github.com/Axyl-Sites/axylprojects.dev/tree/main/",
      },

      lastUpdated: true,
    }),
    react(),
  ],

  image: { service: { entrypoint: "astro/assets/services/sharp" } },
});
