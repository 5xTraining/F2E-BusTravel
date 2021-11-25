import useSWR from "swr"
import { SearchBar, SearchPage } from "components/Station/Search"
import { Station } from "components/Station/Nearby"
import { Alert, Img } from "components/Share/Alert"
import {
  useGetLocation,
  useLocalStorage,
  useChangeSearchState,
} from "lib/hooks"
import { COLLECTION } from "lib/config/storage"

const Page = () => {
  const { status, location } = useGetLocation()
  const { isFocus, handleFocus, handleBlur } = useChangeSearchState(false)
  const isGeoLocationTurnOn = status === "successed"
  const { state: stationCollection, setState: setStationCollection } =
    useLocalStorage([], COLLECTION.STATION_COLLECTION)

  const { data } = useSWR(
    isGeoLocationTurnOn ? ["/bus_stations/nearby", location] : null
  )

  if (isFocus) {
    return <SearchPage handleFocus={handleFocus} handleBlur={handleBlur} />
  }

  if (!isGeoLocationTurnOn) {
    return (
      <Alert>
        <SearchBar
          placeholder="搜尋站牌"
          handleFocus={handleFocus}
          handleBlur={handleBlur}
        />
        <Img />
        <p>
          請開啟定位
          <br />
          即可顯示附近站牌
        </p>
      </Alert>
    )
  }

  return (
    <main>
      <SearchBar
        placeholder="搜尋站牌"
        handleFocus={handleFocus}
        handleBlur={handleBlur}
      />
      <div className="px-4 lg:px-24 mt-3 lg:mt-20">
        <h2 className="text-gray-500 text-sm">附近站牌</h2>
        <div>
          {data &&
            data.stations.map((station) => {
              const {
                StationUID: uid,
                StationName: stationName,
                Routes: routes,
              } = station
              return (
                <Station
                  key={uid}
                  uid={uid}
                  stationName={stationName}
                  routes={routes}
                  stationCollection={stationCollection}
                  setStationCollection={setStationCollection}
                />
              )
            })}
        </div>
      </div>
    </main>
  )
}

export default Page
