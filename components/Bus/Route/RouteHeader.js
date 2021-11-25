import { faBus, faPlusCircle, faInfoCircle } from "lib/fontawesome/icons"
import {
  BookMarkIcon,
  Modal,
  ModalOpenBtn,
  ModalListContent,
  MoreList,
  InfoLink,
  PreviousPathBtn,
  InfoButton,
} from "components/Share"
import { useLocalStorage, useFlashMsgCtx } from "lib/hooks"
import { useRouter } from "next/router"
import styles from "styles/Bus/Route/RouterHeader.module.scss"
import { COLLECTION } from "lib/config/storage"

const RouteHeader = ({ routeName, departureStopName, destinationStopName }) => {
  const { query } = useRouter()
  const uid = query.uid

  const { state: busCollection, setState: setBusCollection } = useLocalStorage(
    [],
    COLLECTION.BUS_COLLECTION
  )

  const checkIsCollection = busCollection.some((el) => el.uid === uid)
  const [_, setFlashMsg] = useFlashMsgCtx()

  const handleCollection = () => {
    if (!checkIsCollection) {
      setBusCollection(() => [
        ...busCollection,
        {
          routeName,
          uid,
          departureStopName,
          destinationStopName,
        },
      ])
      setFlashMsg({ type: "SUCCESS", payload: { msg: "已收藏路線" } })
    }

    if (checkIsCollection) {
      const filterCollection = busCollection.filter((el) => el.uid != uid)
      setBusCollection(() => filterCollection)
      setFlashMsg({ type: "DELETE", payload: { msg: "已取消收藏路線" } })
    }
  }

  return (
    <div className={styles.wrap}>
      <div className="text-white flex items-center">
        <PreviousPathBtn />
        <h2 className="text-[29px] font-bold">{routeName}</h2>
      </div>
      <div className="relative">
        <BookMarkIcon
          type="gray"
          atClick={handleCollection}
          isCollection={checkIsCollection}
        />
        <Modal>
          <ModalOpenBtn>
            <MoreList />
          </ModalOpenBtn>
          <ModalListContent title={routeName}>
            <InfoButton
              atClick={handleCollection}
              icon={faPlusCircle}
              text="收藏公車路線"
            />
            <InfoLink
              href={`/bus/${uid}/information`}
              icon={faInfoCircle}
              text="發車時刻表"
            />
          </ModalListContent>
        </Modal>
      </div>
    </div>
  )
}

export { RouteHeader }
