import { NextPage } from "next"

import Head from "next/head"

import { FULL_NAME, PROJECT_DESCRIPTION } from "~/constants/text"

const isProd = process.env.ENVIRONMENT === "prod"

const url = process.env.NEXT_PUBLIC_SITE_URL
const local = "fr_FR"
const preview = "/meta/preview.jpg"
const favicon = "/meta/favicon.ico"
const favicon16 = "/meta/favicon-16x16.png"
const favicon32 = "/meta/favicon-32x32.png"
const appleTouchIcon = "/meta/apple-touch-icon.png"
const safariPinnedTab = "/meta/android-chrome-512x512.png"

interface IPageProps {
  title?: string
  description?: string
  image?: string
  noindex?: boolean
}

const Page: NextPage<IPageProps> = ({
  children,
  description = PROJECT_DESCRIPTION,
  image = preview,
  noindex = false,
  ...props
}) => {
  const title = props.title ? `${FULL_NAME} | ${props.title}` : FULL_NAME
  const isIndexed = isProd && !noindex

  return (
    <>
      <Head>
        {!isIndexed ? <meta name='robots' content='noindex, nofollow' /> : null}
        {url ? <meta property='og:url' content={url} /> : null}

        <meta property='og:title' content={title} />
        <meta property='og:locale' content={local} />
        <meta property='og:description' content={description} />
        <meta property='og:image' content={url + image} />
        <meta property='og:type' content='website' />
        <meta property='og:site_name' content={title} />

        <link rel='apple-touch-icon' sizes='180x180' href={appleTouchIcon} />
        <link rel='mask-icon' href={safariPinnedTab} color='#fff' />
        <link rel='icon' type='image/png' sizes='32x32' href={favicon32} />
        <link rel='icon' type='image/png' sizes='16x16' href={favicon16} />
        <link rel='shortcut icon' href={favicon} />
      </Head>
      {children}
    </>
  )
}

export default Page
