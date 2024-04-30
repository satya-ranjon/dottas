import React from "react";
import LoginForm from "@/components/ui/login-form";
import Logo from "@/components/ui/Logo";

const Login = () => {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex  w-full items-center bg-primary p-3 md:h-36">
          <div className=" mx-auto">
            <Logo />
          </div>
        </div>
        <LoginForm />
      </div>
    </main>
  );
};

export default Login;
