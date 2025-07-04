import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});


export const createProjectFormSchema = z.object({
  name: z.string().min(1, "Project name is required"),
  description: z.string().min(1, "Project description is required"),
  projectType: z.string().min(1, "Project type is required"),
});

export const documentField = z
  .instanceof(File, { message: "Document is required" })
  .refine((file) => file.size <= 25 * 1024 * 1024, {
    message: "File must be less than 25MB",
  });



export const createContraktaiFormSchema = z.object({
  projectName: z.string().min(1, "Project name is required"),
  projectDescription: z.string().min(1, "Project description is required"),
  projectScope: z.string().min(1, "Project scope is required"),
  documentType: z.string().min(1, "Document type is required"),
  document: documentField,
  languages: z.array(z.string()),
  customQuestion: z.string().optional(),
});




export const legalDocumentFormSchema = z.object({
  documentType: z.string().min(1, "Document type is required"),
  projectScope: z.string().min(1, "Project scope is required"),
  partyAName: z.string().min(1, "Party A name is required"),
  partyAAddress: z.string().min(1, "Party A address is required"),
  partyBName: z.string().min(1, "Party B name is required"),
  partyBAddress: z.string().min(1, "Party B address is required"),
  fromDate: z.string().min(1, "Start date is required"),
  toYears: z.string().min(1, "Duration is required"),
  selectedClauses: z.string(), 
  jobResponsibilities: z.string().min(1, "Job responsibilities are required"),
  userClauseName: z.string().optional(),
  customClause: z.string().optional(),
});
