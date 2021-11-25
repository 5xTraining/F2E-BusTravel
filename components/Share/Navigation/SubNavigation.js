import Link from "next/link"
import styles from "styles/Share/SubNavigation.module.scss"
import cx from "classnames"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch, faMapMarkerAlt } from "lib/fontawesome/icons"

const SubNavigation = ({ landingPage = false, handleClick }) => {
  const linkDisplay = landingPage ? styles.landingLink : styles.collectionLink
  const wrapDisplay = landingPage ? styles.landingWrap : styles.collectionWrap

  return (
    <div className={cx(styles.wrap, wrapDisplay)}>
      <div className={cx(styles.search, linkDisplay)} onClick={handleClick}>
        <FontAwesomeIcon icon={faSearch} className="mr-2" />
        <p>路線搜尋</p>
      </div>
      <Link href={"/stations/nearby"}>
        <a className={cx(styles.nearby, linkDisplay)}>
          <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
          <p>附近站牌</p>
        </a>
      </Link>
    </div>
  )
}

export { SubNavigation }
