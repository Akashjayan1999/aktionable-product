import LoginForm from "@/components/forms/login-form";
import Image from "next/image";
export default function LoginPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[44%_56%] min-h-screen">
      {/* Left Side */}
      <div className="lg:ml-24 md:ml-8 flex flex-col justify-center bg-white">
        <div className="flex flex-col items-center px-5 md:px-10">
          <div className="w-full max-w-lg relative">
            <Image
              src="/logo.svg"
              alt="Aktionable AI Logo"
              width={200}
              height={200}
              className="img-absolute absolute -top-40 left-0"
            />

            <div className="text-center mb-8 xl:mb-10 mt-10">
              <h2 className="text-lg md:text-xl font-medium leading-normal font-quicksand text-[#004487]">
                Welcome Back to
              </h2>
              <h1 className="text-4xl md:text-5xl font-normal text-[#004487] font-varela-round">
                A<span className="text-[#009588]">kt</span>ionable AI
              </h1>
            </div>

            <LoginForm />
            <div className="footer flex flex-col items-center text-center text-sm absolute  -bottom-45 font-quicksand img-absolute-icon">
              <div className="footer-icon">
                <Image
                  src="/logo-icon.svg"
                  alt="Aktionable AI Logo"
                  width={40}
                  height={40}
                  className="pb-3 "
                />
              </div>
              <div className="footer-text">
                The Aktionable.ai Platform empowers you to deploy responsible AI
                solutions quickly and confidently
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="hidden md:flex items-center justify-center bg-[#0a0e2e] relative">
        <Image
          src="/login-image.svg"
          alt="Network Globe"
          fill
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}
