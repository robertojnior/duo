const HOUR_IN_MINUTES = 60

export function convertHourToMinutes(hours: string) {
  const [hour, minute] = hours.split(':').map(Number)

  return hour * HOUR_IN_MINUTES + minute
}
