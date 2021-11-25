import { CollectionHeader, Collection } from "components/Station/Collection"
import { Alert, Img } from "components/Share/Alert"
import { useLocalStorage } from "lib/hooks"
import { COLLECTION } from "lib/config/storage"

const Page = () => {
  const { state: stationCollection, setState: setStationCollection } =
    useLocalStorage([], COLLECTION.STATION_COLLECTION)

  if (stationCollection.length < 1)
    return (
      <Alert>
        <CollectionHeader />
        <Img image="book-mark" width="88" height="81" />
        <p>目前尚無收藏站牌</p>
      </Alert>
    )

  return (
    <>
      <main>
        <CollectionHeader />
        <Collection
          stationCollection={stationCollection}
          setStationCollection={setStationCollection}
        />
      </main>
    </>
  )
}

export default Page
