import { Station } from "components/Station/Nearby"
import styles from "styles/Station/Search/Lists.module.scss"
import { useLocalStorage } from "lib/hooks"
import { COLLECTION } from "lib/config/storage"

const SearchLists = ({ stations }) => {
  const { state: stationCollection, setState: setStationCollection } =
    useLocalStorage([], COLLECTION.STATION_COLLECTION)

  return (
    <div className={styles.wrap}>
      {stations &&
        stations.map((station) => {
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
  )
}

export { SearchLists }
