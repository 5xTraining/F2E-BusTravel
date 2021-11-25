import styles from "styles/Share/Modal.module.scss"
import Link from "next/link"
import { useState, useContext, createContext, cloneElement } from "react"

const ModalCtx = createContext()

function callAll(...callbacks) {
  return (...args) =>
    callbacks.forEach(
      (clickEvent) => typeof clickEvent === "function" && clickEvent(...args)
    )
}

function Modal(props) {
  const [isOpen, setIsOpen] = useState(false)
  return <ModalCtx.Provider value={[isOpen, setIsOpen]} {...props} />
}

function ModalDismissBtn({ children: child }) {
  const [_, setIsOpen] = useContext(ModalCtx)
  return cloneElement(child, {
    onClick: callAll(() => setIsOpen(false), child.props.onClick),
  })
}

function ModalOpenBtn({ children: child }) {
  const [_, setIsOpen] = useContext(ModalCtx)
  return cloneElement(child, {
    onClick: callAll(() => {
      setIsOpen(true)
    }, child.props.onClick),
  })
}

function ModalContentBase(props) {
  const [isOpen, setIsOpen] = useContext(ModalCtx)
  return isOpen ? (
    <div
      className="fixed z-100 top-0 bottom-0 left-0 right-0 m-auto bg-opacity-50 bg-black"
      onClick={(e) => {
        if (e.currentTarget === e.target) {
          setIsOpen(false)
        }
      }}
      {...props}
    />
  ) : null
}

function ModalListContent({
  title = "",
  data = null,
  renderLinks = ({ href, text }) => (
    <Link href={href}>
      <a>
        <li className="py-6 px-4">{text}</li>
      </a>
    </Link>
  ),
  children,
}) {
  return (
    <ModalContentBase>
      <div className={styles.modalInfo}>
        <h3 className="py-2 px-4 text-[28px] text-gray-100">{title}</h3>
        <div className="border-t border-gray-500">
          <ul>{data ? data.map(renderLinks) : children}</ul>
        </div>
      </div>
    </ModalContentBase>
  )
}

export { Modal, ModalDismissBtn, ModalOpenBtn, ModalListContent }
