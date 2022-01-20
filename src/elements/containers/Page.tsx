import { NextPage } from "next"

import Head from "next/head"

const isProd = process.env.ENVIRONMENT === "prod"

interface IPageProps {
  title?: string
  noindex?: boolean
  nofollow?: boolean
}

const Page: NextPage<IPageProps> = ({
  children,
  title,
  noindex = false,
  nofollow = false,
}) => {
  const pageTitle = title ? `Paul Crussaire | ${title}` : "Paul Crussaire"
  const index = noindex ? "noindex" : "index"
  const follow = nofollow ? "nofollow" : "follow"
  const content = isProd ? `${index}, ${follow}` : "noindex, nofollow"

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name='robots' content={content} />
      </Head>
      {children}
    </>
  )
}

export default Page
