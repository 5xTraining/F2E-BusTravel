import { RouteInfo } from "."
import { BookMarkIcon } from "components/Share"
import styles from "styles/Bus/Route/RoutePath.module.scss"
import { useFlashMsgCtx } from "lib/hooks"

const RoutePath = ({
  routeName,
  type,
  uid,
  busCollection,
  setBusCollection,
  departureStopName,
  destinationStopName,
}) => {
  const checkIsCollection = busCollection.some((el) => el.uid === uid)
  const [_, setFlashMsg] = useFlashMsgCtx()

  const handleCollection = () => {
    if (!checkIsCollection) {
      setBusCollection(() => [
        ...busCollection,
        {
          routeName,
          uid,
          departureStopName,
          destinationStopName,
        },
      ])
      setFlashMsg({ type: "SUCCESS", payload: { msg: "已收藏路線" } })
    }

    if (checkIsCollection) {
      const filterCollection = busCollection.filter((el) => el.uid != uid)
      setBusCollection(() => filterCollection)
      setFlashMsg({ type: "DELETE", payload: { msg: "已取消收藏路線" } })
    }
  }

  return (
    <div className={styles.wrap}>
      <RouteInfo
        routeName={routeName}
        location={`${departureStopName} - ${destinationStopName}`}
        uid={uid}
      />
      <BookMarkIcon
        type={type}
        atClick={handleCollection}
        isCollection={checkIsCollection}
      />
    </div>
  )
}

export { RoutePath }
