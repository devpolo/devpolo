import { NextPage } from "next"

import Head from "next/head"
import { FULL_NAME } from "~/constants/text"

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
  const pageTitle = title ? `${FULL_NAME} | ${title}` : FULL_NAME
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
