import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "lib/fontawesome/icons"
import styles from "styles/Bus/Search/SearchBar.module.scss"

const SearchForm = ({ placeholder, atChange, onFocus, autoFocus = false }) => {
  return (
    <div className={styles.searchForm}>
      <div className={styles.wrap}>
        <input
          type="text"
          placeholder={placeholder}
          className={styles.searchInput}
          onChange={atChange}
          onFocus={onFocus}
          autoFocus={autoFocus}
        />
        <span className={styles.searchIcon}>
          <FontAwesomeIcon icon={faSearch} />
        </span>
      </div>
    </div>
  )
}

export { SearchForm }
