"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/lib/zod-schema";
import { z } from "zod";
import {
  Input
} from "@/components/ui/input";
import {
  Button
} from "@/components/ui/button";
import {
  Label
} from "@/components/ui/label";
import {
  Checkbox
} from "@/components/ui/checkbox";

type FormData = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-sm space-y-6"
    >
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          {...register("email")}
          placeholder="admin@gmail.com"
          className="bg-[#e5f4f1]"
        />
        {errors.email && (
          <p className="text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          {...register("password")}
          className="bg-[#e5f4f1]"
        />
        {errors.password && (
          <p className="text-sm text-red-600">{errors.password.message}</p>
        )}
      </div>

      <div className="flex justify-between items-center text-sm">
        <div className="flex items-center space-x-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <a href="#" className="text-teal-700 hover:underline">
          Forgot Password ?
        </a>
      </div>

      <Button type="submit" className="w-full bg-blue-900 text-white">
        Login
      </Button>

      <p className="text-sm text-center">
        New to Aktionable AI?{" "}
        <a href="#" className="text-blue-700 hover:underline">
          Register Now
        </a>
      </p>
    </form>
  );
}
