import styles from "styles/LandingPage/LandingPage.module.scss"
import { Footer, SubNavigation } from "components/Share"
import { SearchPage } from "components/Bus/Search"
import { Header } from "."

const LandingPage = ({ isFocus, handleFocus, handleBlur }) => {
  if (isFocus) {
    return <SearchPage handleFocus={handleFocus} handleBlur={handleBlur} />
  }

  return (
    <>
      <Header />
      <div className={styles.bg}>
        <div className={styles.wrap}>
          <h1 className={styles.title}>五倍公車旅程</h1>
          <SubNavigation landingPage handleClick={handleFocus} />
          <div className="w-full absolute bottom-0">
            <Footer landingPage />
          </div>
        </div>
      </div>
    </>
  )
}

export { LandingPage }
