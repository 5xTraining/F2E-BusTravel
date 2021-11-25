import { SearchBar, SearchLists } from "components/Bus/Search"
import useSWR from "swr"
import { useState } from "react"
import { Alert, Img } from "components/Share/Alert"
import { Footer } from "components/Share"

const SearchPage = ({
  handleFocus,
  handleBlur,
  setBusCollection,
  busCollection,
}) => {
  const [keyword, setKeyword] = useState("")

  const { data: bus } = useSWR(
    keyword != "" ? [`/bus_routes/search?keyword=${keyword}`] : null
  )

  const atChange = (e) => {
    setKeyword(() => e.target.value)
  }

  return (
    <>
      <main>
        <SearchBar
          placeholder="想要搭哪班公車？"
          atChange={atChange}
          handleBlur={handleBlur}
          autoFocus={true}
          handleFocus={handleFocus}
          isSearchPage={true}
        />
        {bus ? (
          bus.routes.length < 1 ? (
            <Alert inner>
              <Img />
              <p>沒有符合的結果</p>
            </Alert>
          ) : (
            <SearchLists
              routes={bus.routes}
              busCollection={busCollection}
              setBusCollection={setBusCollection}
            />
          )
        ) : (
          <Alert inner>
            <Img />
            <p>想要搭哪班公車？</p>
          </Alert>
        )}
      </main>
      <Footer />
    </>
  )
}

export { SearchPage }
