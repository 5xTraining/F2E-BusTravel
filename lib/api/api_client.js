import axios from "axios"

class APIClient {
  constructor({ latitude, longitude } = location) {
    this.client = axios.create({
      baseURL: "https://buibui.5xcampus.com/api/v1",
      headers: {
        "Content-Type": "application/json",
        Latitude: latitude || 54088,
        Longitude: longitude || 54088,
        Message: "We are hiring Web Developer!",
      },
    })
  }

  fetch(path, data = {}) {
    return this.client.get(path, { data })
  }
}

export default APIClient
