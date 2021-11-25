import { Collection } from "components/Bus/Collection"
import { SearchBar, SearchPage } from "components/Bus/Search"
import { LandingPage, Header } from "components/LandingPage"
import { Footer, SubNavigation } from "components/Share"
import { useLocalStorage, useChangeSearchState } from "lib/hooks"
import { COLLECTION } from "lib/config/storage"

function LoadingLayout() {
  return (
    <>
      <Header />
      <main></main>
      <Footer />
    </>
  )
}

const Page = () => {
  const {
    state: busCollection,
    setState: setBusCollection,
    isLoading,
  } = useLocalStorage([], COLLECTION.BUS_COLLECTION)

  const { isFocus, handleFocus, handleBlur } = useChangeSearchState(false)

  if (isLoading) return <LoadingLayout />

  if (isFocus) {
    return (
      <SearchPage
        handleFocus={handleFocus}
        handleBlur={handleBlur}
        busCollection={busCollection}
        setBusCollection={setBusCollection}
      />
    )
  }

  return (
    <>
      {busCollection.length < 1 ? (
        <LandingPage
          handleFocus={handleFocus}
          handleBlur={handleBlur}
          isFocus={isFocus}
        />
      ) : (
        <>
          <Header />
          <main>
            <div className="hidden lg:block">
              <SearchBar
                placeholder="想要搭哪班公車？"
                handleFocus={handleFocus}
                handleBlur={handleBlur}
              />
            </div>
            <Collection
              busCollection={busCollection}
              setBusCollection={setBusCollection}
            />
          </main>
          <SubNavigation handleClick={handleFocus} />
          <Footer />
        </>
      )}
    </>
  )
}

export default Page
