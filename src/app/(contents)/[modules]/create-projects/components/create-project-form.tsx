"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm, Controller } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";
import { CustomTextarea } from "@/components/ui/custom-textarea";
import { CustomInput } from "@/components/ui/custom-input";
import { CustomSelect } from "@/components/ui/custom-selectbox";
import { createProjectFormSchema } from "@/lib/zod-schema";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// type FormValues = {
//   name: string;
//   description: string;
//   projectType: string;
// };
type FormValues = z.infer<typeof createProjectFormSchema>;
export default function CreateProjectFormFields() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(createProjectFormSchema),
  });

  const router = useRouter();
  const searchParams = useSearchParams();
  const step = parseInt(searchParams.get("step") || "0");

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted", data);
    router.push(`?step=${step + 1}`); // go to next step
  };

  return (
    <div className="bg-[#CDDAEA33] rounded-2xl p-6 space-y-6 font-varela-round font-normal">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <CustomInput
          label="Project Name"
          requiredMark
          placeholder="Enter project name"
          error={errors.name?.message}
          {...register("name", { required: "Project name is required" })}
        />

        <CustomTextarea
          label="Project Description"
          requiredMark
          placeholder="Enter Project Description"
          error={errors.description?.message}
          rows={4}
          {...register("description", {
            required: "Project description is required",
          })}
        />

        <Controller
          name="projectType"
          control={control}
          rules={{ required: "Project type is required" }}
          render={({ field }) => (
            <CustomSelect
              label="Select Project Type"
              requiredMark
              error={errors.projectType?.message}
              placeholder="Select Project Scope"
              value={field.value}
              onValueChange={field.onChange}
            >
              <SelectItem value="ml">Machine Learning</SelectItem>
              <SelectItem value="data">Data Engineering</SelectItem>
              <SelectItem value="web">Web App</SelectItem>
            </CustomSelect>
          )}
        />

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
  );
}
