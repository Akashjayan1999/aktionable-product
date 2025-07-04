"use client";

import React, { useCallback, useRef } from "react";
import { useDropzone } from "react-dropzone";
import {
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
import {  X, FileText, Image as LucideImage } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { createContraktaiFormSchema } from "@/lib/zod-schema";
import { z } from "zod";
type CreateContraktaiFormValues = z.infer<typeof createContraktaiFormSchema>;
interface FileUploadProps {
  label: string;
  name: keyof CreateContraktaiFormValues;
  register: UseFormRegister<CreateContraktaiFormValues>;
  setValue: UseFormSetValue<CreateContraktaiFormValues>;
  watch: UseFormWatch<CreateContraktaiFormValues>;
  error?: { message?: string };
  required?: boolean;
  accept?: string;
  maxSize?: number;
  supportedFormats?: string;
}

const FileUpload: React.FC<FileUploadProps> = ({
  label,
  name,
  register,
  setValue,
  watch,
  error,
  required = false,
  accept = ".pdf,.doc,.docx,.jpg,.jpeg,.png,.gif",
  maxSize = 25,

}) => {
  const selectedFile = watch(name);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length > 0) {
        const file = acceptedFiles[0];
        setValue(name, file, { shouldValidate: true });
      }
    },
    [setValue, name]
  );

  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone({
      onDrop,
      noClick: true,
      noKeyboard: true,
      accept: accept
        .split(",")
        .map((ext) => ext.trim())
        .reduce((acc, ext) => {
          if (ext.startsWith(".")) {
            if ([".jpg", ".jpeg", ".png", ".gif"].includes(ext)) {
              acc["image/*"] = [...(acc["image/*"] || []), ext];
            } else if (ext === ".pdf") {
              acc["application/pdf"] = [ext];
            } else if (ext === ".doc") {
              acc["application/msword"] = [ext];
            } else if (ext === ".docx") {
              acc[
                "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              ] = [ext];
            }
          }
          return acc;
        }, {} as Record<string, string[]>),
      maxSize: maxSize * 1024 * 1024,
      multiple: false,
    });

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setValue(name, file, { shouldValidate: true });
    }
  };

  const handleRemoveFile = () => {
    setValue(name, undefined as unknown as File, { shouldValidate: true });
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const getFileIcon = (fileName: string) => {
    const extension = fileName.split(".").pop()?.toLowerCase();
    if (["jpg", "jpeg", "png", "gif"].includes(extension || "")) {
      return <LucideImage className="w-6 h-6 text-blue-500" />;
    }
    return <FileText className="w-6 h-6 text-blue-500" />;
  };

  const { ref: registerRef, ...registerRest } = register(name, {
    required: required ? `${label} is required` : false,
  });

  return (
    <div className="space-y-2">
      <Label htmlFor={name} className="block text-base font-medium mb-1">
        {label}
        {required && <span className="text-red-500">*</span>}
      </Label>

      {selectedFile instanceof File ? (
        <div className="border-2 border-gray-300 rounded-lg p-4 bg-gray-50">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {getFileIcon(selectedFile.name)}
              <div>
                <p className="text-sm font-medium text-gray-900">
                  {selectedFile.name}
                </p>
                <p className="text-xs text-gray-500">
                  {formatFileSize(selectedFile.size)}
                </p>
              </div>
            </div>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={handleRemoveFile}
              className="text-red-500 hover:text-red-700 hover:bg-red-50"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>
      ) : (
        <div
          {...getRootProps({ className: "outline-none" })}
          className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors cursor-pointer ${
            isDragActive && !isDragReject
              ? "border-blue-500 bg-blue-50"
              : isDragReject
              ? "border-red-500 bg-red-50"
              : "border-gray-300 hover:border-gray-400"
          }`}
        >
          <input
            {...getInputProps()}
            {...registerRest}
            ref={(e) => {
              registerRef(e);
              fileInputRef.current = e;
            }}
            type="file"
            accept={accept}
            onChange={handleFileInputChange}
            className="hidden"
          />
          <div className="space-y-2 ">
            <div className="flex  justify-center">
              <Image
                src="/img.svg"
                alt="Swap Icon"
                width={40}
                height={40}
                className=""
                loading="lazy"
              />
            </div>
            <div className="text-base ">
              Drop your image here, or{" "}
              <span
                onClick={() => fileInputRef.current?.click()}
                className="text-[#0385C5] hover:text-[#0385C5]  cursor-pointer"
              >
                browse
              </span>
            </div>
            <div className="text-xs">File Max size {maxSize}mb</div>
            {/* <div className="text-xs text-gray-500">Supported: {supportedFormats}</div> */}
          </div>
        </div>
      )}

      {error?.message && (
        <p className="text-sm text-red-500">{error.message}</p>
      )}
    </div>
  );
};

export default FileUpload;
