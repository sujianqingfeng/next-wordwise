import CollectCalendar from './components/CollectCalendar'

const data = {
  '2023-10-01': { count: 4 },
  '2023-11-27': { count: 7 }
}

export default function Page() {
  return (
    <>
      <CollectCalendar data={data} />
    </>
  )
}
