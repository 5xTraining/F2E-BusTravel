import styles from "styles/LandingPage/Header.module.scss"
import {
  Modal,
  ModalOpenBtn,
  ModalListContent,
  MoreList,
  InfoLink,
} from "components/Share"
import { faInfoCircle } from "lib/fontawesome/icons"

const Header = () => {
  return (
    <>
      <div className={styles.wrap}>
        <p>首頁</p>
        <Modal>
          <ModalOpenBtn>
            <MoreList />
          </ModalOpenBtn>
          <ModalListContent title="更多資訊">
            <InfoLink
              href="/about"
              text="關於我們"
              icon={faInfoCircle}
              showArrow
            />
          </ModalListContent>
        </Modal>
      </div>
    </>
  )
}

export { Header }
