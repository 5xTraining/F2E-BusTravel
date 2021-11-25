import styles from "styles/Bus/Route/PositionLine.module.scss"

const PositionLine = () => {
  return (
    <div className={styles.wrap}>
      <span className={styles.line}></span>
      <span className={styles.target}></span>
      <span className={styles.plateNumb}>KRI-1000</span>
    </div>
  )
}

export { PositionLine }
