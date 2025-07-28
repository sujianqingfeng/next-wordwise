import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs'
import { DeepLTranslator, DeepLXTranslator } from './components/Translators'
import { DeepSeekEngine, OpenAIEngine } from './components/engines'

export default async function ProfilePage() {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Translators</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="deepL">
            <TabsList>
              <TabsTrigger value="deepL">DeepL</TabsTrigger>
              <TabsTrigger value="deepLX">DeepLX</TabsTrigger>
            </TabsList>
            <TabsContent value="deepL">
              <DeepLTranslator />
            </TabsContent>
            <TabsContent value="deepLX">
              <DeepLXTranslator />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card className="mt-2">
        <CardHeader>
          <CardTitle>Engines</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="deepSeek">
            <TabsList>
              <TabsTrigger value="deepSeek">DeepSeek</TabsTrigger>
              <TabsTrigger value="openai">OpenAI</TabsTrigger>
            </TabsList>
            <TabsContent value="deepSeek">
              <DeepSeekEngine />
            </TabsContent>
            <TabsContent value="openai">
              <OpenAIEngine />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </>
  )
}
