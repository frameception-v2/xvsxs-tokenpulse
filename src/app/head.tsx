import { PROJECT_TITLE, PROJECT_DESCRIPTION } from "~/lib/constants";

export default function Head() {
  return (
    <>
      <title>{PROJECT_TITLE}</title>
      <meta name="description" content={PROJECT_DESCRIPTION} />
      <meta property="og:title" content={PROJECT_TITLE} />
      <meta property="og:description" content={PROJECT_DESCRIPTION} />
      <meta property="og:image" content="/opengraph-image.png" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@farcaster" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
