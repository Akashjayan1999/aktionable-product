"use client";

import { useForm, Controller, Control, RegisterOptions, FieldPath } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useChat } from "../context/ChatContext";

interface IFormInput {
  language: string;
  country: string;
  type: string;
}

interface FormSelectProps {
  control: Control<IFormInput>;
  name: keyof IFormInput;
  label: string;
  placeholder: string;
  options: { label: string; value: string }[];
  rules?: RegisterOptions<IFormInput, FieldPath<IFormInput>>; 
}

const FormSelect: React.FC<FormSelectProps> = ({
  control,
  name,
  label,
  placeholder,
  options,
  rules = {},
}) => {
  return (
    <div>
      <Label htmlFor={name} className="mb-2 block text-base">
        {label}
      </Label>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <Select onValueChange={field.onChange} value={field.value}>
            <SelectTrigger
              id={name}
              className="w-full data-[placeholder]:text-gray-500"
            >
              <SelectValue placeholder={placeholder} className="" />
            </SelectTrigger>
            <SelectContent>
              {options.map((option) => (
                <SelectItem
                  key={option.value}
                  value={option.value}
                  className="font-normal font-varela-round"
                >
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      />
    </div>
  );
};

const AILawyerConfigForm: React.FC = () => {
  const { setIsConfigured } = useChat();
  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm<IFormInput>({
    defaultValues: {
      language: "",
      country: "",
      type: "",
    },
    mode: "onChange",
  });

  const onSubmit = (data: IFormInput) => {
    console.log("Submitted Config:", data);
    setIsConfigured(true);
  };

  return (
    <form
    onSubmit={handleSubmit(onSubmit)}
    className="flex-1 flex h-[80vh] min-h-[80vh] p-6 overflow-y-auto m-0 md:m-4 bg-[#CDDAEA33] rounded-2xl font-normal font-varela-round"
  >
    <div className="w-full flex flex-col h-full">
      
      <div className="flex-1">
        <div>
          <h1 className="text-3xl mb-2 font-varela-round dark:bg-gradient-to-r dark:from-[#fff] dark:to-[#fff] bg-gradient-to-r from-[#009588] to-[#004487] bg-clip-text text-transparent">
            Hello Admin, How can I assist you today?
          </h1>
          <p className="text-muted-foreground pt-4 text-lg">
            I&apos;m your AI Lawyer, here to provide answers to your legal
            queries. Before we begin, I need some information from you. Please
            select the relevant options below and submit them. I&apos;ll
            configure a chat window tailored to your needs based on the details
            you provide.
          </p>
        </div>

        <div className="space-y-4 mt-6">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold pb-3">Configure Your Chat Settings</h3>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <FormSelect
                control={control}
                rules={{ required: true }} 
                name="language"
                label="Select Language"
                placeholder="English"
                options={[
                  { label: "English", value: "english" },
                  { label: "Spanish", value: "spanish" },
                ]}
              />

              <FormSelect
                control={control}
                name="country"
                label="Select Country"
                rules={{ required: true }} 
                placeholder="India"
                options={[
                  { label: "India", value: "india" },
                  { label: "USA", value: "usa" },
                ]}
              />

              <FormSelect
                control={control}
                name="type"
                label="Select Type"
                rules={{ required: true }} 
                placeholder="Contract AI Lawyer"
                options={[
                  { label: "Contract AI Lawyer", value: "contract" },
                ]}
              />
            </div>

            <p className="text-lg text-muted-foreground pt-2">
              Contract Drafting & Review, Contract Compliance Monitoring, Risk
              Identification and Mitigation, Legal Clauses Standardization,
              Contract Negotiation Assistance, Performance and Termination
              Clauses
            </p>
          </div>
        </div>
      </div>

     
      <div className="pt-6 mt-auto w-fit ml-auto md:mr-8 md:mb-8">
        <Button type="submit" className="w-full text-base cursor-pointer dark:bg-white dark:text-black" disabled={!isValid}>Create Your Lawyer Chat</Button>
      </div>
    </div>
  </form>
);
};

export default AILawyerConfigForm;
