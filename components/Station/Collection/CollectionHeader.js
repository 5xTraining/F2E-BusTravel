import { PreviousPathBtn } from "components/Share"
import styles from "styles/Station/Collection/CollectionHeader.module.scss"

const CollectionHeader = () => {
  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.content}>
          <PreviousPathBtn />
          <h2 className={styles.title}>ζΆθη«η</h2>
        </div>
      </div>
    </>
  )
}

export { CollectionHeader }
