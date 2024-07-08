import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { DeepLTranslator } from './components/Translators'

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
              <TabsTrigger value="deepL">deepL</TabsTrigger>
              <TabsTrigger value="deepSeek">deepSeek</TabsTrigger>
            </TabsList>
            <TabsContent value="deepL">
              <DeepLTranslator />
            </TabsContent>
            <TabsContent value="deepSeek">
              Change your password here.
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </>
  )
}
