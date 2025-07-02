'use client'

import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  ColumnDef,
} from '@tanstack/react-table'
import { useMemo, useState } from 'react'
import { useToggle } from '@/app/hooks/use-toogle'
import AddFeedbackModal from './feedback-modal'
import Image from 'next/image'
export type Issue = {
  question: string
  answer: string
  explanation: string
  issueExplanation?: string
  feedback?: string
 
}

interface IssueTableProps {
  data: Issue[]
  pageRef?: string
}

export default function IssueTable({ data,pageRef }: IssueTableProps) {
  const [open, toggleOpen] = useToggle()
  const [questionId, setQuestionId] = useState<number|null>()
  const columns = useMemo<ColumnDef<Issue>[]>(
    () => [
      { accessorKey: 'question', header: 'Question' },
      { accessorKey: 'answer', header: 'Answer' },
      { accessorKey: 'explanation', header: 'Explanation' },
      { accessorKey: 'issueExplanation', header: 'Issue Explanation' },
      {
      id: 'feedback',
      header: 'Feedback',
      cell: ({ row }) => (
        <button
          onClick={() => {
            setQuestionId(Number(row.id)+1)
            toggleOpen()
            console.log(row.id)
          }}
          className="text-[#004487] hover:text-[#006fbb] transition cursor-pointer flex justify-center"
        >
         <Image src="/feedback.svg" alt="feedback" width={30} height={30} />
        </button>
      ),
    },
    ],
    []
  )

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="overflow-x-auto hide-scrollbar mt-4  rounded-2xl bg-white">
      <table className="min-w-full text-sm bg-white ">
        <thead className="bg-[#004487] text-white">
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id} className="px-4 py-4 text-left text-lg font-normal">
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className='max-h-[30vh] overflow-y-auto hide-scrollbar'>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id} className="text-[#272727]">
              {row.getVisibleCells().map(cell => (
                <td key={cell.id} className="px-4 py-3 text-base">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
       
      </table>
      <div className='my-6 px-5 mb-12'>
        <span className='text-[#424242]'>{pageRef}</span>
      <hr />
      </div>
      <AddFeedbackModal
        open={open}
        onClose={toggleOpen}
        questionId={questionId||0}
      />
    </div>
  )
}
