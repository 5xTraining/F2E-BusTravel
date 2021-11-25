# F2E-PK

Demo 網站：[https://bus.5xcampus.com/](https://bus.5xcampus.com/)

[THE F2E PK 活動](https://www.hexschool.com/2021/09/09/2021-09-09-the-f2e-3-2021/)

- 主題：「全台公車動態時刻查詢應用服務」網站
- 需使用： [TDX API](https://tdx.transportdata.tw/api-service/swagger) 的 API 服務

### 需求與設計文件
- [核心功能 & Functional Map](https://whimsical.com/functional-map-v1-A7Zn6BD8qp8yn3xLwnf36v) | whimsical
- [使用者流程](https://whimsical.com/EbP4gTiPh61wfqCbcBvF4v) | whimsical
- [Wireframe](https://whimsical.com/wireframe-DCfzWAWydfrL5Ghq3A4At6) | whimsical
- [Flow Chart & UI Flow](https://whimsical.com/flow-chart-ui-flow-UBNvukbCRaGJrTg8dLCx43) | whimsical
- [頁面設計稿](https://www.figma.com/file/zwC6yQsoZgfgt0WtZWo0fv/%E5%85%AC%E8%BB%8A%E5%8B%95%E6%85%8B%E7%B6%B2%E7%AB%99?node-id=150%3A1218) | Figma

### Setup
- 本專案使用 FontAwesome Pro，請先將專案裡 `.npmrc` 的 `${FONTAWESOME_NPM_AUTH_TOKEN}` 設定授權 Token，若無 Pro 授權，亦可自己手動修改成 Free 版本。
- run `yarn dev`

### APIs 資料
- API Endpoint: https://buibui.5xcampus.com
- HTTP Request Header 設定：
```
Content-Type: application/json
Latitude: 25.047675
Longitude: 121.51705
Message: ________________
```

#### 公車路線 (Route)
- 搜尋公車路線 `GET /api/v1/bus_routes/search?keyword=287&limit=10`，沒加 `limit` 預設顯示 10 筆
- 指定公車路線詳細資料 `GET /api/v1/bus_routes/ROUTE_UID`
- 指定公車預估到達時間 `GET /api/v1/bus_routes/ROUTE_UID/arrival?direction=1`，沒加 `direction` 預設是 1（回程）

#### 站位 (Station)
- 搜尋站位（不限定附近）`GET /api/v1/bus_stations/search?keyword=衡陽&limit=10`，沒加 limit 預設顯示 10 筆
- 附近公車站位 `GET /api/v1/bus_stations/nearby`

---

活動參與者： [Chan](https://andyu.me/) (前端) & [Debby](https://www.debbylin.me/) (UI)
