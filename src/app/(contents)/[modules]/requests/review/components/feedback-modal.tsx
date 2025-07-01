import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { X } from "lucide-react"
import { useForm, Controller } from "react-hook-form"

interface AddFeedbackModalProps {
  open: boolean
  onClose: () => void
  questionId:number
}

export type FeedbackFormData = {
  feedbackType: string
  comments: string
}

export default function AddFeedbackModal({
  open,
  onClose,
  questionId,
}: AddFeedbackModalProps) {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FeedbackFormData>({
    defaultValues: {
      feedbackType: "",
      comments: "",
    },
  })

  const handleDialogClose = () => {
    reset()
    onClose()
  }

  const handleFormSubmit = (data: FeedbackFormData) => {
    console.log(data)
    handleDialogClose()
  }

  return (
    <Dialog open={open} onOpenChange={(val) => !val && handleDialogClose()}>
      <DialogContent className="p-0 overflow-hidden max-w-lg">
        <div className="bg-[#004487] text-white px-6 py-4 flex items-center justify-between">
          <DialogTitle className="text-lg">Add Feedback</DialogTitle>
          <DialogClose asChild>
            <button className="text-white">
              <X size={20} />
            </button>
          </DialogClose>
        </div>

        <form onSubmit={handleSubmit(handleFormSubmit)} className="p-6 space-y-4">
          
          <div>
            <label className="block text-sm font-medium mb-1">Select Feedback</label>
            <Controller
              control={control}
              name="feedbackType"
              rules={{ required: "Feedback type is required" }}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Feedback" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Positive">Positive</SelectItem>
                    <SelectItem value="Neutral">Neutral</SelectItem>
                    <SelectItem value="Negative">Negative</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.feedbackType && (
              <p className="text-red-500 text-sm mt-1">{errors.feedbackType.message}</p>
            )}
          </div>

         
          <div>
            <label className="block text-sm font-medium mb-1">Comments</label>
            <Textarea
              {...register("comments", { required: "Comments are required" })}
              placeholder="Enter your comments"
              className="w-full"
              rows={4}
            />
            {errors.comments && (
              <p className="text-red-500 text-sm mt-1">{errors.comments.message}</p>
            )}
          </div>

         
          <div className="pt-2">
            <Button
              type="submit"
              className="bg-[#004487] hover:bg-[#00346b] rounded-full"
            >
              Submit
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
