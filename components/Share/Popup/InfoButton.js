import styles from "styles/Share/Popup/PopInfo.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const InfoButton = ({ atClick, icon, text }) => {
  return (
    <button className={styles.linkWrap} onClick={atClick}>
      <span className="text-gray-200">
        <FontAwesomeIcon icon={icon} className="mr-3" />
        {text}
      </span>
    </button>
  )
}

export { InfoButton }
