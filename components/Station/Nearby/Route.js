import styles from "styles/Station/Nearby/Route.module.scss"

const Route = ({ route }) => {
  return <span className={styles.route}>{route}</span>
}

export { Route }
