import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface StepIndicatorProps {
  steps: string[]
  activeStep: number
}

export default function StepIndicator({ steps, activeStep }: StepIndicatorProps) {
  return (
    <div className=" bg-[#CDDAEA33] font-varela-round font-normal rounded-2xl pt-8 p-4 flex justify-between items-center overflow-x-auto hide-scrollbar">
      <div className="flex min-w-max md:min-w-full justify-between">
      {steps.map((step, index) => (
        <div key={index} className="flex-1 flex flex-col items-center relative">
          <div
            className={cn(
              "w-6 h-6 rounded-full flex items-center justify-center z-10",
              index <= activeStep ? "bg-[#009588]" : "bg-[#c7e3df]"
            )}
          >
            <Check size={14} className="text-white" />
          </div>
          <span className="mt-2 text-base text-center text-gray-700">{step}</span>
          {index < steps.length - 1 && (
            <div
              className={cn(
                "absolute  top-3  h-1 w-full",
                index < activeStep ? "bg-[#009588]" : "bg-[#c7e3df]"
              )}
              style={{ transform: "translateX(50%)" }}
            />
          )}
        </div>
      ))}
      </div>
    </div>
  )
}
