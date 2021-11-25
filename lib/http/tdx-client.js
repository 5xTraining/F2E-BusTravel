import axios from "axios"
import jsSHA from "jssha"

function AuthorizationHeader({ appID, appKey } = {}) {
  appID = appID || process.env.APP_ID
  appKey = appKey || process.env.APP_KEY

  const GMTDate = new Date().toGMTString()

  const encryptor = new jsSHA("SHA-1", "TEXT")
  encryptor.setHMACKey(appKey, "TEXT")
  encryptor.update(`x-date: ${GMTDate}`)

  const encryptedString = encryptor.getHMAC("B64")
  const Authorization = `hmac username="${appID}", algorithm="hmac-sha1", headers="x-date", signature="${encryptedString}"`

  return {
    Authorization,
    "X-Date": GMTDate,
    "Accept-Encoding": "gzip",
  }
}

function TDXClient({ appID, appKey } = {}) {
  const headers = AuthorizationHeader({ appID, appKey })
  const client = axios.create({
    baseURL: "https://ptx.transportdata.tw",
    timeout: 1000,
    headers,
  })

  return client
}

export { TDXClient }
