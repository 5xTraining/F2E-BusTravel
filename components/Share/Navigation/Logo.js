import Image from "next/image"
import Link from "next/link"
import styles from "styles/Share/Navigation.module.scss"

const Logo = () => (
  <div className={styles.logo}>
    <Link href="/">
      <a>
        <Image
          src="/assets/images/logo.png"
          alt="5xcampus"
          height="26"
          width="31"
        />
      </a>
    </Link>
  </div>
)

export { Logo }
