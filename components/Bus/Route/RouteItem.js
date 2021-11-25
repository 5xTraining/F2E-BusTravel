import { StopStatus } from "."

const RouteItem = ({ stopName, stopStatus, estimateTime, ...props }) => {
  return (
    <div
      className="flex flex-1 items-center whitespace-nowrap overflow-hidden"
      {...props}
    >
      <StopStatus estimateTime={estimateTime} stopStatus={stopStatus} />
      <p className="text-white text-xl truncate">{stopName}</p>
    </div>
  )
}

export { RouteItem }
