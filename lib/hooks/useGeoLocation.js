import { useEffect, createContext, useContext, useState } from "react"

const LocationCtx = createContext()

export function LocationProvider({ children }) {
  const location = useGeoLocation()
  return (
    <LocationCtx.Provider value={location}>{children}</LocationCtx.Provider>
  )
}

function useGeoLocation() {
  const [coordinate, setCoordinate] = useState({
    status: "idle",
    location: {},
    error: null,
  })

  useEffect(() => {
    function success(position) {
      const latitude = position.coords.latitude
      const longitude = position.coords.longitude

      setCoordinate((prev) => ({
        ...prev,
        status: "successed",
        location: { latitude, longitude },
      }))
    }

    function error() {
      setCoordinate((prev) => ({
        ...prev,
        status: "error",
        location: {},
        error: "Unable to retrieve your location",
      }))
    }

    if (!navigator.geolocation) {
      setCoordinate((prev) => ({
        ...prev,
        status: "error",
        location: {},
        error: "Geolocation is not supported by your browser",
      }))
    } else {
      setCoordinate((prev) => ({ ...prev, status: "pending" }))
      navigator.geolocation.getCurrentPosition(success, error)
    }
  }, [setCoordinate])

  return coordinate
}

export function useGetLocation() {
  const location = useContext(LocationCtx)
  if (!location) {
    throw new Error("Component must wrapped in LocationProvider")
  }
  return location
}
