import { SignIn } from "@clerk/nextjs";
import Header from "@/components/Header";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-[#f5f8ff] font-['adelle-sans']">
      <Header />
      <main className="m-auto text-center grid gap-8 pb-16 max-w-5xl">
        <SignIn redirectUrl="/dashboard" signUpUrl="/sign-up" />
      </main>
    </div>
  );
}
