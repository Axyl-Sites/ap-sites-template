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

      sidebar: [
        {
          label: "Announcements",
          items: [
            {
              label: "What is Happening",
              link: "/en/announcements/what-is-happening",
            },
            {
              label: "We are hiring",
              link: "/en/announcements/we-are-hiring",
            },
          ],
        },
        {
          label: "Funding",
          items: [
            {
              label: "How to Help",
              link: "/en/funding/how-to-help",
            },
            {
              label: "What we need",
              link: "/en/funding/what-we-need",
            },
          ],
        },
        {
          label: "About Axyl Projects",
          items: [
            {
              label: "Manifesto",
              link: "/en/about/manifesto",
            },
            {
              label: "Why Axyl Projects?",
              link: "/en/about/axyl-projects",
            },
            {
              label: "Background on Axyl Projects",
              link: "/en/about/background",
            },
          ],
        },
        {
          label: "Programs",
          items: [
            {
              label: "About Our Programs",
              link: "/en/programs/about",
            },
            {
              label: "Dev Program",
              items: [
                {
                  label: "About",
                  link: "/en/programs/dev-program/program-info",
                },
                {
                  label: "Pricing",
                  link: "/en/programs/dev-program/pricing",
                },
                {
                  label: "Availiblity",
                  link: "/en/programs/dev-program/availibility",
                },
              ],
            },
            {
              label: "Mod Program",
              items: [
                {
                  label: "About",
                  link: "/en/programs/mod-program/about",
                },
                {
                  label: "Availiblity",
                  link: "/en/programs/mod-program/availiblity",
                },
                {
                  label: "Timeline",
                  link: "/en/programs/mod-program/timeline",
                },
              ],
            },
            {
              label: "SysAdmin Program",
              items: [
                {
                  label: "About",
                  link: "/en/programs/sysadmin-program/program-info",
                },
                {
                  label: "Pricing",
                  link: "/en/programs/sysadmin-program/pricing",
                },
                {
                  label: "Availibility",
                  link: "/en/programs/sysadmin-program/availiblity",
                },
              ],
            },
            {
              label: "NetAdmin Program",
              items: [
                {
                  label: "About",
                  link: "/en/programs/netadmin-program/about",
                },
                {
                  label: "Pricing",
                  link: "/en/programs/netadmin-program/pricing",
                },
                {
                  label: "Availiblity",
                  link: "/en/programs/netadmin-program/availiblity",
                },
              ],
            },
            {
              label: "Onboarding Program",
              items: [
                {
                  label: "About",
                  link: "/en/programs/onboarding-program/program-info",
                },
              ],
            },
          ],
        },
        {
          label: "AxylOS",
          items: [
            {
              label: "About AxylOS",
              link: "/en/projects/axylos/about-axylos",
            },
          ],
        },
        {
          label: "Helctic",
          items: [
            {
              label: "About Helctic",
              link: "/en/projects/helctic/about-helctix",
            },
          ],
        },
        {
          label: "Modded Android",
          items: [
            {
              label: "About Modded Android",
              link: "/en/projects/modded-android/about-modded-android",
            },
          ],
        },
        {
          label: "Rustfox",
          items: [
            {
              label: "About Rustfox",
              link: "/en/projects/rustfox/about-rustfox",
            },
          ],
        },
        {
          label: "Axyl Bot Service",
          items: [
            {
              label: "About Axyl Bot Service",
              link: "/en/projects/axyl-bot-service/about-abs",
            },
            {
              label: "ABS Services",
              items: [
                {
                  label: "Modmail",
                  link: "/en/projects/axyl-bot-service/abs-services/modmail",
                },
                {
                  label: "General Purpose Bot",
                  link: "/en/projects/axyl-bot-service/abs-services/gpb",
                },
              ],
            },
          ],
        },
        {
          label: "Utilities",
          items: [
            {
              label: "About Utilities",
              link: "/en/projects/utilities/about-utilities",
            },
          ],
        },
        {
          label: "Support",
          items: [
            {
              label: "Troubleshooting",
              link: "/en/projects/support/troubleshooting",
            },
          ],
        },
        {
          label: "Community",
          items: [
            {
              label: "Discord",
              link: "/en/community/discord",
            },
            {
              label: "Contribute to Axyl Projects",
              link: "/en/community/contribute",
            },
            {
              label: "Getting Help",
              link: "/en/community/getting-help",
            },
            {
              label: "Official Axyl Projects Mirrors",
              link: "/en/community/mirrors",
            },
            {
              label: "Setting up a Mirror",
              link: "/en/community/setting-mirror",
            },
            {
              label: "Submitting Bugs",
              link: "/en/community/submitting-bugs",
            },
            {
              label: "Submitting Projects in Axyl",
              link: "/en/community/submitting-projects-axyl",
            },
          ],
        },
        {
          label: "Development",
          items: [
            {
              label: "Testing",
              link: "/en/development/testing",
            },
          ],
        },
        {
          label: "Team",
          items: [
            {
              label: "About the Team",
              link: "/en/team/about-the-team",
            },
            {
              label: "Managment",
              items: [
                {
                  label: "revinant",
                  link: "/en/team/management/revinant",
                },
                {
                  label: "ByteHauler",
                  link: "/en/team/management/bytehauler",
                },
                {
                  label: "Kyeee",
                  link: "/en/team/management/kyeee",
                },
              ],
            },
            {
              label: "The Council",
              items: [
                {
                  label: "revinant",
                  link: "/en/team/management/revinant",
                },
                {
                  label: "ByteHauler",
                  link: "/en/team/management/bytehauler",
                },
                {
                  label: "Kyeee",
                  link: "/en/team/management/kyeee",
                },
              ],
            },
            {
              label: "Partners",
              items: [
                {
                  label: "revinant",
                  link: "/en/team/management/revinant",
                },
                {
                  label: "ByteHauler",
                  link: "/en/team/management/bytehauler",
                },
                {
                  label: "Kyeee",
                  link: "/en/team/management/kyeee",
                },
              ],
            },
            {
              label: "Owners",
              items: [
                {
                  label: "Austin 'AWFixer' Ware",
                  link: "/en/team/awfixer",
                },
                {
                  label: "engineered",
                  link: "/en/team/owners/engineered",
                },
              ],
            },
            {
              label: "Development",
              items: [
                {
                  label: "Adam",
                  link: "/en/team/development/adam",
                },
              ],
            },
            {
              label: "Design",
              items: [
                {
                  label: "Artemis",
                  link: "/en/team/design/artemis",
                },
              ],
            },
            {
              label: "Community",
              items: [
                {
                  label: "Ori",
                  link: "/en/team/community/ori",
                },
              ],
            },
            {
              label: "Waiting for You",
              link: "/en/team/waiting",
            },
          ],
        },
        //        {
        //          label: "Sites",
        //          items: [
        //            {
        //              label: "ME",
        //              items: [
        //                {
        //                  label: "AWFixer",
        //                  link: "/en/sites/me/awfixer",
        //                },
        //              ],
        //            },
        //          ],
        //        },
        {
          label: "Policy",
          items: [
            {
              label: "Axyl Projects EULA",
              link: "/en/policy/eula-policy",
            },
            {
              label: "Axyl Projects Network Service Policy",
              link: "/en/policy/network-policy",
            },
            {
              label: "Axyl Projects Code of Conduct",
              link: "/en/policy/code-of-conduct",
            },
            {
              label: "Axyl Projects Collaboration Policy",
              link: "/en/policy/collaboration-policy",
            },
            {
              label: "Axyl Projects Open Source Policy",
              link: "/en/policy/opensource-policy",
            },
            {
              label: "Axyl Projects Package Policy",
              link: "/en/policy/package-policy",
            },
            {
              label: "Axyl Projects Pentesting Tools Policy",
              link: "/en/policy/tools-policy",
            },
            {
              label: "Axyl Projects Privacy Policy",
              link: "/en/policy/privacy-policy",
            },
            {
              label: "Axyl Projects Update Policy",
              link: "/en/policy/update-policy",
            },
            {
              label: "Axyl Projects User Policy",
              link: "/en/policy/user-policy",
            },
            {
              label: "Cookie Policy",
              link: "/en/policy/cookie-policy",
            },
          ],
        },
      ],
    }),
    react(),
  ],

  image: { service: { entrypoint: "astro/assets/services/sharp" } },
});
