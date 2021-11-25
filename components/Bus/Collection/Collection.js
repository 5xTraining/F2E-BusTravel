import { RoutePath } from "components/Bus/Route"
import styles from "styles/Bus/Collection/Collection.module.scss"

const Collection = ({ busCollection, setBusCollection }) => {
  return (
    <div className={styles.wrap}>
      <h2 className={styles.title}>收藏路線</h2>
      {busCollection.map(
        ({ routeName, uid, departureStopName, destinationStopName }) => {
          return (
            <RoutePath
              busCollection={busCollection}
              setBusCollection={setBusCollection}
              destinationStopName={destinationStopName}
              departureStopName={departureStopName}
              uid={uid}
              key={uid}
              routeName={routeName}
            />
          )
        }
      )}
    </div>
  )
}

export { Collection }
