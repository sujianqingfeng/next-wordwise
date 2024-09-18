import { fetchYearCalendarWord } from '~/actions/dashboard'
import TopQuery from './components/TopQuery'
import CollectCalendar from './components/CollectCalendar'

export default async function DashboardPage() {
  const calendar = await fetchYearCalendarWord()

  return (
    <div className="flex justify-between gap-2">
      <div className="flex-2">
        <CollectCalendar data={calendar} />
      </div>

      <div className="flex-1">
        <TopQuery />
      </div>
    </div>
  )
}
