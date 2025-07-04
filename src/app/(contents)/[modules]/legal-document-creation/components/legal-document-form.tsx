"use client";

import React, { useMemo } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { Plus, Trash2 } from "lucide-react";
import { CustomSelect } from "@/components/ui/custom-selectbox";
import { SelectContent, SelectItem } from "@/components/ui/select";
import { CustomInput } from "@/components/ui/custom-input";
import { CustomTextarea } from "@/components/ui/custom-textarea";
import { Button } from "@/components/ui/button";
import { useToggle } from "@/app/hooks/use-toogle";
import { legalDocumentFormSchema } from "@/lib/zod-schema";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// type FormData = {
//   documentType: string;
//   projectScope: string;
//   partyAName: string;
//   partyAAddress: string;
//   partyBName: string;
//   partyBAddress: string;
//   fromDate: string;
//   toYears: string;
//   selectedClauses: string;
//   jobResponsibilities: string;
//   userClauseName?: string;
//   customClause?: string;
// };
type FormData = z.infer<typeof legalDocumentFormSchema>;
// Option types
type Option = {
  value: string;
  label: string;
  active?: boolean;
};

const LegalDocumentForm: React.FC = () => {
  const [showAdditionalPartyB, toggleAdditionalPartyB] = useToggle(true);
  const [showAdditionalUserClause, toggleAdditionalUserClause] =
    useToggle(true);
  const [showAdditionalPartyA, toggleAdditionalPartyA] = useToggle(true);
  const defaultValues = {
    documentType: "",
    projectScope: "",
    partyAName: "",
    partyAAddress: "",
    partyBName: "",
    partyBAddress: "",
    fromDate: "",
    toYears: "",
    selectedClauses: "job-responsibilities",
    jobResponsibilities: "",
    userClauseName: "",
    customClause: "",
  };
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    watch,
    setValue,
    reset
  } = useForm<FormData>({
    resolver: zodResolver(legalDocumentFormSchema),
    defaultValues
  });

  const documentTypes: Option[] = useMemo(() => { return [
    { value: "employment-contract", label: "Employment Contract" },
    { value: "service-agreement", label: "Service Agreement" },
    { value: "consulting-agreement", label: "Consulting Agreement" },
    { value: "other", label: "Other" },
  ]},[]);

  const projectScopes: Option[] = [
    { value: "individual", label: "Individual" },
    { value: "group", label: "Group" },
    { value: "team", label: "Team" },
  ];

  const legalClauses: Option[] = [
    { value: "job-responsibilities", label: "Job Responsibilities" },
    { value: "compensation", label: "Compensation" },
    { value: "confidentiality", label: "Confidentiality" },
    { value: "termination", label: "Termination" },
    { value: "non-compete", label: "Non-Compete Clause" },
  ];

  const handleClauseToggle = (clauseValue: string) => {
    setValue("selectedClauses", clauseValue);
  };

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Form submitted:", data);
    reset(defaultValues);
  };
  const selectedDocumentTypeLabel = useMemo(() => {
    return (
      documentTypes.find((type) => type.value === watch("documentType"))
        ?.label || ""
    );
  }, [watch,documentTypes]);
  return (
    <div className="font-varela-round mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <Controller
          name="documentType"
          control={control}
          rules={{ required: "Document type is required" }}
          render={({ field }) => (
            <CustomSelect
              label="Document Type"
              requiredMark
              error={errors.documentType?.message}
              placeholder="Select document type"
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

        <Controller
          name="projectScope"
          control={control}
          rules={{ required: "Project scope is required" }}
          render={({ field }) => (
            <CustomSelect
              label="Project Scope"
              requiredMark
              error={errors.projectScope?.message}
              placeholder="Select project scope"
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between space-x-2">
              <h3 className="text-base font-medium text-gray-700">
                Party A<span className="text-red-500">*</span>
              </h3>
              <Button
                type="button"
                size="sm"
                onClick={() => toggleAdditionalPartyA()}
                className="bg-transparent text-[#004487] shadow-none hover:bg-transparent cursor-pointer"
              >
                <Plus className="mr-1" />
              </Button>
            </div>
            {showAdditionalPartyA && (
              <div className="space-y-3">
                <CustomInput
                  htmlFor="partyAName"
                  placeholder="Enter Party A Name"
                  error={errors.partyAName?.message}
                  {...register("partyAName", {
                    required: "Party A name is required",
                  })}
                />
                <CustomTextarea
                  htmlFor="partyAAddress"
                  placeholder="Enter Party A Address"
                  rows={4}
                  error={errors.partyAAddress?.message}
                  {...register("partyAAddress", {
                    required: "Party A address is required",
                  })}
                />
              </div>
            )}
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between space-x-2">
              <h3 className="text-base text-gray-700">
                Party B<span className="text-red-500">*</span>
              </h3>

              <Button
                type="button"
                size="sm"
                onClick={() => toggleAdditionalPartyB()}
                className="bg-transparent text-[#004487] shadow-none hover:bg-transparent cursor-pointer"
              >
                <Plus className="mr-1" />
              </Button>
            </div>
            {showAdditionalPartyB && (
              <div className="space-y-3">
                <CustomInput
                  htmlFor="partyBName"
                  placeholder="Enter Party B Name"
                  error={errors.partyBName?.message}
                  {...register("partyBName", {
                    required: "Party B name is required",
                  })}
                />
                <CustomTextarea
                  htmlFor="partyBAddress"
                  placeholder="Enter Party B Address"
                  rows={3}
                  error={errors.partyBAddress?.message}
                  {...register("partyBAddress", {
                    required: "Party B address is required",
                  })}
                />
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CustomInput
            htmlFor="fromDate"
            label="From Date"
            requiredMark
            type="date"
            error={errors.fromDate?.message}
            {...register("fromDate", { required: "From date is required" })}
          />

          <CustomInput
            htmlFor="toYears"
            label="To (Years)"
            requiredMark
            type="number"
            placeholder="0"
            error={errors.toYears?.message}
            {...register("toYears", { required: "Duration is required" })}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-base font-medium">Select Legal Clauses</h3>
          <div className="flex flex-wrap gap-3 md:gap-6">
            {legalClauses.map((clause) => {
              const isSelected = watch("selectedClauses")?.includes(
                clause.value
              );
              return (
                <Button
                  key={clause.value}
                  type="button"
                  onClick={() => handleClauseToggle(clause.value)}
                  className={`px-4 py-2 rounded-full cursor-pointer text-sm font-medium transition-colors ${
                    clause.active || isSelected
                      ? "bg-[#004487] text-white"
                      : "bg-[rgba(0,68,135,0.2)] text-[#272727] hover:bg-gray-300"
                  }`}
                >
                  {clause.label}
                </Button>
              );
            })}
          </div>
        </div>

        <div className="">
          <div className="flex items-start space-x-2">
            <div>
              <p className="text-base font-medium ">
                Document Type:{" "}
                <span className="text-[#004487]">
                  {selectedDocumentTypeLabel}
                </span>
              </p>
              <p className="text-base text-[#004487] mt-1">Clauses: 1/5</p>
              <p className="text-xs text-[#424242] mt-1">
                ***By default, the selected clauses that require your input have
                a value that you can change to suit your needs.***
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-1">
          <div className="flex items-center md:w-[50%] justify-between">
            <h3 className="text-base font-medium">Job Responsibilities</h3>
            <Button
              type="button"
              className="bg-transparent shadow-none !py-0 !my-0 hover:bg-transparent cursor-pointer"
            >
              <Trash2 className="h-6 w-6 text-[#009588]" />
            </Button>
          </div>
          <p className="text-sm text-[#424242]">
            Outline the duties and responsibilities of the employee.
          </p>
          <div className="md:w-[50%]">
            <CustomTextarea
              htmlFor="jobResponsibilities"
              placeholder="Software Engineer, responsible for developing and maintaining applications"
              rows={4}
              {...register("jobResponsibilities")}
            />
          </div>
        </div>

        <div className="">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-medium ">User Clauses</h3>
            <Button
              type="button"
              size="sm"
              onClick={() => toggleAdditionalUserClause()}
              className="bg-transparent text-[#004487] shadow-none hover:bg-transparent cursor-pointer"
            >
              <Plus className="mr-1" />
            </Button>
          </div>

          {showAdditionalUserClause && (
            <div className="space-y-3">
              <CustomInput
                htmlFor="userClauseName"
                placeholder="Enter Clause Name"
                {...register("userClauseName")}
              />
              <CustomTextarea
                htmlFor="customClause"
                placeholder="Enter custom clauses"
                rows={4}
                {...register("customClause")}
              />
            </div>
          )}
        </div>

        <div className="flex justify-center pt-6">
          <Button
            variant="primary"
            type="submit"
            className="rounded-full text-base font-normal px-12 py-4"
          >
            Create Project
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LegalDocumentForm;
