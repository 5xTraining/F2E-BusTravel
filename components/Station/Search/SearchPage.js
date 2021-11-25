import { SearchBar, SearchLists } from "."
import useSWR from "swr"
import { useState } from "react"
import { Alert, Img } from "components/Share/Alert"

const SearchPage = ({ handleFocus, handleBlur }) => {
  const [keyword, setKeyword] = useState("")

  const { data } = useSWR(
    keyword != "" ? [`/bus_stations/search?keyword=${keyword}&limit=100`] : null
  )

  const atChange = (e) => {
    setKeyword(() => e.target.value)
  }

  return (
    <>
      <main>
        <SearchBar
          placeholder="搜尋站牌"
          atChange={atChange}
          handleBlur={handleBlur}
          autoFocus={true}
          handleFocus={handleFocus}
          isSearchPage={true}
        />
        {data ? (
          data.stations.length < 1 ? (
            <Alert inner>
              <Img />
              <p>沒有符合的結果</p>
            </Alert>
          ) : (
            <SearchLists stations={data.stations} />
          )
        ) : (
          <Alert inner>
            <Img />
            <p>請輸入公車站牌</p>
          </Alert>
        )}
      </main>
    </>
  )
}

export { SearchPage }
