import { defineConfig } from 'vitepress'
import { SitemapStream } from 'sitemap'
import { createWriteStream } from 'node:fs'
import { resolve } from 'node:path'

const links = []
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Obboco - Documentation",
  description:
    "Obboco is a free and open-source platform that simplifies your business processes by managing appointments, bookings, customer data, invoices, and revenue.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Features", link: "/features" },
      { text: "Technical", link: "/technical/activities" },
      { text: "Obboco.com", link: "https://obboco.com" },
      { text: "Obboco App", link: "https://app.obboco.com" },
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
            items: [{ text: "Activities", link: "/technical/activities" }],
          },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/obboco" }],
  },
  lastUpdated: true,
  transformHtml: (_, id, { pageData }) => {
    if (!/[\\/]404\.html$/.test(id))
      links.push({
        url: pageData.relativePath.replace(/\.md$/, '.html'),
        lastmod: pageData.lastUpdated
      })
  },
  buildEnd: async ({ outDir }) => {
    const sitemap = new SitemapStream({ hostname: "https://docs.obboco.com/" });
    const writeStream = createWriteStream(resolve(outDir, 'sitemap.xml'))
    sitemap.pipe(writeStream)
    links.forEach((link) => sitemap.write(link))
    sitemap.end()
    await new Promise((r) => writeStream.on('finish', r))
  },
});
