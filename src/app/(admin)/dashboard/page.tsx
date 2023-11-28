import { fetchYearCalendarWordApi } from '@/api'
import CollectCalendar from './components/CollectCalendar'

const data = {
  '2023-10-01': { count: 4 },
  '2023-11-27': { count: 7 }
}

export default async function Page() {
  const res = await fetchYearCalendarWordApi()
  console.log('🚀 ~ file: page.tsx:12 ~ Page ~ res:', res)
  return (
    <>
      <CollectCalendar data={data} />
    </>
  )
}
