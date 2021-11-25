import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEllipsisV } from "lib/fontawesome/icons"
import styles from "styles/Share/Popup/PopInfo.module.scss"

const MoreList = (props) => {
  return (
    <button className={styles.moreList} {...props}>
      <FontAwesomeIcon icon={faEllipsisV} />
    </button>
  )
}

export { MoreList }
