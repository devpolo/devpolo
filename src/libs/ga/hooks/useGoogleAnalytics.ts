import { useEffect } from "react"

import { useRouter } from "next/router"

import { pageView } from ".."

export const useGoogleAnalytics = () => {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (process.env.ENVIRONMENT == "prod") pageView(url)
    }

    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on("routeChangeComplete", handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange)
    }
  }, [router.events])
}
