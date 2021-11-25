import { RoutePath } from "components/Bus/Route"
import styles from "styles/Bus/Search/Lists.module.scss"

const SearchLists = ({ routes, busCollection, setBusCollection }) => {
  return (
    <div className={styles.wrap}>
      {routes &&
        routes.map((route) => {
          const {
            DepartureStopName,
            DestinationStopName,
            RouteName,
            RouteUID,
          } = route
          return (
            <RoutePath
              key={RouteUID}
              uid={RouteUID}
              routeName={RouteName}
              busCollection={busCollection}
              setBusCollection={setBusCollection}
              departureStopName={DepartureStopName}
              destinationStopName={DestinationStopName}
            />
          )
        })}
    </div>
  )
}

export { SearchLists }
