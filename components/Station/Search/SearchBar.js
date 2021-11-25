import { SearchForm } from "."
import {
  Modal,
  ModalOpenBtn,
  ModalListContent,
  MoreList,
  InfoLink,
} from "components/Share"
import styles from "styles/Station/Search/SearchBar.module.scss"
import { faInfoCircle, faArrowLeft } from "lib/fontawesome/icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const SearchBar = ({
  placeholder = "",
  atChange,
  handleBlur,
  handleFocus,
  autoFocus,
  isSearchPage = false,
}) => {
  return (
    <div className={styles.searchBar}>
      {isSearchPage && (
        <div
          className="flex items-center mr-2 text-white cursor-pointer"
          onClick={handleBlur}
        >
          <FontAwesomeIcon
            icon={faArrowLeft}
            size="lg"
            className="mr-2 inline-block"
          />
        </div>
      )}
      <SearchForm
        placeholder={placeholder}
        atChange={atChange}
        onFocus={handleFocus}
        autoFocus={autoFocus}
      />
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
  )
}

export { SearchBar }
