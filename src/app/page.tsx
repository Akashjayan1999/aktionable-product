import LoginForm from "@/components/forms/login-form";

export default function LoginPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
      {/* Left Side */}
      <div className="flex flex-col justify-center items-center p-10 bg-white">
        <img src="/logo.svg" alt="Logo" className="mb-8 h-10" />
        <h2 className="text-2xl font-semibold mb-4">Welcome Back to</h2>
        <h1 className="text-4xl font-bold text-blue-900">
          <span className="text-teal-600">Ak</span>tionable AI
        </h1>
        <div className="mt-10 w-full flex justify-center">
          <LoginForm />
        </div>
      </div>

      {/* Right Side */}
      <div className="hidden md:flex items-center justify-center bg-[#0a0e2e] relative">
        <img
          src="/globe.png"
          alt="Network Globe"
          className="object-cover w-full h-full"
        />
       
      </div>
    </div>
  );
}

