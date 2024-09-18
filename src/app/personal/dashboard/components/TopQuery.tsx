'use client'

import { fetchTopQuery } from '~/actions/dashboard'
import type { TopQueryResp } from '~/api/types'
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from '~/components/ui/chart'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs'
import { useEffect, useState } from 'react'
import { Bar, BarChart, LabelList, XAxis, YAxis } from 'recharts'

function TopQueryType({ type }: { type: '1' | '2' | '3' }) {
  const [topQuery, setTopQuery] = useState<TopQueryResp>([])

  useEffect(() => {
    fetchTopQuery(type).then(setTopQuery)
  }, [type])

  const chartConfig = {
    count: {
      label: 'Count',
      color: 'var(--primary-active)'
    }
  } satisfies ChartConfig

  return (
    <ChartContainer config={chartConfig}>
      <BarChart
        accessibilityLayer
        data={topQuery}
        layout="vertical"
        margin={{
          right: 16
        }}
      >
        <XAxis type="number" dataKey="count" hide />
        <YAxis dataKey="prototype" type="category" tickMargin={10} hide />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator="line" />}
        />
        <Bar dataKey="count" fill="var(--primary-active)" radius={5}>
          <LabelList
            dataKey="prototype"
            position="insideLeft"
            offset={8}
            className="fill-[--chart-label]"
            fontSize={12}
          />
          <LabelList
            dataKey="count"
            position="right"
            offset={8}
            className="fill-foreground"
            fontSize={12}
          />
        </Bar>
      </BarChart>
    </ChartContainer>
  )
}

function TopQuery() {
  return (
    <Card>
      <Tabs defaultValue="1">
        <CardHeader>
          <CardTitle className="flex justify-between items-center">
            Top Query
            <TabsList>
              <TabsTrigger value="1">Week</TabsTrigger>
              <TabsTrigger value="2">Month</TabsTrigger>
              <TabsTrigger value="3">Year</TabsTrigger>
            </TabsList>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <TabsContent value="1">
            <TopQueryType type="1" />
          </TabsContent>
          <TabsContent value="2">
            <TopQueryType type="2" />
          </TabsContent>
          <TabsContent value="3">
            <TopQueryType type="3" />
          </TabsContent>
        </CardContent>
      </Tabs>
    </Card>
  )
}

export default TopQuery
