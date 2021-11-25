import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { fasBookmark, faBookmark } from "lib/fontawesome/icons"
import styles from "styles/Share/BookMarkIcon.module.scss"

const IconType = {
  hollow: { icon: faBookmark, style: styles.roseIcon },
  gray: { icon: fasBookmark, style: styles.grayIcon },
}

const BookMarkIcon = ({
  type = "hollow",
  atClick = () => {},
  isCollection,
}) => {
  const { icon, style } = isCollection
    ? { icon: fasBookmark, style: styles.roseIcon }
    : IconType[type]

  return (
    <button className={styles.collection} onClick={atClick}>
      <FontAwesomeIcon icon={icon} className={style} />
    </button>
  )
}

export { BookMarkIcon }
