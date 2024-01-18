import { fetchYearCalendarWordApi } from '@/api'
import CollectCalendar from './components/CollectCalendar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default async function Page() {
  const calendar = await fetchYearCalendarWordApi()

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Calendar</CardTitle>
        </CardHeader>
        <CardContent>
          <CollectCalendar data={calendar} />
        </CardContent>
      </Card>
    </div>
  )
}
