import Link from "next/link"
import styles from "styles/Share/Footer.module.scss"
import cx from "classnames"

const Footer = ({ landingPage = false }) => {
  const bgColor = landingPage ? "bg-transparent" : "bg-desktop-black"
  const borderStyle = landingPage ? "" : "border-l border-r"

  return (
    <div className={cx(styles.wrap, bgColor, borderStyle)}>
      <p>© 2021 5xRuby Training Group CO., LTD</p>
      <Link href="/about">
        <a>聯絡我們</a>
      </Link>
    </div>
  )
}

export { Footer }
