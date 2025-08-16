"use client";
import { useAnalytics } from "@/lib/useAnalytics";

export default function SignupPage() {
  useAnalytics("signup");
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 max-w-md">
      <h1 className="text-3xl font-semibold tracking-tight text-gray-900">Sign up</h1>
      <form className="mt-6 grid gap-4" onSubmit={(e) => e.preventDefault()}>
        <div className="grid gap-1">
          <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
          <input id="name" name="name" className="rounded-xl border border-gray-300 px-3 py-2 focus-ring" required />
        </div>
        <div className="grid gap-1">
          <label htmlFor="company" className="text-sm font-medium text-gray-700">Company</label>
          <input id="company" name="company" className="rounded-xl border border-gray-300 px-3 py-2 focus-ring" required />
        </div>
        <div className="grid gap-1">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">Work email</label>
          <input id="email" name="email" type="email" className="rounded-xl border border-gray-300 px-3 py-2 focus-ring" required />
        </div>
        <div className="grid gap-1">
          <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
          <input id="password" name="password" type="password" className="rounded-xl border border-gray-300 px-3 py-2 focus-ring" required />
        </div>
        <button className="inline-flex items-center rounded-xl bg-primary-600 px-5 py-3 text-white hover:bg-primary-500 focus-ring" type="submit">Create account</button>
        <p className="text-sm text-gray-500">Already have an account? <a className="text-primary-600 hover:underline" href="/login">Log in</a></p>
      </form>
    </main>
  );
}


