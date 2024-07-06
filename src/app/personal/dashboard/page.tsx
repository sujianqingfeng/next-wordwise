import { fetchYearCalendarWord } from '@/actions/dashboard'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default async function DashboardPage() {
  const calendar = await fetchYearCalendarWord()

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Calendar</CardTitle>
        </CardHeader>
        <CardContent>{/* <CollectCalendar data={calendar} /> */}</CardContent>
      </Card>
    </div>
  )
}
