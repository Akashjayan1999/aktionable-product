'use client'

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useForm, Controller } from "react-hook-form"
import { useRouter, useSearchParams } from "next/navigation"

type FormValues = {
  name: string
  description: string
  projectType: string
}

export default function CreateProjectFormFields() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>()

  const router = useRouter()
  const searchParams = useSearchParams()
  const step = parseInt(searchParams.get("step") || "0")

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted", data)
    router.push(`?step=${step + 1}`) // go to next step
  }

  return (
    <div className="bg-[#CDDAEA33] rounded-2xl p-6 space-y-6 font-varela-round font-normal">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block text-base font-medium mb-1">
            Project Name<span className="text-red-500">*</span>
          </label>
          <Input
            {...register("name", { required: "Project name is required" })}
            placeholder="Enter project name"
            className="shadow-none border-1 border-[rgba(76,76,76,0.4)] h-12 !placeholder-[rgba(0,0,0,0.5)] focus:!ring-0"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="block text-base font-medium mb-1">
            Project Description<span className="text-red-500">*</span>
          </label>
          <Textarea
            {...register("description", { required: "Project description is required" })}
            rows={4}
            placeholder="Enter Project Description"
            className="shadow-none border-1 border-[rgba(76,76,76,0.4)] h-25  !placeholder-[rgba(0,0,0,0.5)] focus:!ring-0"
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>
          )}
        </div>

        <div className="project-container">
          <label className="block text-base font-medium mb-1">
            Select Project Type<span className="text-red-500">*</span>
          </label>
          <Controller
            name="projectType"
            control={control}
            rules={{ required: "Project type is required" }}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger className={`${errors.projectType ? "border-red-500" : ""} w-full !h-12 shadow-none border-1 border-[rgba(76,76,76,0.4)]`}>
                  <SelectValue placeholder="Select Project Scope" />
                </SelectTrigger>
                <SelectContent className="font-varela-round">
                  <SelectItem value="ml">Machine Learning</SelectItem>
                  <SelectItem value="data">Data Engineering</SelectItem>
                  <SelectItem value="web">Web App</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
          {errors.projectType && (
            <p className="text-red-500 text-sm mt-1">
              {errors.projectType.message}
            </p>
          )}
        </div>

        <div className="pt-4 flex justify-center">
          <Button
            variant="primary"
            type="submit"
            className="rounded-full text-base font-normal px-6"
          >
            Create Project
          </Button>
        </div>
      </form>
    </div>
  )
}