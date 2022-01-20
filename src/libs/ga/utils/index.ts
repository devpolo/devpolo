// @ts-nocheck

// log the pageview with their URL
export const pageView = (url: string) => {
  window.gtag("config", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
    page_path: url,
  })
}

// log specific events happening.

export const event = ({ action, params }) => {
  window.gtag("event", action, params)
}
