import {
  Tooltip,
  TooltipContent,
  TooltipPortal,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'
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

  const getContent = (i: number, j: number) => {
    const currentDay = formatDay(getCurrentDay(i, j))
    const current = data[currentDay]

    let content = current ? `${current.count} collection` : 'No collection'
    content += ` on ${currentDay}`

    return content
  }

  const getBG = (i: number, j: number) => {
    const current = data[formatDay(getCurrentDay(i, j))]
    if (current) {
      const { count } = current
      const percent = count * 10
      if (percent > 100) {
        return 'bg-primary'
      }
      return `bg-primary/${percent}`
    }
    return 'bg-slate-300'
  }

  return (
    <div>
      <TooltipProvider>
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
                      <Tooltip key={i + j * ROW}>
                        <TooltipTrigger asChild>
                          <td
                            className={cn(
                              `w-[10px] rounded-sm overflow-hidden`,
                              getBG(i, j)
                            )}
                          ></td>
                        </TooltipTrigger>

                        <TooltipPortal>
                          <TooltipContent>{getContent(i, j)}</TooltipContent>
                        </TooltipPortal>
                      </Tooltip>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </TooltipProvider>
    </div>
  )
}
