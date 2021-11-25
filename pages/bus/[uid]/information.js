import { useRouter } from "next/router"
import useSWR from "swr"
import { PreviousPathBtn } from "components/Share"
import styles from "styles/Bus/Route/RouteInformation.module.scss"

const Page = () => {
  const { query } = useRouter()
  const uid = query.uid

  const { data } = useSWR(uid ? [`/bus_routes/${uid}`] : null)

  if (!data) return <div></div>

  const {
    RouteName,
    DepartureStopName,
    DestinationStopName,
    Operator,
    RouteMapImageUrl,
    TicketPriceDescription,
    FareBufferZoneDescription,
    SubRoute,
  } = data

  return (
    <>
      <main>
        <div className={styles.header}>
          <PreviousPathBtn />
          <h1 className={styles.title}>{RouteName}</h1>
        </div>
        <div className={styles.wrap}>
          <h2 className={styles.position}>
            {DepartureStopName} - {DestinationStopName}
          </h2>
          <div className={styles.infoWrap}>
            <p>{Operator}</p>
            <p>
              路線簡圖：
              <a
                href={RouteMapImageUrl}
                target="_blank"
                rel="noreferrer"
                className="text-rose-500 underline"
              >
                點擊連結
              </a>
            </p>
          </div>
          <div className={styles.infoWrap}>
            <h3>票價資訊</h3>
            <ul>
              <li>收費方式：{TicketPriceDescription}</li>
              <li>分段緩衝：{FareBufferZoneDescription || "無"}</li>
            </ul>
          </div>
          <div className={styles.infoWrap}>
            <h3>發車資訊</h3>
            {SubRoute.map((route) => {
              const {
                FirstBusTime,
                LastBusTime,
                HolidayFirstBusTime,
                HolidayLastBusTime,
                RouteName,
              } = route
              return (
                <div key={RouteName} className="my-2">
                  <h4>{RouteName}</h4>
                  <ul>
                    <li>平日首班車：{FirstBusTime}</li>
                    <li>平日末班車：{LastBusTime}</li>
                    <li>假日首班車：{HolidayFirstBusTime}</li>
                    <li>假日末班車：{HolidayLastBusTime}</li>
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </main>
    </>
  )
}

export default Page
