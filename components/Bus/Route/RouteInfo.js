import Link from "next/link"
import styles from "styles/Bus/Route/RoutePath.module.scss"

const RouteInfo = ({ routeName, location, uid }) => {
  return (
    <Link href={`/bus/${uid}`}>
      <a className={styles.info}>
        <p className={styles.routePath}>{routeName}</p>
        <p className={styles.location}>{location}</p>
      </a>
    </Link>
  )
}

export { RouteInfo }
