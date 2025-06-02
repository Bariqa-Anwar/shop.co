import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-sm sm:p-8">
        <SignUp
          appearance={{
            elements: {
              rootBox: "w-full",
              card: "w-full shadow-none border-0 p-0",
              header: "text-center",
              headerTitle: "text-xl font-semibold text-gray-900",
              headerSubtitle: "text-sm mt-2 text-gray-600",
              socialButtons: "grid gap-3 mt-6",
              socialButtonsBlockButton:
                "border border-gray-200 hover:bg-gray-50 transition-colors",
              dividerLine: "my-6 bg-gray-200",
              dividerText: "text-gray-500 text-xs",
              formFieldLabel: "text-sm font-medium text-gray-700",
              formFieldInput:
                "rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500",
              formButtonPrimary:
                "w-full mt-4 bg-black hover:bg-gray-800 transition-colors",
              footerActionText: "text-sm text-gray-600",
              footerActionLink: "text-sm font-medium text-black hover:text-gray-800",
              formFieldSuccessText: "text-xs text-green-600",
            },
          }}
          path="/sign-up"
          routing="path"
          signInUrl="/sign-in"
          afterSignUpUrl="/"
        />
      </div>
    </main>
  );
}