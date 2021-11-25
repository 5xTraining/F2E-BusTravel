import styles from "styles/Share/FlashMessage.module.scss"
import cx from "classnames"
import { faCheck, faTrashAlt } from "lib/fontawesome/icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useReducer, useEffect, createContext, useContext } from "react"

const FlashCtx = createContext()

function FlashProvider({ children, ...props }) {
  const [flashMsg, setFlashMsg] = useFlashMsg()
  return (
    <FlashCtx.Provider value={[flashMsg, setFlashMsg]} {...props}>
      {flashMsg.isAcitve ? <FlashMsg /> : null}
      {children}
    </FlashCtx.Provider>
  )
}

function useFlashMsgCtx() {
  return useContext(FlashCtx)
}

/* ==========
flash message 格式：
payload - { msg: 'your flash message', timeout: 5000 (optional) }

setFlashMsg({type: "SUCCESS", payload })
setFlashMsg({type: "ERROR", payload })
// ========== */

function flashMsgReducer(state, action) {
  switch (action.type) {
    case "SUCCESS":
      return { ...state, type: "success", isAcitve: true, ...action.payload }
    case "DELETE":
      return { ...state, type: "delete", isAcitve: true, ...action.payload }
    case "DISMISS":
      return { ...state, type: "", msg: "", isAcitve: false }
    default:
      throw new Error(`There is no ${action.type} in FlashMsgReducer`)
  }
}

function useFlashMsg(
  initialState = {
    type: "success",
    msg: "已收藏站牌",
    timeout: 1000,
    isAcitve: false,
  }
) {
  const [state, dispatch] = useReducer(flashMsgReducer, initialState)

  useEffect(() => {
    const { timeout, isAcitve } = state
    if (!isAcitve) return

    let timeId = setTimeout(() => {
      dispatch({ type: "DISMISS" })
    }, timeout)

    return () => {
      clearTimeout(timeId)
    }
  }, [state])

  return [state, dispatch]
}

function FlashMsg() {
  const [{ type, msg }] = useContext(FlashCtx)
  const icon = type === "success" ? faCheck : faTrashAlt

  return (
    <div className={cx(styles.messgageContainer, styles[type])}>
      <FontAwesomeIcon icon={icon} className={styles.icon} />
      <span className="text-gray-200 text-xl">{msg}</span>
    </div>
  )
}

export { FlashProvider, useFlashMsgCtx }
