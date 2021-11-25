import Link from "next/link"
import { useRouter } from "next/router"
import styles from "styles/Share/Navigation.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const NavLink = ({ icon = "", text = "", href = "" }) => {
  const router = useRouter()
  const active = router.asPath === href ? "text-white" : ""

  return (
    <Link href={href}>
      <a className={active}>
        <span className={styles.linkIcon}>
          <FontAwesomeIcon icon={icon} size="lg" />
        </span>
        <span className={styles.linkText}>{text}</span>
      </a>
    </Link>
  )
}

export { NavLink }
