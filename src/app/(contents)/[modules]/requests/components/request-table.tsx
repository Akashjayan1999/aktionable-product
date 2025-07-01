// components/PendingRequestTable.tsx
"use client"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

export interface RequestItem {
  projectName: string
  requestedUser: string
  requests: string
}

interface RequestTableProps {
  subTitle: string
  RequestData: RequestItem[]
  
}

export default function RequestTable({
  subTitle,
  RequestData,
}: RequestTableProps) {
 const router = useRouter()
  const handleReview = (id: number) => {
    router.push(`/contraktai/requests/review?requestId=${id}`)
  }
  return (
<div className="font-varela-round">
  <h2 className="text-lg font-normal mb-2">
    {subTitle} ({RequestData.length})
  </h2>

  <div className="rounded-2xl bg-[rgba(205,218,234,0.2)] p-4 overflow-x-auto">
    <div className="min-w-[700px]">
      <div className="grid grid-cols-4 font-medium text-lg font-quicksand px-4 py-2 whitespace-nowrap">
        <span>Project Name</span>
        <span className="justify-self-center">Requested By</span>
        <span className="justify-self-center">Requests</span>
        <span className="text-center">Action</span>
      </div>

      {RequestData.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-4 items-center px-4 py-3 text-base whitespace-nowrap"
        >
          <span>{item.projectName}</span>
          <span className="justify-self-center">{item.requestedUser}</span>
          <span className="justify-self-center">{item.requests}</span>
          <div className="justify-self-center">
            <Button
              variant="primary"
              className="text-base px-6 !py-5 cursor-pointer"
              onClick={() => handleReview(index)}
            >
              Review
            </Button>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
  )
}
