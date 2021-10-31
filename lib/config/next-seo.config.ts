import { DefaultSeoProps } from "next-seo";

import { HeadSeoProps } from "@components/seo/head-seo";

const seoImages = {
  default: "https://res.cloudinary.com/g-draf-inc/image/upload/v1590265880/logo_mduxbk.png",
  ogImage: "https://og-image-one-pi.vercel.app/",
};

export const getSeoImage = (key: keyof typeof seoImages): string => {
  return seoImages[key];
};

export const seoConfig: {
  headSeo: Required<Pick<HeadSeoProps, "siteName">>;
  defaultNextSeo: DefaultSeoProps;
} = {
  headSeo: {
    siteName: "winning-cv",
  },
  defaultNextSeo: {
    twitter: {
      handle: "@gidraforenja",
      site: "@gidraforenja",
      cardType: "summary_large_image",
    },
  },
} as const;
