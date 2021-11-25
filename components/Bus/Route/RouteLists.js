import { RouteItem } from "./"

const RouteLists = ({ stops = [] }) => {
  return (
    <>
      <div className="px-4 mt-14 lg:px-24 lg:mt-32 mb-4 lg:mb-0">
        {stops.map(
          ({
            StopName: stationName,
            EstimateMinutes: estimateTime,
            StopStatus: stopStatus,
          }) => {
            return (
              <RouteItem
                key={stationName}
                stopName={stationName}
                estimateTime={estimateTime}
                stopStatus={stopStatus}
              />
            )
          }
        )}
      </div>
    </>
  )
}

export { RouteLists }
