'use client'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from '@/components/ui/dialog'
import { X } from 'lucide-react'
import { ReactNode } from 'react'

interface DialogBoxProps {
  open: boolean
  onClose: () => void
  title: string
  children: ReactNode
}

export default function DialogBox({
  open,
  onClose,
  title,
  children,
}: DialogBoxProps) {
  return (
    <Dialog open={open} onOpenChange={(val) => !val && onClose()}>
      <DialogContent
        className="p-0 overflow-hidden max-w-lg border-none rounded-xl font-varela-round"
        showCloseButton={false}
      >
       
        <div className="bg-[#004487] text-white px-6 py-4 flex items-center justify-between">
          <DialogTitle className="text-xl font-quicksand">{title}</DialogTitle>
          <DialogClose asChild>
            <button className="text-white">
              <X size={20} />
            </button>
          </DialogClose>
        </div>

        
        <div>{children}</div>
      </DialogContent>
    </Dialog>
  )
}
