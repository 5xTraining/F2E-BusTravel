import { Station } from "components/Station/Nearby"
import styles from "styles/Station/Collection/Collection.module.scss"

const Collection = ({ stationCollection, setStationCollection }) => {
  return (
    <div className={styles.wrap}>
      <h2 className={styles.title}>收藏路線</h2>
      {stationCollection.map(({ stationName, uid, routes }) => {
        return (
          <Station
            stationName={stationName}
            uid={uid}
            routes={routes}
            key={uid}
            stationCollection={stationCollection}
            setStationCollection={setStationCollection}
          />
        )
      })}
    </div>
  )
}

export { Collection }
