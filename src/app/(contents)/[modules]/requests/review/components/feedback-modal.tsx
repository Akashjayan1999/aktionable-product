
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useForm, Controller } from "react-hook-form"
import DialogBox from "@/components/ui/dialogBox"
interface AddFeedbackModalProps {
  open: boolean
  onClose: () => void
  questionId:number
}

export type FeedbackFormData = {
  feedbackType: string
  comments: string
  questionId: number
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
    console.log(questionId)
    handleDialogClose()
  }

  return (
     <DialogBox open={open} onClose={onClose} title="Add Feedback">
          <form onSubmit={handleSubmit(handleFormSubmit)} className="p-6 pt-3 space-y-4">
          
          <div className="feedback-form-container">
            <label className="block text-sm font-medium mb-1 ">Select Feedback</label>
            <Controller
              control={control}
              name="feedbackType"
              rules={{ required: "Feedback type is required" }}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value} >
                  <SelectTrigger className="w-full shadow-none border-1 border-[rgba(76,76,76,0.4)]">
                    <SelectValue placeholder="Select Feedback" className="" />
                  </SelectTrigger>
                  <SelectContent className="font-varela-round">
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
              className="w-full shadow-none border-1 border-[rgba(76,76,76,0.4)]  !placeholder-[rgba(0,0,0,0.5)] focus:!ring-0 "
              rows={4}
            />
            {errors.comments && (
              <p className="text-red-500 text-sm mt-1">{errors.comments.message}</p>
            )}
          </div>

         
          <div className="pt-2">
            <Button
             variant="primary"
              type="submit"
              className=" rounded-full text-base !py-4 px-6"
            >
              Submit
            </Button>
          </div>
        </form>
       </DialogBox>
  )
}
