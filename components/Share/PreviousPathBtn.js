import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "lib/fontawesome/icons"
import { useRouter } from "next/router"

const PreviousPathBtn = () => {
  const router = useRouter()

  return (
    <a onClick={() => router.back()}>
      <FontAwesomeIcon
        icon={faArrowLeft}
        size="lg"
        className="mr-2 inline-block"
      />
    </a>
  )
}

export { PreviousPathBtn }
