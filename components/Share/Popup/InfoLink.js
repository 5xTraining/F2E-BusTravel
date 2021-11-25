import Link from "next/link"
import styles from "styles/Share/Popup/PopInfo.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "lib/fontawesome/icons"

const InfoLink = ({ href, icon, text, showArrow = false }) => {
  return (
    <Link href={href}>
      <a className={styles.linkWrap}>
        <span className="text-gray-200">
          <FontAwesomeIcon icon={icon} className="mr-3" />
          {text}
        </span>
        {showArrow && (
          <FontAwesomeIcon icon={faChevronRight} className="text-gray-400" />
        )}
      </a>
    </Link>
  )
}

export { InfoLink }
