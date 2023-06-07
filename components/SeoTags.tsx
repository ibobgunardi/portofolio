import Head from "next/head";

const tags = {
  title: "Bobi Gunardi",
  description:
    "Backend Developer | Passionate Learner | Typescript | React | Laravel | Lumen | PHP | python | Node. Working as a professional Backend developer",
  url: "https://www.linkedin.com/in/bobi-gunardi-5bb265107/",
};

const SeoTags = () => {
  return (
    <Head>
      <title>{tags.title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />

      {/*General*/}
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content={tags.description} />
      <meta name="author" content="Bobi Gunardi" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary" key="twcard" />
      <meta name="twitter:creator" content="Bobi Gunardi" key="twhandle" />

      {/* Open Graph */}
      <meta property="og:url" content={tags.url} key="ogurl" />
      <meta property="og:image" content="/cover.png" key="ogimage" />
      <meta property="og:site_name" content={tags.title} key="ogsitename" />
      <meta property="og:title" content={tags.title} key="ogtitle" />
      <meta property="og:description" content={tags.description} key="ogdesc" />
    </Head>
  );
};

export default SeoTags;
