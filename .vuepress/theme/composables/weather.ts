import { useLocalStorage } from '@vueuse/core'
import { onMounted, ref } from 'vue'

interface City {
  name: string
}

interface CityWeather {
  weather?: string // 天气现象
  temperature?: string // 实时气温
  winddirection?: string // 风向描述
  windpower?: string // 风力级别
}

// 获取高德地理位置信息
async function getCity() {
  return await fetch(`https://uapis.cn/api/v1/network/myip`).then(res => res.json())
}

// 获取高德地理天气信息
async function getWeather(city: string) {
  return await fetch(`https://uapis.cn/api/v1/misc/weather?city=${city}`).then(res => res.json())
}

export function useWeather() {
  const city = ref<City | null>(null)
  const weather = ref<CityWeather | null>(null)
  const loaded = ref(true)

  const cache = useLocalStorage<{ city?: City, weather?: CityWeather, updatedAt?: number }>('__VUEPRESS_HOME_LANDING_WEATHER__', {})

  async function fetchWeather() {
    const current = Date.now()
    if (cache.value.updatedAt && current - cache.value.updatedAt < 60 * 60 * 1000 && cache.value.city && cache.value.weather) {
      city.value = cache.value.city
      weather.value = cache.value.weather
      return
    }
    loaded.value = false
    try {
      if (!city.value) {
        const res = await getCity()
        const name = res?.region?.split(' ')?.at(-1)
        if (!name) {
          throw new Error('获取城市失败')
        }

        city.value = { name }
      }
      const data = await getWeather(city.value.name)
      weather.value = {
        weather: data.weather,
        temperature: data.temperature,
        winddirection: data.wind_direction,
        windpower: data.wind_power,
      }

      cache.value = { city: city.value, weather: weather.value, updatedAt: current }
    }
    catch (e) {
      console.error('查询天气失败', e)
    }
    loaded.value = true
  }

  onMounted(() => fetchWeather())

  return { city, weather, loaded, fetchWeather }
}
