import { fetchYearCalendarWordApi } from '@/api'
import CollectCalendar from './components/CollectCalendar'

export default async function Page({
  searchParams
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const calendar = await fetchYearCalendarWordApi({
    headers: {
      authorization: (searchParams.token as string) ?? ''
    }
  })

  return (
    <>
      <div>calendar</div>
      <CollectCalendar data={calendar} />
    </>
  )
}
