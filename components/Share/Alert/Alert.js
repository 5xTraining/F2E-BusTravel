import styles from "styles/Share/Alert.module.scss"

const Alert = ({ children, inner = false }) => {
  if (inner) return <div className={styles.innerWrap}>{children}</div>

  return <main className={styles.wrap}>{children}</main>
}

export { Alert }
