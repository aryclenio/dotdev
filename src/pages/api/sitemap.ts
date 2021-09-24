const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");

export default async (req, res) => {
  // An array with your links
  const links = [
    {
      url: "/",
      changefreq: "monthly",
      priority: 0.3,
    },
    {
      url: "/posts",
      changefreq: "monthly",
      priority: 0.3,
    },
    {
      url: "/posts/the-new-features-of-javascript-in-2020-es11",
      changefreq: "monthly",
      priority: 0.3,
    },
    {
      url: "/posts/how-to-use-the-react-context-api",
      changefreq: "monthly",
      priority: 0.3,
    },
    {
      url: "/posts/internationalizing-your-react-app-with-i18next",
      changefreq: "monthly",
      priority: 0.3,
    },
    ,
    {
      url: "/posts/how-to-create-a-readme.md-profile-on-github",
      changefreq: "monthly",
      priority: 0.3,
    },
  ];

  // Create a stream to write to
  const stream = new SitemapStream({ hostname: `https://${req.headers.host}` });

  res.writeHead(200, {
    "Content-Type": "application/xml",
  });

  const xmlString = await streamToPromise(
    Readable.from(links).pipe(stream)
  ).then((data) => data.toString());

  res.end(xmlString);
};
