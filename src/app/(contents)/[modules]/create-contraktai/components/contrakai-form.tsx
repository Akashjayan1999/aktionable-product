"use client";
import React, { useCallback, useMemo } from "react";
import { useForm, Controller } from "react-hook-form";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import FileUpload from "./file-upload";
import { CustomInput } from "@/components/ui/custom-input";
import { CustomTextarea } from "@/components/ui/custom-textarea";
import { CustomSelect } from "@/components/ui/custom-selectbox";
import { createContraktaiFormSchema } from "@/lib/zod-schema";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToggle } from "@/app/hooks/use-toogle";

type FormValues = z.infer<typeof createContraktaiFormSchema>;

const ContraktaiForm: React.FC = () => {
  const  [showCustomQuestion, toggleCustomQuestion] = useToggle(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    watch,
    setValue,
  } = useForm<FormValues>({
    resolver: zodResolver(createContraktaiFormSchema),
    defaultValues: {
      projectName: "",
      projectDescription: "",
      projectScope: "",
      documentType: "",
      document: undefined as unknown as File,
      languages: [],
      customQuestion: "",
    },
  });

  const languages = [
    { value: "arabic", label: "Arabic" },
    { value: "german", label: "German" },
    { value: "spanish", label: "Spanish" },
    { value: "hindi", label: "Hindi" },
    { value: "japanese", label: "Japanese" },
    { value: "dutch", label: "Dutch" },
    { value: "swedish", label: "Swedish" },
    { value: "turkish", label: "Turkish" },
    { value: "vietnamese", label: "Vietnamese" },
  ];

  const projectScopes = [
    { value: "individal", label: "Individual" },
    { value: "group", label: "Group" },
    { value: "Team", label: "Team" },
  ];

  const documentTypes =  useMemo(() => { return [
    { value: "contribution-agreement", label: "Contribution Agreement" },
    { value: "contract", label: "Contract" },
    { value: "legal-document", label: "Legal Document" },
    { value: "technical-spec", label: "Technical Specification" },
    { value: "other", label: "Other" },
  ]},[]);

  const handleLanguageChange = useCallback(
    (languageValue: string, checked: boolean | "indeterminate") => {
      console.log("handleLanguageChange", languageValue, checked);
      const currentLanguages = watch("languages") || [];
      if (checked === true) {
        setValue("languages", [...currentLanguages, languageValue]);
      } else {
        setValue(
          "languages",
          currentLanguages.filter((lang) => lang !== languageValue)
        );
      }
    },
    [watch, setValue]
  );

  const selectedDocumentTypeLabel = useMemo(() => {
    return (
      documentTypes.find((type) => type.value === watch("documentType"))
        ?.label || ""
    );
  }, [watch,documentTypes]);

  const isValidFileType = useCallback((file: File) => {
    const allowedTypes = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/gif",
    //   "application/pdf",
    //   "application/msword",
    //   "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    return allowedTypes.includes(file.type);
  }, []);

  const formatFileSize = useCallback((bytes: number): string => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  }, []);

  const onSubmit = (data: FormValues) => {
    console.log(data);
    if (!data.document) {
      alert("Please upload a document");
      return;
    }

    if (!isValidFileType(data.document)) {
      alert(
        "Please upload a valid file type (JPG, JPEG, PNG, GIF)"
      );
      return;
    }

    if (data.document.size > 25 * 1024 * 1024) {
      alert("File size must be less than 25MB");
      return;
    }

    const formData = {
      ...data,
      fileSize: formatFileSize(data.document.size),
      fileName: data.document.name,
      fileType: data.document.type,
    };

    console.log("Form submitted:", formData);
  };

  return (
    <div className="font-varela-round mx-auto">
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <CustomInput
            id="projectName"
            htmlFor="projectName"
            label="Project Name"
            requiredMark
            placeholder="Enter project name"
            error={errors.projectName?.message}
            {...register("projectName", {
              required: "Project name is required",
            })}
          />

          <CustomTextarea
            htmlFor="projectDescription"
            label="Project Description"
            id="projectDescription"
            requiredMark
            placeholder="Enter Project Description"
            error={errors.projectDescription?.message}
            rows={4}
            {...register("projectDescription", {
              required: "Project description is required",
            })}
          />

          <Controller
            name="projectScope"
            control={control}
            rules={{ required: "Project scope is required" }}
            render={({ field }) => (
              <CustomSelect
                label="Project Scope"
                requiredMark
                error={errors.projectScope?.message}
                placeholder="Select scope"
                value={field.value}
                onValueChange={field.onChange}
              >
                <SelectContent className="font-varela-round">
                  {projectScopes.map((scope) => (
                    <SelectItem key={scope.value} value={scope.value}>
                      {scope.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </CustomSelect>
            )}
          />

          <Controller
            name="documentType"
            control={control}
            rules={{ required: "Document type is required" }}
            render={({ field }) => (
              <CustomSelect
                label="Document Type"
                requiredMark
                error={errors.documentType?.message}
                placeholder="Contribution Agreement"
                value={field.value}
                onValueChange={field.onChange}
              >
                <SelectContent className="font-varela-round">
                  {documentTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </CustomSelect>
            )}
          />

          <div className="text-base">
            <span className="text-base">
              Document Type:{" "}
              <span className="text-[#004487]">
                {selectedDocumentTypeLabel}
              </span>
            </span>
            <p className="mt-1 text-sm text-[#424242]">
              #Select your document type to view the preset questions.You can
              remove any questions from the list that you don&apos;t want or add
              custom questions from below.
            </p>
          </div>

          <FileUpload
            label="Upload your document"
            name="document"
            register={register}
            setValue={setValue}
            watch={watch}
            error={errors.document}
            required
            accept=".jpg,.jpeg,.png,.gif"
            maxSize={25}
            supportedFormats="JPG, JPEG, PNG, GIF"
          />

          <div className="space-y-3">
            <Label className="text-base">
              Select Languages{" "}
              <span className="text-gray-500 text-sm">
                (by Default English Selected)
              </span>
            </Label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {languages.map((language) => (
                <div
                  key={language.value}
                  className="flex items-center space-x-2"
                >
                  <Checkbox
                    className="shadow-none border-1 border-[rgba(76,76,76,0.4)] rounded-none"
                    id={language.value}
                    onCheckedChange={(checked) =>
                      handleLanguageChange(language.value, checked)
                    }
                  />
                  <Label
                    htmlFor={language.value}
                    className="text-base font-normal text-[#424242] cursor-pointer"
                  >
                    {language.label}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <div className="">
            <div className="flex items-center justify-between mb-1">
              <Label className="text-base">
                Would you like to ask any additional questions about your
                document besides the preset ones?
              </Label>
              <Button
                type="button"
                size="sm"
                onClick={() => toggleCustomQuestion()}
                className="bg-transparent text-black shadow-none hover:bg-transparent cursor-pointer"
              >
                <Plus className="mr-1" />
              </Button>
            </div>
            {showCustomQuestion && (
              <CustomTextarea
                htmlFor="customQuestion"
                id="customQuestion"
                placeholder="Enter your custom question..."
                rows={4}
                {...register("customQuestion")}
              />
            )}
          </div>

          <div className="pt-4 flex justify-center">
            <Button
              variant="primary"
              type="submit"
              className="rounded-full text-base font-normal px-12 py-4"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContraktaiForm;
