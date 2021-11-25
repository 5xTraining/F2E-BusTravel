import { RouteLists, RouteHeader, Direction } from "components/Bus/Route"
import { Timer } from "components/Share"
import { useGetLocation } from "lib/hooks"
import { useRouter } from "next/router"
import { useState } from "react"
import useSWR from "swr"

const Page = () => {
  const { location } = useGetLocation()
  const { query } = useRouter()
  const uid = query.uid
  const [direction, setDirection] = useState(0)

  const atChecked = (e) => {
    if (e.target.id === "origin") {
      setDirection(1)
    }
    if (e.target.id === "destination") {
      setDirection(0)
    }
  }

  const { data: routes } = useSWR(
    uid
      ? [`/bus_routes/${uid}/arrival?direction=${direction}`, location]
      : null,
    {
      refreshInterval: 10000,
    }
  )

  const { data: info } = useSWR(uid ? [`/bus_routes/${uid}`] : null)

  if (!info) {
    return <div></div>
  }

  const { DepartureStopName, DestinationStopName, RouteName } = info

  return (
    <>
      <main>
        <RouteHeader
          routeName={RouteName}
          departureStopName={DepartureStopName}
          destinationStopName={DestinationStopName}
        />
        <Direction
          origin={DepartureStopName}
          destination={DestinationStopName}
          atChecked={atChecked}
        />
        {routes ? <RouteLists stops={routes.Stops} /> : <div></div>}
      </main>
      <Timer />
    </>
  )
}

export default Page
