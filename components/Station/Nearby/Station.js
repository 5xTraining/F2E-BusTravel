import { BookMarkIcon } from "components/Share"
import { Route } from "."
import { useFlashMsgCtx } from "lib/hooks"
import styles from "styles/Station/Nearby/Station.module.scss"

const Station = ({
  uid,
  stationName,
  routes = [],
  stationCollection,
  setStationCollection,
}) => {
  const checkIsCollection = stationCollection.some((el) => el.uid === uid)
  const [_, setFlashMsg] = useFlashMsgCtx()

  const handleCollection = () => {
    if (!checkIsCollection) {
      setStationCollection(() => [
        ...stationCollection,
        {
          uid,
          stationName,
          routes,
        },
      ])
      setFlashMsg({ type: "SUCCESS", payload: { msg: "已收藏站牌" } })
    }

    if (checkIsCollection) {
      const filterCollection = stationCollection.filter((el) => el.uid != uid)
      setStationCollection(() => filterCollection)
      setFlashMsg({ type: "DELETE", payload: { msg: "已取消收藏站牌" } })
    }
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.bookMark}>
        <BookMarkIcon
          atClick={handleCollection}
          isCollection={checkIsCollection}
        />
      </div>
      <div className={styles.contentWrap}>
        <p className={styles.stationName}>{stationName}</p>
        <div className="mt-3">
          <span className={styles.routes}>經過路線：</span>
          {routes.map((route) => (
            <Route route={route} key={route} />
          ))}
        </div>
      </div>
    </div>
  )
}

export { Station }
