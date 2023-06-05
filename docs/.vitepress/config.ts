import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Obboco - Documentation",
  description:
    "Obboco is a free and open-source platform that simplifies your business processes by managing appointments, bookings, customer data, invoices, and revenue.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Obboco.com", link: "https://obboco.com" },
      { text: "Home", link: "/" },
      { text: "Features", link: "/features" },
      { text: "Technical", link: "/technical/activities" },
    ],

    sidebar: [
      {
        text: "Obboco",
        items: [
          {
            text: "Features",
            link: "/features",
            items: [
              { text: "Social Login", link: "/features/social-login" },
              { text: "Activities", link: "/features/activities" },
              { text: "Events", link: "/features/events" },
              { text: "Bookings", link: "/features/bookings" },
              { text: "Guests", link: "/features/guests" },
              { text: "Pass", link: "/features/pass" },
              { text: "Wallet", link: "/features/wallet" },
              { text: "Account", link: "/features/account" },
            ],
          },
          {
            text: "Technical",
            link: "/technical",
            items: [
              { text: "Activities", link: "/technical/activities" },
            ],
          },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/obboco" }],
  },
});
