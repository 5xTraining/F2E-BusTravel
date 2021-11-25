import styles from "styles/Share/Navigation.module.scss"
import { Logo } from "./Logo"
import { NavLink } from "./NavLink"
import {
  faHome,
  faBookmark,
  faMapMarkerAlt,
  faMap,
} from "lib/fontawesome/icons"

const links = [
  { href: "/", text: "首頁", icon: faHome },
  { href: "/stations/nearby", text: "附近站牌", icon: faMapMarkerAlt },
  { href: "/stations/collection", text: "收藏站牌", icon: faBookmark },
]

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.wrap}>
        <Logo />
        <ul>
          {links.map(({ href, text, icon }) => (
            <li key={text}>
              <NavLink href={href} text={text} icon={icon} />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export { Navigation }
