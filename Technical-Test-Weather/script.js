const API_KEY = import.meta.env.VITE_API_KEY
const API_URL = import.meta.env.VITE_API_URL

const $ = elem => document.querySelector(elem)

const $form = $('form')
const city = $('input').value

async function getWeather (cityName) {
  const url = ` ${API_URL}?q=${cityName}&appid=${API_KEY}`
  console.log(`URL: ${url}`)
  const response = await fetch(url)
  const data = await response.json()
  console.log(data)
  return data
}

$form.addEventListener('submit', () => {
  const $errorElem = document.querySelector('#error')
})

getWeather(city)