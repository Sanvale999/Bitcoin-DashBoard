import axios from 'axios'

const BASE_URL = 'https://api.binance.com/api/v3'

export const getBTCPrice = async () => {
  const res = await axios.get(`${BASE_URL}/ticker/24hr?symbol=BTCUSDT`)
  return res.data
}

export const getKlines = async () => {
  const res = await axios.get(
    `${BASE_URL}/klines?symbol=BTCUSDT&interval=1h&limit=100`
  )

  return res.data.map((k: any) => ({
    time: k[0] / 1000,
    open: parseFloat(k[1]),
    high: parseFloat(k[2]),
    low: parseFloat(k[3]),
    close: parseFloat(k[4]),
  }))
}
