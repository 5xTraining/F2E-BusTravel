import "styles/globals.scss"
import { Navigation, Footer } from "components/Share"
import { useRouter } from "next/router"
import { LocationProvider, FlashProvider, useMinHeight } from "lib/hooks"
import { SWRConfig } from "swr"
import APIClient from "lib/api/api_client"
import Head from "next/head"

function MyApp({ Component, pageProps }) {
  const { route } = useRouter()
  const isLandingPage = route === "/"
  useMinHeight()

  return (
    <>
      <Head>
        <title>五倍公車旅程</title>
      </Head>
      <SWRConfig
        value={{
          fetcher: (url, location) => {
            const client = new APIClient(location)
            return client.fetch(url).then((res) => res.data)
          },
        }}
      >
        <FlashProvider>
          <LocationProvider>
            <Navigation />
            <Component {...pageProps} />
            {!isLandingPage && <Footer />}
          </LocationProvider>
        </FlashProvider>
      </SWRConfig>
    </>
  )
}

export default MyApp
