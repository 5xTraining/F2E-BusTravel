import { useEffect, useState, useRef } from "react"
import styles from "styles/Share/Timer.module.scss"

const Timer = () => {
  const [second, setSecond] = useState(10)
  const [percent, setPercent] = useState(0)
  const progress = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setSecond((prev) => {
        if (prev > 0) {
          setPercent(((10 - (second - 1)) / 10) * 100)
          return prev - 1
        }
        setSecond(10)
        setPercent(0)
      })
    }, 1000)
    progress.current.style.width = `${percent}%`
    return () => {
      clearTimeout(timer)
    }
  }, [second])

  return (
    <div className={styles.wrap}>
      <p className={styles.text}>
        更新時間
        <span className="w-[20px] text-center inline-block">{second}</span>秒
      </p>
      <div ref={progress} className={styles.progress}></div>
    </div>
  )
}

export { Timer }
