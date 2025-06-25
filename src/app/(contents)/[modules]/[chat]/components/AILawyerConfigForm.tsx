"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

interface AILawyerConfigFormProps {
  onConfigSubmit: (data: any) => void;
}

const AILawyerConfigForm: React.FC<AILawyerConfigFormProps> = ({
  onConfigSubmit,
}) => {
  const { handleSubmit, setValue, watch } = useForm();

  const language = watch("language");
  const country = watch("country");
  const type = watch("type");

  const onSubmit = (data: any) => {
    onConfigSubmit(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex-1 flex p-4 overflow-y-auto"
    >
      <div className="w-full max-w-4xl space-y-6">
        <div>
          <h1 className="text-2xl font-semibold mb-2">
            Hello Admin, How can I assist you today?
          </h1>
          <p className="text-muted-foreground">
            I&apos;m your AI Lawyer, here to provide answers to your legal
            queries. Before we begin, I need some information from you. Please
            select the relevant options below and submit them. I&apos;ll
            configure a chat window tailored to your needs based on the details
            you provide.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Configure Your Chat Settings</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Language */}
            <div>
              <Label htmlFor="language" className="mb-2 block">
                Select Language
              </Label>
              <Select
                onValueChange={(value) => setValue("language", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="English" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="english">English</SelectItem>
                  <SelectItem value="spanish">Spanish</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Country */}
            <div>
              <Label htmlFor="country" className="mb-2 block">
                Select Country
              </Label>
              <Select onValueChange={(value) => setValue("country", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="India" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="india">India</SelectItem>
                  <SelectItem value="usa">USA</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Type */}
            <div>
              <Label htmlFor="type" className="mb-2 block">
                Select Type
              </Label>
              <Select onValueChange={(value) => setValue("type", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Contract AI Lawyer" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="contract">Contract AI Lawyer</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <p className="text-sm text-muted-foreground">
            Contract Drafting & Review, Contract Compliance Monitoring, Risk
            Identification and Mitigation, Legal Clauses Standardization,
            Contract Negotiation Assistance, Performance and Termination
            Clauses
          </p>

          <div className="flex justify-end">
            <Button type="submit">Create Your Lawyer Chat</Button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AILawyerConfigForm;
