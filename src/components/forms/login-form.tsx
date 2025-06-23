"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/lib/zod-schema";
import { z } from "zod";
import { useRouter } from 'next/navigation'
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
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    router.push("/home");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-lg space-y-5 login-input font-varela-round font-normal"
    >
      <div className="">
        
        <Input
          id="email"
          type="email"
          {...register("email")}
          placeholder="admin@gmail.com"
          autoComplete="off"
          className="h-12 font-quicksand bg-[#e5f4f1] border-none text-base focus-visible:ring-[1px] focus-visible:ring-[#009588] focus-visible:outline-none"
        />
        {errors.email && (
          <p className="text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      <div className="">
      
        <Input
          id="password"
          type="password"
          {...register("password")}
          autoComplete="new-password"
          placeholder="********"
          className="h-12 font-quicksand bg-[#e5f4f1] border-none text-base focus-visible:ring-[1px] focus-visible:ring-[#009588] focus-visible:outline-none"
        />
        {errors.password && (
          <p className="text-sm text-red-600">{errors.password.message}</p>
        )}
      </div>

      <div className="flex justify-between items-center text-sm -mt-2">
        <div className="flex text-base items-center space-x-1">
          <Checkbox id="remember" className="shadow-none border border-[#004487]" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <a href="#" className="text-[#009588] text-sm hover:underline">
          Forgot Password ?
        </a>
      </div>

      <Button type="submit" variant="blueSolid">
        Login
      </Button>

      <p className="text-sm text-start -mt-2">
        New to Aktionable AI?{" "}
        <a href="#" className="text-[#004487] hover:underline">
          Register Now
        </a>
      </p>
    </form>
  );
}
