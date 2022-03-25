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
  noindex = false,
  ...props
}) => {
  const title = props.title ? `${FULL_NAME} | ${props.title}` : FULL_NAME
  const isIndexed = isProd && !noindex

  return (
    <>
      <Head>
        <title>{title}</title>
        {!isIndexed ? <meta name='robots' content='noindex, nofollow' /> : null}
      </Head>
      {children}
    </>
  )
}

export default Page
