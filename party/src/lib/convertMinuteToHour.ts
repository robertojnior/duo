const HOUR_IN_MINUTES = 60

export function convertMinuteToHour(minutes: number) {
  const hour = String(Math.floor(minutes / HOUR_IN_MINUTES)).padStart(2, '0')
  const minute = String(minutes % HOUR_IN_MINUTES).padStart(2, '0')

  return `${hour}:${minute}`
}
