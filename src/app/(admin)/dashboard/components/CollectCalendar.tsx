import ToolTip from '@/components/Tooltip'
import { subYears, startOfWeek, format, addDays, isAfter } from 'date-fns'

const DAYS = 365
const ROW = 7
const COL = Math.ceil(DAYS / ROW)
const NOW = new Date()
const previousYear = subYears(NOW, 1)
const previousYearStartOfWeek = startOfWeek(previousYear)

const formatDay = (day: Date) => {
  return format(day, 'yyyy-MM-dd')
}

type CollectCalendarProps = {
  data: Record<string, { count: number }>
}

export default function CollectCalendar(props: CollectCalendarProps) {
  const { data = {} } = props

  const getCurrentDay = (i: number, j: number) => {
    return addDays(previousYearStartOfWeek, i + j * ROW)
  }

  const getBG = (i: number, j: number) => {
    const current = data[formatDay(getCurrentDay(i, j))]
    if (current) {
      const { count } = current
      const percent = count * 100
      if (percent > 1000) {
        return 'bg-primary-color'
      }
      return `bg-primary-color`
    }
    return 'bg-slate-300'
  }

  return (
    <div>
      <ToolTip>
        <div>ffff</div>
      </ToolTip>
      <table className="border-spacing-1 border-separate">
        <tbody>
          {Array.from({ length: ROW }).map((_, i) => {
            return (
              <tr className="h-[10px]" key={i}>
                {Array.from({ length: COL }).map((_, j) => {
                  if (isAfter(getCurrentDay(i, j), NOW)) {
                    return null
                  }

                  return (
                    <td
                      key={i + j * ROW}
                      className={`w-[10px]  rounded-sm overflow-hidden ${getBG(
                        i,
                        j
                      )}`}
                    ></td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
