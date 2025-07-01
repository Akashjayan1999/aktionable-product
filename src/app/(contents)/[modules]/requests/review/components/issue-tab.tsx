'use client'

import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { useRouter, useSearchParams } from 'next/navigation'
import { Issue } from './issue-table'
import IssueTable from './issue-table'

interface TabData {
  label: string
  value: string
  issues: Issue[]
} 

export default function IssueTabs({ tabs }: { tabs: TabData[] }) {
  const router = useRouter()
  const params = useSearchParams()
  const currentTab = params.get('tab') || tabs[0].value
  const requestId = params.get('requestId')
  const onTabChange = (value: string) => {
    router.push(`/contraktai/requests/review?requestId=${requestId}&tab=${value}`)
  }

  return (
    <Tabs defaultValue={currentTab} value={currentTab} onValueChange={onTabChange}>
      <TabsList className='bg-transparent'>
        {tabs.map(tab => (
          <TabsTrigger key={tab.value} value={tab.value} className='bg-white rounded-3xl text-base px-4 md:px-8 py-5 md:py-6 mr-2 font-varela-round font-normal !shadow-none data-[state=active]:bg-[#004487] data-[state=active]:text-white'>
            {tab.label} ({tab.issues.length})
          </TabsTrigger>
        ))}
      </TabsList>

      {tabs.map(tab => (
        <TabsContent key={tab.value} value={tab.value}>
          <IssueTable data={tab.issues} pageRef="Ref. Page No.: 24"/>
        </TabsContent>
      ))}
    </Tabs>
  )
}
