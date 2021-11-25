import { PreviousPathBtn } from "components/Share"
import styles from "styles/Station/Collection/CollectionHeader.module.scss"

const CollectionHeader = () => {
  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.content}>
          <PreviousPathBtn />
          <h2 className={styles.title}>收藏站牌</h2>
        </div>
      </div>
    </>
  )
}

export { CollectionHeader }
