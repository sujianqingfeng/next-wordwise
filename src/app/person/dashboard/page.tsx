import { fetchYearCalendarWordApi } from '@/api'
import CollectCalendar from './components/CollectCalendar'

export default async function Page() {
  const calendar = await fetchYearCalendarWordApi()

  return (
    <>
      <div>calendar</div>
      <CollectCalendar data={calendar} />
    </>
  )
}
