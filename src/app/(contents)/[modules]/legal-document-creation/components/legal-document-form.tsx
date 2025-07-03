'use client';

import React, { useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { Plus, Info } from "lucide-react";
import { CustomSelect } from "@/components/ui/custom-selectbox";
import { SelectItem } from "@radix-ui/react-select";
import { CustomInput } from "@/components/ui/custom-input";
import { CustomTextarea } from "@/components/ui/custom-textarea";
import { Button } from "@/components/ui/button";


type FormData = {
  documentType: string;
  projectScope: string;
  partyAName: string;
  partyAAddress: string;
  partyBName: string;
  partyBAddress: string;
  fromDate: string;
  toYears: string;
  selectedClauses: string;
  jobResponsibilities: string;
  userClauseName?: string;
  customClause?: string;
};

// Option types
type Option = {
  value: string;
  label: string;
  active?: boolean;
};

const LegalDocumentForm: React.FC = () => {
  const [showAdditionalPartyB, setShowAdditionalPartyB] = useState<boolean>(false);
  const [showAdditionalUserClause, setShowAdditionalUserClause] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    watch,
    setValue,
  } = useForm<FormData>({
    defaultValues: {
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
    },
  });

  const documentTypes: Option[] = [
    { value: "employment-contract", label: "Employment Contract" },
    { value: "service-agreement", label: "Service Agreement" },
    { value: "consulting-agreement", label: "Consulting Agreement" },
    { value: "other", label: "Other" },
  ];

  const projectScopes: Option[] = [
    { value: "individual", label: "Individual" },
    { value: "group", label: "Group" },
    { value: "team", label: "Team" },
  ];

  const legalClauses: Option[] = [
    { value: "job-responsibilities", label: "Job Responsibilities"},
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
  };

  return (
    <div className="font-varela-round mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Document Type */}
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
              {documentTypes.map((type) => (
                <SelectItem key={type.value} value={type.value}>
                  {type.label}
                </SelectItem>
              ))}
            </CustomSelect>
          )}
        />

        {/* Project Scope */}
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
              {projectScopes.map((scope) => (
                <SelectItem key={scope.value} value={scope.value}>
                  {scope.label}
                </SelectItem>
              ))}
            </CustomSelect>
          )}
        />

        {/* Party A and B */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Party A */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <h3 className="text-base font-medium text-gray-700">Party A*</h3>
              <button type="button" className="text-blue-600 hover:text-blue-800">
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <div className="space-y-3">
              <CustomInput
                htmlFor="partyAName"
                
                placeholder="Enter Party A Name"
                error={errors.partyAName?.message}
                {...register("partyAName", { required: "Party A name is required" })}
              />
              <CustomTextarea
                htmlFor="partyAAddress"
                
                placeholder="Enter Party A Address"
                rows={4}
                error={errors.partyAAddress?.message}
                {...register("partyAAddress", { required: "Party A address is required" })}
              />
            </div>
          </div>

          {/* Party B */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <h3 className="text-base text-gray-700">Party B*</h3>
              <button
                type="button"
                className="text-blue-600 hover:text-blue-800"
                onClick={() => setShowAdditionalPartyB(!showAdditionalPartyB)}
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <div className="space-y-3">
              <CustomInput
                htmlFor="partyBName"
                
                placeholder="Enter Party B Name"
                error={errors.partyBName?.message}
                {...register("partyBName", { required: "Party B name is required" })}
              />
              <CustomTextarea
                htmlFor="partyBAddress"
            
                placeholder="Enter Party B Address"
                rows={3}
                error={errors.partyBAddress?.message}
                {...register("partyBAddress", { required: "Party B address is required" })}
              />
            </div>
          </div>
        </div>

        {/* Date Fields */}
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

        {/* Legal Clauses */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-700">Select Legal Clauses</h3>
          <div className="flex flex-wrap gap-2">
            {legalClauses.map((clause) => {
              const isSelected = watch("selectedClauses")?.includes(clause.value);
              return (
                <button
                  key={clause.value}
                  type="button"
                  onClick={() => handleClauseToggle(clause.value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    clause.active || isSelected
                      ? "bg-[#004487] text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {clause.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Info Section */}
        <div className="">
          <div className="flex items-start space-x-2">
            <Info className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-blue-800">
                Document Type: <span className="text-blue-600">Employment Contract</span>
              </p>
              <p className="text-sm text-blue-700 mt-1">Clauses: 1/5</p>
              <p className="text-xs text-blue-600 mt-1">
                **By default, the selected clauses that require your input have a value that you can change to suit your needs.**
              </p>
            </div>
          </div>
        </div>

        {/* Job Responsibilities */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-700">Job Responsibilities</h3>
            <button type="button" className="text-blue-600 hover:text-blue-800">
              <Info className="h-4 w-4" />
            </button>
          </div>
          <p className="text-sm text-gray-600">
            Outline the duties and responsibilities of the employee.
          </p>
          <CustomTextarea
            htmlFor="jobResponsibilities"
            placeholder="Software Engineer, responsible for developing and maintaining applications"
            rows={4}
            {...register("jobResponsibilities")}
          />
        </div>

        {/* User Clauses */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-700">User Clauses</h3>
            <button
              type="button"
              className="text-blue-600 hover:text-blue-800"
              onClick={() => setShowAdditionalUserClause(!showAdditionalUserClause)}
            >
              <Plus className="h-4 w-4" />
            </button>
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

        {/* Submit Button */}
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
