import Image from "next/image"
import { PreviousPathBtn } from "components/Share"
import styles from "styles/pages/about.module.scss"

const Page = () => {
  return (
    <main className="text-white">
      <div className={styles.header}>
        <PreviousPathBtn />
      </div>
      <div className={styles.wrap}>
        <h1>關於我們</h1>
        <div className={styles.contentWrap}>
          <div>
            <h3>開發者資訊</h3>
            <ul>
              <li>UI Design: Debby</li>
              <li>Front end: Yuchan</li>
              <li>
                <a href="https://5xruby.tw/">五倍紅寶石程式教育機構</a>
              </li>
            </ul>
          </div>
          <div className="mt-[30px]">
            <h3>資料來源</h3>
            <p>
              本網站 API 資料皆來自 「
              <a href="https://ptx.transportdata.tw/PTX/">交通部PTX平台</a>」
              提供。
            </p>
            <div className={styles.imageWrap}>
              <Image
                src="/assets/images/ptx-logo.png"
                width="260"
                height="57"
                alt="ptx-logo"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Page
