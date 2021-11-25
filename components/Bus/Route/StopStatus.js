import styles from "styles/Bus/Route/StopStatus.module.scss"

const StopStatus = ({ estimateTime, stopStatus }) => {
  if (["今日未營運", "尚未發車", "末班車已過"].includes(stopStatus)) {
    return (
      <div>
        <span className={styles.out}>未發車</span>
      </div>
    )
  }

  const status = {
    style: styles.default,
    text: `${estimateTime} 分`,
  }

  if (estimateTime < 1) {
    status.style = styles.coming
    status.text = "進站中"
  } else if (estimateTime < 6) {
    status.style = styles.closing
    status.text = `${estimateTime} 分`
  }

  return (
    <div>
      <span className={status.style}>{status.text}</span>
    </div>
  )
}

export { StopStatus }
